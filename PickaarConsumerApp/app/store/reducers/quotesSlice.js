import { createSlice } from "@reduxjs/toolkit";
import { frameQuoteBoxFunction } from "../../utils/helpersFn";

const initialState = {
    bookingList: [], // Include both Vehicle & Driver Booking
    bookingLoader: true,
    quoteItemLoader: null,
    selectedIndex: 0,
    quotesList: [
        // {
        //     bookingId: null,
        //     bookingType: null,
        //     quotesList: []
        // }   
    ],
    detailScreenRedirectTo: ''
}

export const quotesSlice = createSlice({
    name: 'quotes',
    initialState,
    reducers: {

        onSuccessBookingDetailById(state, action) {
            // const quotesList = action.payload.response;
            // console.log(JSON.stringify(quotesList.length));
            // const { bookingId } = action.payload.response;
            // // const _QuotesList = state.quotesList;
            // const _QuotesList = state.quotesList.length;
            // const isExist = (_QuotesList.length > 0) ? _QuotesList.some(e => e.bookingId == bookingId) : false;
            // console.log(JSON.stringify(quotesList.length))
            // console.log("STATUS0"+isExist)

            // // const quotesList = action.payload?.response?.data?.quotesList;
            // // const bookingRefId = action.payload.response?.data?.bookingRefId;
            // // const _QuotesList = state.quotesList;
            // // const isExist = (_QuotesList.length > 0) ? _QuotesList.some(e => e.bookingId == bookingRefId) : false;

            // // if (isExist) {
            // //     _NewQuotes = _QuotesList.filter(quote => quote.bookingId != bookingRefId);
            // //     state.quotesList.push(quotesList);
            // // } else
            // if (isExist) {
            //     _NewQuotes = _QuotesList.filter(quote => quote.bookingId != bookingId);
            //     state.quotesList.push(quotesList);
            //     // console.log(JSON.stringify(_NewQuotes))
            // } else
            //     state.quotesList = quotesList;

            // state.quoteItemLoader = false;

            const quotesList = action.payload?.response?.data?.quotesList;

            // console.log('new redues',quotesList);
            // const bookingRefId = action.payload.response?.data?.bookingRefId;
            // const _QuotesList = state.quotesList;
            // const isExist = (_QuotesList.length > 0) ? _QuotesList.some(e => e.bookingId == bookingRefId) : false;

            // if (isExist) {
            //     _NewQuotes = _QuotesList.filter(quote => quote.bookingId != bookingRefId);
            //     state.quotesList.push(quotesList);
            // } else
            // console.log(JSON.stringify(quotesList))
            // const _QuoteList = quotesList.map((quote) => {
            //     return frameQuoteBoxFunction(quote)
            // })

            // let _QuoteList = [];
//first
            for (const quote of quotesList) {
                state.quotesList.push(frameQuoteBoxFunction(quote))
            }
            console.log("resdues quote",quotesList.length)
            // state.quotesList= [];
            // state.quotesList.push(_QuoteList);
            // console.log(`Reducer Quote ${state.quotesList}`)
    //new add
            // state.quotesList = quotesList;


            state.quoteItemLoader = false;

            
        },


        onFailureBookingDetailById(state, action) {
            state.quoteItemLoader = false;
            state.bookingErrMSG = 'Unable to retrive Booking Details.'
        },

        onSuccessLisOfBookingByPhoneNo(state, action) {
            let bookingList = action.payload.data;
            state.bookingList = bookingList;
            state.bookingLoader = false;
        },

        onFailureLisOfBookingByPhoneNo(state, action) {
            state.bookingLoader = false;
            state.bookingErrMSG = 'Unable to retrive Booking Details.'
        },

        setQuoteParam(state, action) {
            state[action.payload.key] = action.payload.value
        }

    }
})

// Action creators are generated for each case reducer function
export const {
    onSuccessBookingDetailById,
    onFailureBookingDetailById,
    onSuccessLisOfBookingByPhoneNo,
    onFailureLisOfBookingByPhoneNo,
    setQuoteParam,
    navigateTo
} = quotesSlice.actions

export default quotesSlice.reducer