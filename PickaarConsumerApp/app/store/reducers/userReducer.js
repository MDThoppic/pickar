import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    // userID: '',
    phoneNo: '',
    name:'',
    // deviceId: null,
    loginState: false,  //login state checking  localstorage(sqllite) to save
    isLoading: false,
    profileStatus: null, // then profile status check to enable redirect to dashboard
    isPhoneNoValidateStatus: false
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {

        // App Handshake callbacks
        onSuccessHandShake(state, action) {
            const { data } = action.payload;
            // console.log("redux",action.payload)
            state.phoneNo = data?.phoneNo || '';
            // state.phoneNo = phoneNo || '';
            console.log("redux",state.phoneNo)
            state.name= data?.name ||[];
            state.profileStatus= data?.profileStatus;
            //  store it db
            state.isLoading = true;

        },
        onFailureHandShake() {
            console.log("New User from server I think")

        },

        // Validate Phone Number callbacks
        onSuccessValidatePhoneNo(state, action) {
            // state.profileStatus = true
            
        },
        onFailureValidatePhoneNo() {
            console.log("VALIDATE PHONE NO FAILURE")
        },

        // Validate OTP callbacks 
        // onSuccessValidateOTP(state, action) {
        //     state.loginState = true;
        //     state.isOTPValidateStatus = true;
        // },
        // onFailureValidateOTP(state, action) {
        //     state.loginState = false;
        //     state.isOTPValidateStatus = false;

        // },

        setParam(state, action) {
            state[action.payload.key] = action.payload.value
        }

    }
})

// Action creators are generated for each case reducer function
export const { getUser, setParam, onFailureHandShake, getUserAddress, onSuccessHandShake, onSuccessValidatePhoneNo, onFailureValidatePhoneNo, onSuccessValidateOTP, onFailureValidateOTP } = userSlice.actions

export default userSlice.reducer