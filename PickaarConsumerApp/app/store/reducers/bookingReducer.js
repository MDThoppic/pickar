import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    // isLoading: false,
    district: '' || null,//district to store temperary in redex
    bookingList: [

    ],
}

export const bookingReducer = createSlice({
    name: 'booking',
    initialState,
    reducers: {
        //get booking details
        onSuccessBookingDetails(state, action) {
            // console.log("reduxer")
            let bookingList = action.payload?.data;
            state.bookingList = bookingList;
            console.log("reduxer", JSON.stringify(bookingList))
            // state.isLoading = true
        },
        onFailureBookingDetails(state, action) {
            state.bookingErrMSG = 'Unable to retrive Booking Details.'
            console.log(state.bookingErrMSG);

        },
        setBookingParam(state, action) {
            state[action.payload.key] = action.payload.value
        }
    }
})
export const {
    onSuccessBookingDetails,
    onFailureBookingDetails,
    setBookingParam
} = bookingReducer.actions;

export default bookingReducer.reducer

