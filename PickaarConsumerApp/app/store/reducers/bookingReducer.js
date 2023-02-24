import { createSlice } from '@reduxjs/toolkit'
import React from 'react'

const initialState={
    isLoading:false,
    bookingList:[

    ],
}


export const bookingReducer=createSlice({
    name:'booKing',
    initialState,
    reducers:{
        onSuccessBookingDetails(state,action){
            bookingList=action.payload;
            state.isLoading=true
        },
        onFailureBookingDetails(){
            
        }
    }
}) 
 
