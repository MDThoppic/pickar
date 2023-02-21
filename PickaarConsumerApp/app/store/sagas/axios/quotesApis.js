import axios from 'axios';
import { BOOKING_END_URL } from "@env";


export const axiosListOfBookingByPhoneNo = async (requestData) => {
    try {
        const bookingListObj = await axios.get(
            BOOKING_END_URL + 'booking/getCabBookingListByPhoneNo',
            {
                params: requestData,
                responseType: 'json'
            }
        );
        return bookingListObj.data;
        // const userObj = await require('../../../mockAPI/userAPI.json');
        // const result = JSON.parse(JSON.stringify(userObj));
        // return result.login;
    } catch (e) {
        return false
    }
};

export const axiosQuoteDetailsByBookingId = async (bookingId) => {
    try {
        const QuoteListObj = await axios.get(
            BOOKING_END_URL + 'quote/getQuotes/' + bookingId,
            { responseType: 'json' }
        );
        console.log(JSON.stringify("<<<<<<<<<",bookingId ));        
        return QuoteListObj.data;
        // const bookingObj = await require('../../../mockAPI/quotesAPI.json');
        // const result = JSON.parse(JSON.stringify(bookingObj));
        // return result.quotesDetailById;
    } catch (e) {
        return e
    }
};