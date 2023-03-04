
import { useSelector } from 'react-redux';
import { call, put, select } from 'redux-saga/effects';
import { onSuccessBookingDetails, onFailureBookingDetails } from '../../reducers/bookingReducer';
import { axiosgetCustBookingDetails } from '../axios/GetBookingApi'
import * as selectors from './selectors'

export function* getCustBookingDetails(request) {
    const { district } = request;
    console.log("welcome",district)
    const responce = yield call(() => {
        return axiosgetCustBookingDetails(district)
    })
    // console.log("responce data", JSON.stringify(responce))
    if (responce.status == 200) {
        // console.log("if condition", responce)
        yield put(onSuccessBookingDetails(responce))

    } else {
       yield put(onFailureBookingDetails())
    }
}
