import { call, put, select } from "redux-saga/effects";
import {  onSuccessFeedbackByVendorId, onFailureFeedbackByVendorId } from "../../reducers/feebackReducer";
import {  axiosFeedbackByVendorId } from "../axios/FeedbackApi";
import * as selectors from './selectors';

/**
 * @description: Get toll route
 * @todo: Develop TOLL API service in BE to return proper data 
 * @param {*} request 
            {
                type: CALL_SAGA.REQUEST_BOOKING_LEVEL_ONE,
                serviceId: 105,
                serviceName:'BookingConfirmation',
                deviceId: '987-23423-234-234-234'
            }
 */
export function* getFeedbackByVendorId() {
    const { quotesList, selectedIndexselectedIndex } = yield select(selectors.feedback);
    const vendorId = quotesList[selectedIndexselectedIndex].vendor.vendorId;

    const _FeedbackByVendorIdResponse = yield call(() => {
        return axiosFeedbackByVendorId(vendorId)
    })

    if (!_FeedbackByVendorIdResponse){
        yield put(onFailureFeedbackByVendorId({}))
    }
    yield put(onSuccessFeedbackByVendorId(_FeedbackByVendorIdResponse))

}
