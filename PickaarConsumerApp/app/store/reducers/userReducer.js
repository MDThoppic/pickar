import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    // userID: '',
    phoneNo: '',
    name:'',
    emailId:'',
    fcmToken:'',
    deviceId: null,
    loginState: false,
    emergencyContacts: [],
    createdOn: '',
    locations: [],
    isLoading: false,
    profileStatus: false,
    isPhoneNoValidateStatus: false
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {

        // App Handshake callbacks
        onSuccessHandShake(state, action) {
            const { data } = action.payload;
            state.phoneNo = data?.phoneNo || '';
            // state.emergencyContacts = data?.emergencyContacts || [];
            // console.log("ADDRESS>>>>"+JSON.stringify(data?.locations))
            // state.locations = data?.locations || [];
            // state.createdOn = data?.createdOn || '';
            state.name= data?.name ||[];
            // state.emailId=data?.emailId||[];
            state.isLoading = true;

        },
        onFailureHandShake() {
            console.log("New User from server I think")

        },

        // Validate Phone Number callbacks
        onSuccessValidatePhoneNo(state, action) {
            state.profileStatus = true
            
        },
        onFailureValidatePhoneNo() {
            console.log("VALIDATE PHONE NO FAILURE")
        },

        // Validate OTP callbacks 
        onSuccessValidateOTP(state, action) {
            state.loginState = true;
            state.isOTPValidateStatus = true;
        },
        onFailureValidateOTP(state, action) {
            state.loginState = false;
            state.isOTPValidateStatus = false;

        },

        setParam(state, action) {
            state[action.payload.key] = action.payload.value
        }

    }
})

// Action creators are generated for each case reducer function
export const { getUser, setParam, onFailureHandShake, getUserAddress, onSuccessHandShake, onSuccessValidatePhoneNo, onFailureValidatePhoneNo, onSuccessValidateOTP, onFailureValidateOTP } = userSlice.actions

export default userSlice.reducer