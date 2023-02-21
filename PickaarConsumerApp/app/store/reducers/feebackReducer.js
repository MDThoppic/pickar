import { createSlice } from "@reduxjs/toolkit";
import date from 'date-and-time';
const initialState = {
    feedbackList: []
}

export const feedbackReducer = createSlice({
    name: 'feedback',
    initialState,
    reducers: {
        onSuccessFeedbackByVendorId(state, action) {
            // state.feedbackList = action.payload;
            state.feedbackList=action.payload.data.venderId;
        },
        onFailureFeedbackByVendorId(state, action) {
            state.feedbackErrmsg="Unable to retrive vendor details"
        }

    }
})

export const {
    onSuccessFeedbackByVendorId
} = feedbackReducer.actions

export default feedbackReducer.reducer