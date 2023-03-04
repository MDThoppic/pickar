import { Text } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';

export const wrapTextContent = (mytextvar, maxlimit) => {
    return (
        <Text>{((mytextvar).length > maxlimit) ?
            (((mytextvar).substring(0, maxlimit - 3)) + '...') :
            mytextvar}</Text>
    )
}


/**
 * @param {login} status
 * @info : Store async status  
 */

export const storeData = async (key, value) => {
    try {
        return await AsyncStorage.setItem(key, value)
    } catch (e) {
        // saving error
        return e
    }
}


export const getData = async (key) => {
    try {
        return await AsyncStorage.getItem(key);
    } catch (e) {
        // error reading value
        return e
    }
}

export const frameQuoteBoxFunction = (quotesList) => {
    
    return {
        // "from":quotesList.dropAddress.distance,


        // "quoteId": quotesList._id,
        // "vendorName": quotesList?.vendor?.name,
        // "vendorAge":quotesList?.vendor?.age,
        // "vendorId": quotesList?.vendor?.vendorId,
        // "vendorStarRating": quotesList?.vendor?.starRating,
        // "vendorExp": quotesList?.vendor?.exp,
        // "vendorCarType": quotesList?.car?.carModel,
        // "vendorCarName": "Honda City",
        // "vendorLuggageCapacity": quotesList?.car?.carLuggage,
        // "bookingPrivilege": quotesList?.quote?.bookingPrivilege,
        // "quotedAmtByKM": quotesList?.quote?.quotedAmt,
        // "quoteVendorAmt": quotesList?.quote?.beta,
        // "save": quotesList?.quote?.save,
        // "isNegotiable": quotesList?.quote?.isNegotiable,
        // "quotedAproxAmt": quotesList?.quote?.quotedAproxAmt,
        // "feedbackDetails": {},
        "moreInfo": [
            {
                "title": "Driver & Vehicle Details",
                "titleSize": "small",
                "list": [
                    {
                        "key": "Name",
                        "value":'mohamud',
                        "valueType": "text",
                        "type": "singleLine"
                    },
                    {
                        "key": "Age",
                        "value": 12,
                        "valueType": "text",
                        "type": "singleLine"
                    },
                    {
                        "key": "Car Details",
                        "value": "Ritz",
                        "type": "multiLineWithInfo",
                        "info": "Minimal luggage space and compact modal",
                        "modalType": "CAR_DETAIL_MODAL",
                        "modalContent": {}
                    },
                    {
                        "key": "Ratings, Feedbacks & Badges",
                        "type": "singleLine",
                        "valueType": "redirect",
                        "navigateTo": "feedback"
                    }
                ]
            },
            {
                "title": "Travel Details",
                "titleSize": "small",
                "list": [
                    {
                        "type": "multiLine",
                        "key": "From Address",
                        "value":  '32/1 muslim street pulimedu vellore tamilnadu'
                    },
                    {
                        "type": "multiLine",
                        "key": "To Address",
                        "value":"32/1 muslim street pulimedu chennai tamilnadu  Pincode-",
                        "style": "{ borderTopWidth: StyleSheet.hairlineWidth, borderTopColor: themeColors.gray}"
                    },
                    {
                        "key": "Approximate Distance",
                        "value": "215Km",
                        "valueType": "text",
                        "type": "singleLine"
                    },
                    {
                        "key": "Approximate Travel Time",
                        "value": "3 hrs,10 min",
                        "valueType": "text",
                        "type": "singleLine"
                    },
                    {
                        "key": "Travel type",
                        "value": "Outstaion",
                        "valueType": "text",
                        "type": "singleLine"
                    },
                    {
                        "key": "No. Of passangers",
                        "value": 5,
                        "valueType": "text",
                        "type": "singleLine"
                    },
                    {
                        "key": "Start Date & Time",
                        "value": 12/11/2023,
                        "valueType": "text",
                        "type": "singleLine"
                    },
                    {
                        "key": "Return Date & Time",
                        "value":23/11/2023,
                        "valueType": "text",
                        "type": "singleLine"
                    }
                ]
            },
            {
                "title": "Driver & Vehicle Details",
                "titleSize": "small",
                "list": [
                    {
                        "key": "Driver Quoted Per Km",
                        "value":'/km',
                        "valueType": "text",
                        "type": "singleLine"
                    },
                    {
                        "key": "Extra KM",
                        "value": '/km',
                        "type": "multiLineWithInfo",
                        "info": "This charge applicable for additional KM.",
                        "modalType": "INFO",
                        "modalContent": "This charge applicable for additional KM."
                    },
                    {
                        "key": "Driver Beta",
                        "value":500,
                        "type": "multiLineWithInfo",
                        "info": "Driver beta applicable for Outstation trips only.",
                        "modalType": "INFO",
                        "modalContent": "Driver beta applicable for Outstation trips only."
                    },
                    {
                        "key": "Toll Charges",
                        "value": "Excluded",
                        "type": "multiLineWithInfo",
                        "info": "You need to pay directly to driver before crossing Tolls.",
                        "modalType": "INFO",
                        "modalContent": "You need to pay directly to driver before crossing Tolls."
                    },
                    {
                        "key": "State Tax",
                        "value": "Excluded",
                        "type": "multiLineWithInfo",
                        "info": "You need to pay directly to driver before entering other States.",
                        "modalType": "INFO",
                        "modalContent": "You need to pay directly to driver before entering other States."
                    }
                ]
            }
        ]
    }
}

