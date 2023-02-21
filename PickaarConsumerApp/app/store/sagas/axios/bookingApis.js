import { BOOKING_END_URL } from "@env";
import axios from 'axios';


export const axiosTollRoute = async () => {
    try {
        const tollRouteObj = await axios.get(
            BOOKING_END_URL + 'booking/tollRoute/'
        );
        // console.log(BOOKING_END_URL);
        return tollRouteObj;
    } catch (e) {
        return false
    }
};

export const axiosBookingConfirmRequest = async (requestData) => {
    try {
        console.log(BOOKING_END_URL + 'booking/initCabBooking')
        const response = await axios.post(
            BOOKING_END_URL + 'booking/initCabBooking',
            { booking: requestData }
        );
        console.log(response)
        return response;

    } catch (e) {
        return false
    }
};

export const axiosBookingRequest = async (requestData) => {
    try {
        const bookingObj = await require('../../../mockAPI/bookingAPI.json');

        const result = JSON.parse(JSON.stringify(bookingObj));
        return result.bookingLevelOne;
    } catch (e) {
        return false
    }
};


