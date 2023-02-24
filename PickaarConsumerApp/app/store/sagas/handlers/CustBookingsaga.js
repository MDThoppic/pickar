
import { call, put } from 'redux-saga/effects';
import {onSuccessBookingDetails,onFailureBookingDetails} from '../../reducers/bookingReducer';
import { axiosgetCustBookingDetails } from '../axios/GetBookingApi'

export default function getCustBookingDetails() {
    let resp = call(() => {
        return axiosgetCustBookingDetails(request)
    })
    if (resp.status == 200) {
         put(onSuccessBookingDetails(resp))

    } else
         put(onFailureBookingDetails())
}
