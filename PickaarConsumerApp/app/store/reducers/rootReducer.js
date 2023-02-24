import { combineReducers } from 'redux';
import { feedback } from '../sagas/handlers/selectors';
import  bookingReducer  from './bookingReducer';
// import bookingSlice from './bookingReducer';
// import dashboardReducer from './dashboardReducer';
// import feebackReducer from './feebackReducer';
import modalSlice from './modalReducer';
// import quotesSlice from './quotesSlice';
import userReducer from './userReducer';


/**
 * Use 'combineReducers' wisely if required example :merge different type of booking reducer 
 */
// const combineReducers = combineReducers({
//     dashboardReducer,
//     userReducer
// })

export default {
    // dashboard: dashboardReducer,
    user: userReducer,
    // booking:bookingReducer,
    // quotes: quotesSlice,
    modal: modalSlice,
    // feedback:feebackReducer
}