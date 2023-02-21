import react, { useState, useRef, useEffect } from 'react';
import { View, Text, StyleSheet } from "react-native";
import Carousel from 'react-native-snap-carousel';
import { themeColors } from '../../../../utils/constant';
import { DEVICE_WIDTH } from '../../../../utils/dimentions';
import date from 'date-and-time';
import PIcon, { PIcons } from '../../../../components/brick/Icon';
import { fonts } from '../../../../utils/theme';
import { useDispatch, useSelector } from 'react-redux';
import types from '../../../../store/sagas/types/types';
import LottieView from 'lottie-react-native';
import { setQuoteParam } from '../../../../store/reducers/quotesSlice';
import { SelectedBookingJSX } from '../../../../components/rooms/customerCard/singleCustomerCard';

const BookingItemDriverJSX = ({ item }) => {
    return (
        <>
        </>
    )
}

// const BookingItemVehicleJSX = ({ item }) => {

//     const rowOne = [
//         {
//             address: item.pickupAddress,
//             dateTime: item.pickUpDate + item.pickUpTime
//         },
//         {
//             address: item.dropAddress,
//             dateTime: false,
//             tripTypeDetail: item.tripTypeDetail
//         }
//     ]

//     const rowTwo = [
//         {
//             Key: 'Vehicle',
//             Value: item.vehicleType
//         },
//         {
//             Key: 'Seater',
//             Value: item.seaters
//         },
//         {
//             Key: 'Distance',
//             Value: item.distance
//         }
//     ]

//     return (
//         <View style={[styles.container]}>
//             <View style={styles.BookingitemBlockA}>

//                 {
//                     rowOne.map((item, index) => {
//                         console.log(item)
//                         return (
//                             <View key={index} style={[{ flexDirection: 'row', alignItems: 'center' }, { paddingTop: index == 1 ? 10 : 0 }]}>
//                                 <PIcon name="circle" type={PIcons.Feather} size={13} style={{ color: '#fff' }} />
//                                 <View>
//                                     <Text style={[styles.labelOne]}> {item.address}</Text>
//                                     {item.dateTime == false ? <Text style={styles.labelTwo}>{item.tripTypeDetail} </Text> : <Text style={styles.labelTwo}>{item.dateTime}</Text>}
//                                 </View>
//                             </View>
//                         )
//                     })
//                 }

//             </View>

//             <View style={styles.itemRowTwoContainer}>
//                 {
//                     rowTwo.map((item, index) => {
//                         // const itemValue = item.Value;
//                         const valueLength = item.Key === 'Vehicle' ? true ? true : false : '';

//                         return (
//                             <View key={index} style={[styles.itemRowTwo, index == 2 ? {} : styles.itemRowTwoExtra]}>
//                                 <View style={{ flexDirection: 'column', height: '100%', alignItems: "center", justifyContent: "space-around" }}>
//                                     <><Text style={[styles.labelOne]}>{item.Key} </Text></>
//                                     <><Text style={[styles.subLabel, (valueLength) ? { fontSize: 12 } : { fontSize: 12 }]}>{item.Value}</Text></>
//                                 </View>
//                             </View>
//                         )
//                     })
//                 }
//             </View>
//         </View>
//     )
// }

const bookingListJSX = ({ item, index }) => {
    // console.log("bookinglist",item)

    return (

        <>
            {
                item.vehicleType != 'VEHICLE' &&
                <SelectedBookingJSX item={item} from={''} />
            }

            {
                item.vehicleType === 'DRIVER' &&
                <BookingItemDriverJSX item={item} />
            }
        </>
    )
}

