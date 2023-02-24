import axios from 'axios';
import { BOOKING_END_URL } from "@env";

export const axiosgetCustBookingDetails = async (request) => {
    try {
        console.log(USER_END_URL)
        // const userObj = await axios.get(
        //     BOOKING_END_URL + 'user/vendors/details/',
        //     //' http://192.168.43.10:4003/api/user/vendors/details/'+phoneNo,
        //     {
        //         responseType: 'json'
        //     }
        // );

        const BookingObj=await require('../../../mockAPI/quotesAPI.json');
        console.log("Api test", JSON.stringify(BookingObj.bookingListByPhoneNo));
        return BookingObj.bookingListByPhoneNo;
        ;
    } catch (e) {
        console.log("Api test error", JSON.stringify(e));
        return false
    }
};