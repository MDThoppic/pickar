import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    promotionBanners: []
}

export const dashboardSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        onSuccessDashboard(state, action) {
            console.log(action.payload)
            // const {}
            console.log("DASHBOARD onSuccess reducer")

            return { ...state, ...action.payload }
        },
        onFailureDashboard(state, action) {
            console.log("DASHBOARD onFailure reducer")
        }
    }
})

// Action creators are generated for each case reducer function
export const { onSuccessDashboard, onFailureDashboard } = dashboardSlice.actions

export default dashboardSlice.reducer