const AcitveBookings = () => {
    console.log("ACTIVE BOOKING ")
    const dispatch = useDispatch();
    const bookingList = useSelector((state) => state.quotes.bookingList)
    const bookingLoader = useSelector((state) => state.quotes.bookingLoader)
    const getType = (index) => (bookingList[index].bookingType !== 'VEHICLE') ? types.REQUEST_GET_QUOTE_DETAILS_BY_BOOKINGID : types.REQUEST_GET_DRIVER_DETAILS_BY_ID;
    
    // const getType = (index) => (bookingList[index].vehicleType != 'VEHICLE') ? types.REQUEST_GET_QUOTE_DETAILS_BY_BOOKINGID : types.REQUEST_GET_DRIVER_DETAILS_BY_ID;
    const payload = (index) => {
        // console.log("bookingList",bookingList[index]._id)
        return {
            bookingId: bookingList[index]._id
            // bookingType: bookingList[index].bookingType
        }
    }
    // console.log(bookingList)

    /**
     * @description : onLoad of Active booking List in Top Carousal // Customer's
     */
    useEffect(() => {
        dispatch(setQuoteParam({ key: "bookingLoader", value: true }))
        dispatch({ type: types.REQUEST_GET_LIST_OF_BOOKINGS_BY_PHONE_NO })
        // console.log(JSON.stringify(bookingList));
        // console.log({ type: types.REQUEST_GET_LIST_OF_BOOKINGS_BY_PHONE_NO },"activebooking")
        return () => {

        }
    }, [])

    /**
    * @description : Once booking List received. get details for first booking item // Driver's quotes
    */
    useEffect(() => {
        if (bookingList.length > 0 && bookingLoader == false) {
            dispatchLoadBookingDetails(0);
        }

    }, [bookingList, bookingLoader])

    const dispatchLoadBookingDetails = async (index) => {
        console.log(index)
        await dispatch(setQuoteParam({ key: "quoteItemLoader", value: true }));
        await dispatch(setQuoteParam({ key: "selectedIndex", value: index }));
        await dispatch({
            type: getType(index),
            payload: payload(index)
        });
    }

    const carouselRef = useRef('')

    return (
        <>
            {
                bookingLoader && bookingList ?
                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                        <LottieView
                            style={{ height: 100 }}
                            source={require('../../../../../assets/lottie/activeLoader2.json')}
                            autoPlay={true}
                        />
                    </View>
                    :
                    <>
                        <Carousel
                            ref={carouselRef}
                            data={bookingList}
                            layout='default'
                            inactiveSlideOpacity={0.8}
                            inactiveSlideScale={0.8}
                            inactiveSlideShift={8}
                            renderItem={bookingListJSX}
                            sliderHeight={150}
                            itemHeight={150}
                            itemWidth={DEVICE_WIDTH * 0.7}
                            vertical={false}
                            sliderWidth={DEVICE_WIDTH}
                            onSnapToItem={(index) => dispatchLoadBookingDetails(index)}
                        />
                    </>
            }
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        width: '100%',
        backgroundColor: themeColors.primary,
        borderRadius: 15,
        height: 150,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 7,
        },
        shadowOpacity: 0.43,
        shadowRadius: 9.51,
        elevation: 15,
    },
    BookingitemBlockA: {
        width: '100%',
        height: 100,
        padding: 20,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: themeColors.yellow
    },
    labelOne: {
        color: themeColors.white,
        fontFamily: fonts.RubikBold,
        fontSize: 12,
        paddingLeft: 5
    },
    labelTwo: {
        color: themeColors.yellow,
        fontFamily: fonts.RubikBold,
        fontSize: 9,
        paddingLeft: 10
    },
    subLabel: {
        color: themeColors.yellow,
        fontFamily: fonts.RubikRegular,
        fontSize: 13
    },
    itemRowTwo: {
        padding: 3,
        width: '33%'
    },
    itemRowTwoContainer: {
        flexDirection: 'row',
        height: 50,
        width: '100%'
    },
    itemRowTwoExtra: {
        borderRightWidth: StyleSheet.hairlineWidth,
        borderRightColor: themeColors.yellow
    }
})

export default AcitveBookings;