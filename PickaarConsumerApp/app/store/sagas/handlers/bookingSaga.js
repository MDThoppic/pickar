import { call, put, select } from "redux-saga/effects";
import { onFailureLevelOneBooking, onSuccessNewBooking, onFailureNewBooking, onSuccessTollRoute, onFailureTollRoute } from "../../reducers/bookingReducer";
import { axiosBookingConfirmRequest, axiosBookingRequest, axiosTollRoute } from "../axios/bookingApis";
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
export function* getTollRouteData() {
    const requestParam = {
        type: 'CALL_SAGA.TOLL_ROUTE_DATA',
        serviceId: 105,
        serviceName: 'TollRoute',
        deviceId: '987-23423-234-234-234',
    }

    const _TollRouteResponse = yield call(() => {
        return axiosTollRoute(requestParam)
    })

    if (!_TollRouteResponse)
        yield put(onFailureTollRoute({}))

    yield put(onSuccessTollRoute(_TollRouteResponse))

}
/**
 * @description: On booking level two. 
 * @todo: Develop service to set status of completion
 * @param {*} request 
            {
                type: CALL_SAGA.REQUEST_BOOKING_LEVEL_ONE,
                serviceId: 105,
                serviceName:'BookingConfirmation',
                deviceId: '987-23423-234-234-234'
            }
 */
export function* getBookingsConfirm() {
    const { pickupAddress, dropAddress, pickUpDate, pickUpTime, vehicleType, seaters, tripType,
        returnDate, comments, distance, duration, isTollAvailable, isBookingForOthers, OthersPhoneNo,
        OthersName, isSingleWomen } = yield select(selectors.bookings);
    const { phoneNo, username, emailId, name, fcmToken, emergencyContacts } = yield select(selectors.user);
    const booking = Object.assign({},
        {
            user: {
                phoneNo, username, emailId, name, fcmToken, emergencyContacts
            }
        },
        {
            pickupAddress, dropAddress, pickUpDate, pickUpTime, vehicleType, seaters, tripType,
            returnDate, comments, distance, duration, isTollAvailable, isBookingForOthers, OthersPhoneNo,
            OthersName, isSingleWomen
        }, {
        type: 'CALL_SAGA.REQUEST_BOOKING_LEVEL_TWO',
        serviceId: 106,
        serviceName: 'QuoteConfirmation',
        deviceId: '987-23423-234-234-234'
    })

    const _BookingConfirmation = yield call(() => {
        return axiosBookingConfirmRequest(booking)
    })
    console.log(JSON.stringify(_BookingConfirmation))
    if (!_BookingConfirmation) {
        yield put(onFailureNewBooking(_BookingConfirmation))
        return
    }
    // yield new Promise(resolve =>
    //     setTimeout(() => {
    //         resolve();
    //     }, 3000)
    // );

    yield put(onSuccessNewBooking(_BookingConfirmation))

}

/**
 *
 * @description: On booking level one. 
 * @todo: Develop service to RETURN toll API details to show in confirmation page 
 * @param {*} request 
            {
                type: CALL_SAGA.REQUEST_BOOKING_LEVEL_ONE,
                serviceId: 103,
                serviceName:'DashboardOnLoad',
                deviceId: '987-23423-234-234-234'
            }
 */
export function* getBookingsTollDetails() {
    const bookingObj = yield select(selectors.bookings);
    const requestParam = {
        type: 'CALL_SAGA.REQUEST_BOOKING_LEVEL_ONE',
        serviceId: 104,
        serviceName: 'BookingLevelOne',
        deviceId: '987-23423-234-234-234',
        bookingObj
    }

    const _BookingLevelOneResponse = yield call(() => {
        return axiosBookingRequest(requestParam)
    })

    if (!_BookingLevelOneResponse)
        yield put(onFailureLevelOneBooking(_BookingLevelOneResponse))


    yield new Promise(resolve =>
        setTimeout(() => {
            resolve();
        }, 3000)
    );

    yield put(onSuccessfulLevelOneBooking(_BookingLevelOneResponse))

}