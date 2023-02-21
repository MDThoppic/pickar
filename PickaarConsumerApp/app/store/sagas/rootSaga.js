import { takeEvery } from "redux-saga/effects";
import { getBookingsConfirm, getBookingsTollDetails, getTollRouteData } from "./handlers/bookingSaga";
import { getDashboardSAGA } from "./handlers/dashboardSaga";
import { getListOfBookingsByPhoneNo, getBookingsDetailsByID, getQuotesDetailsByBookingID } from "./handlers/quotesSaga";
import { initializeHandShakeSagas, createNewAccountSaga, validateOTPSaga } from "./handlers/userSaga";
import { getFeedbackByVendorId } from './handlers/feedbackSaga';
import CALL_SAGA from './types/types';


export default function* rootSaga() {
    yield takeEvery(CALL_SAGA.REQUEST_HANDSHAKE, initializeHandShakeSagas);
    yield takeEvery(CALL_SAGA.REQUEST_CREATE_NEW_ACCOUNT, createNewAccountSaga);
    yield takeEvery(CALL_SAGA.REQUEST_VALIDATE_OTP, validateOTPSaga);
    // DASHBOARD
    yield takeEvery(CALL_SAGA.REQUEST_DASHBOARD_ON_LOAD, getDashboardSAGA);

    // ON CUSTOMER BOOKING
    yield takeEvery(CALL_SAGA.TOLL_ROUTE_DATA, getTollRouteData);
    // yield takeEvery(CALL_SAGA.REQUEST_BOOKING_LEVEL_ONE, getBookingsTollDetails);
    yield takeEvery(CALL_SAGA.NEW_BOOKING_CONFIRMATION, getBookingsConfirm);

    // ACTIVE BOOKING SCREEN

    yield takeEvery(CALL_SAGA.REQUEST_GET_LIST_OF_BOOKINGS_BY_PHONE_NO, getListOfBookingsByPhoneNo);
    yield takeEvery(CALL_SAGA.REQUEST_GET_QUOTE_DETAILS_BY_BOOKINGID, getQuotesDetailsByBookingID);

    //FEEDBACK SCREEN
    yield takeEvery(CALL_SAGA.REQUEST_GET_VENDOR_FEEDBACK_BY_VENDORID, getFeedbackByVendorId);
    


    // yield takeEvery(CALL_SAGA.REQUEST_GET_DRIVER_DETAILS_BY_ID, getBookingsDetailsByID1);

}