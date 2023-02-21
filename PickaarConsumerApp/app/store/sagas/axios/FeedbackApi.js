import axios from 'axios';
import { BOOKING_END_URL } from "@env";


export const axiosFeedbackByVendorId = async (venderId) => {
    try {
        const feedbackListObj = await axios.get(
            BOOKING_END_URL +'booking/getFeedback' + venderId ,
            { responseType: 'json' }
        );
           console.log("feedback responce",feedbackListObj)
        return feedbackListObj.data;
             
    } catch (e) {
        return e
    }
};