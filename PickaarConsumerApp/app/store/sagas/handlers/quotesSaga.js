import { call, put, select } from "redux-saga/effects";
import { onFailureBookingDetailById, onFailureLisOfBookingByPhoneNo, onSuccessBookingDetailById, onSuccessLisOfBookingByPhoneNo } from "../../reducers/quotesSlice";
import { axiosListOfBookingByPhoneNo, axiosQuoteDetailsByBookingId } from "../axios/quotesApis";
import * as selectors from './selectors';

/**
 *  ACTIVE BOOKING FIRST SCREEN
 * @description: On swipe of booking active main screen. 
 * @todo: Develop service to RETURN quote details by ID 
 * @param {*} request 
            {
                type: 'CALL_SAGA.REQUEST_GET_LIST_OF_BOOKINGS_BY_PHONE_NO',
                serviceId: 105,
                serviceName: 'BookingListOfBookings',
                deviceId: '987-23423-234-234-234',
                bookingId,
                bookingType
            }
 */
export function* getListOfBookingsByPhoneNo() {
    const { phoneNo } = yield select(selectors.user);

    const requestParam = {
        type: 'CALL_SAGA.REQUEST_GET_LIST_OF_BOOKINGS_BY_PHONE_NO',
        serviceId: 105,
        serviceName: 'BookingListOfBookings',
        deviceId: '987-23423-234-234-234',
        phoneNo
    }

    /**
     * @todo: filter orders by booking and driver and assing it accordingly
     * For booking orders list use bookingReducer ( bookingList )
     * For driver orders list use driverReducer ( create newly )
     */
    const _BookingListOfBookingResponse = yield call(() => {
        return axiosListOfBookingByPhoneNo(requestParam)
    })

    if (!_BookingListOfBookingResponse) {
        yield put(onFailureLisOfBookingByPhoneNo(_BookingListOfBookingResponse))
        return
    }

    // yield new Promise(resolve =>
    //     setTimeout(() => {
    //         resolve();
    //     }, 100)
    // );

    yield put(onSuccessLisOfBookingByPhoneNo(_BookingListOfBookingResponse))
//  console.log("bookinglist",_BookingListOfBookingResponse)
}
/**
 * ACTIVE BOOKING FIRST SCREEN
 * @description: On swipe of booking active main screen. 
 * @todo: Develop service to RETURN quote details by ID 
 * @param {*} request 
            {
                type: 'CALL_SAGA.REQUEST_GET_BOOKING_DETAILS_BY_ID',
                serviceId: 106,
                serviceName: 'BookingGetDetailsByID',
                deviceId: '987-23423-234-234-234',
                bookingId,
                bookingType
            }
 */
export function* getQuotesDetailsByBookingID(request) {
    const { bookingId } = request.payload;
    const _QuoteDetailsByBookingId = yield call(() => {
        return axiosQuoteDetailsByBookingId(bookingId)
    })

    if (!_QuoteDetailsByBookingId) {
        yield put(onFailureBookingDetailById(_QuoteDetailsByBookingId))
        return false
    }

    // yield new Promise(resolve =>
    //     setTimeout(() => {
    //         resolve();
    //     }, 100)
    // );
    const response = { bookingId, response: _QuoteDetailsByBookingId}
    // const response = { bookingId, response: _QuoteDetailsByBookingId.data.quotesList }
    // console.log(">>>>>>>>>>>>>>",response)
    yield put(onSuccessBookingDetailById(response))

}