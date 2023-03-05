import axios from 'axios';
import { BOOKING_END_URL } from "@env";
import { useSelector } from 'react-redux';

export const axiosgetCustBookingDetails = async (district) => {
    console.log(BOOKING_END_URL)
    try {
        console.log("try", BOOKING_END_URL,  { district: JSON.parse(district)  })
        const userObj = await axios.post(
            // BOOKING_END_URL + 'booking/bookirnglist',
            'http://192.168.132.50:4002/api/booking/bookinglist',
            { district: JSON.parse(district)  }
        );
        // console.log("Api result",userObj.data)
        return userObj.data;


        // const BookingObj = await require('../../../mockAPI/quotesAPI.json');
        // console.log("Api test", JSON.stringify(BookingObj.bookingListByPhoneNo));
        // return BookingObj;
    } catch (e) {
        console.log("Api test error", JSON.stringify(e));
        return false
    }
};

export const axiospostvendorQuotesDetails = async (bookingId) => {
    console.log(BOOKING_END_URL)
    try {
        const quteObj = await axios.post(
            BOOKING_END_URL + 'booking/bookirnglist/'+bookingId,
            // 'http://192.168.132.50:4002/api/booking/bookinglist',
            { district: JSON.parse(district)  }
        );
        // console.log("Api result",userObj.data)
        return quteObj;        
    } catch (e) {
        console.log("Api test error", JSON.stringify(e));
        return false
    }
};