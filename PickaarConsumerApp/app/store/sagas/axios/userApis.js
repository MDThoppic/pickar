import axios from 'axios';
import { USER_END_URL } from "@env";

export const axiosHandShakeRequest = async (request) => {
    const { phoneNo } = request
    console.log("Api test handshake", JSON.stringify(phoneNo));
    try {
        console.log(USER_END_URL)
        const userObj = await axios.get(
            USER_END_URL + 'user/vendors/details/' + phoneNo,
            //    ' http://192.168.43.10:4003/api/user/vendors/details/'+phoneNo,
            // {
            //     params:phoneNo,
            //     // responseType: 'json'
            // }
        );
        console.log("Api test", JSON.stringify(userObj.data));
        return userObj;
        // const userObj = await require('../../../mockAPI/userAPI.json');
        // const result = JSON.parse(JSON.stringify(userObj));
        // return result.login;
    } catch (e) {
        console.log("Api test error", JSON.stringify(e));
        return false
    }
};

export const axioscreateNewAccountAPI = async (phoneNo, name) => {
    console.log(">>>>", phoneNo, name);
    try {
        const response = await axios({
            method: 'POST',
            url: USER_END_URL + 'user/vendors/newvendor',
            // url:'http://192.168.54.50:4003/api/user/vendors/newvendor',
            responseType: 'json',
            data: { phoneNo, name }
        });
        console.log("responce", response.data)

        return response;

    } catch (e) {
        return false
        console.log(e);
    }

};

// export const axiosOTPValidate = async (requestData) => {
//     try {
//         const userObj = await require('../../../mockAPI/userAPI.json');
//         const result = JSON.parse(JSON.stringify(userObj));
//         return result.validateOTPAPI;
//     } catch (e) {
//         return false
//     }
// };