import { call, put } from "redux-saga/effects";
import { onFailureHandShake, onSuccessHandShake, onSuccessValidatePhoneNo, onFailureValidatePhoneNo, onFailureValidateOTP, onSuccessValidateOTP } from "../../reducers/userReducer";
import { axiosHandShakeRequest, axioscreateNewAccountAPI, axiosOTPValidate } from "../axios/userApis";
import * as selectors from './selectors';

/**
 *
 * @description: called after entering Phone Number. 
 * @todo: Send OTP PN to this deviceID 
 * @param {*} request 
            {
            `   type: CALL_SAGA.REQUEST_VALIDATE_PHONE_NUMBER,
                serviceId: 100,
                serviceName: 'HandShake',
                deviceId: '987-23423-234-234-234',
            }
 */
export function* initializeHandShakeSagas(request) {
    console.log(`REUQEST by Api:${JSON.stringify(request)}`)
    let resp = yield call(() => {
        return axiosHandShakeRequest(request)
    })
    console.log("WORKING  "+JSON.stringify(resp))
    if (resp.status == 200) {
        yield put(onSuccessHandShake(resp.data))

    } else
        yield put(onFailureHandShake())

    // yield put(onSuccessHandShake(resp))
}

/**
 *
 * @description: called after entering Phone Number. 
 * @todo: Develop service to Send OTP PN to this deviceID 
 * @param {*} request 
            {
                type: CALL_SAGA.REQUEST_VALIDATE_PHONE_NUMBER,
                serviceId: 101,
                deviceId: '987-23423-234-234-234',
                phoneNo: phoneNo,
                serviceName: 'ValidateOTP'
            }
 */
export function* createNewAccountSaga(request) {
    const { phoneNo,name } = request;
    console.log("NEW ACCOUNT:-" + JSON.stringify(request))
    const response = yield call(() => {
        return axioscreateNewAccountAPI(phoneNo,name)
    })
    console.log(response)
    if (response.status != 200)
        yield put(onFailureValidatePhoneNo())

    yield put(onSuccessValidatePhoneNo())
}

/**
 *
 * @description: called after entering OTP. 
 * @todo: Develop service to validate OTP PN to this deviceID 
 * @param {*} request 
            {
                type: CALL_SAGA.REQUEST_VALIDATE_PHONE_NUMBER,
                serviceId: 102,
                serviceName:'OTPValidate',
                deviceId: '987-23423-234-234-234',
                otpValue: 1234
            }
 */
export function* validateOTPSaga(request) {
    const _OTPstatus = yield call(() => {
        return axiosOTPValidate(request)
    })

    if (!_OTPstatus.status)
        yield put(onFailureValidateOTP(_OTPstatus))

    yield put(onSuccessValidateOTP(_OTPstatus))
}