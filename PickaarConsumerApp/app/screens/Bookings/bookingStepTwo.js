import { View, TouchableOpacity, ScrollView, Text, StyleSheet, StatusBar, Linking, Platform, Alert } from "react-native";
import { DEVICE_HEIGHT, DEVICE_WIDTH } from "../../utils/dimentions";
import * as Animatable from 'react-native-animatable';
import { Label, Value } from "../../components/brick/text";
import { themeColors } from "../../utils/constant";
import PIcon, { PIcons } from "../../components/brick/Icon";
import { fonts } from "../../utils/theme";
import { PBtn } from "../../components/brick/button";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useState, useRef } from 'react';
import CheckBox from 'react-native-check-box';
import { openGps } from "../../utils/maps";
import { wrapTextContent } from "../../utils/helpersFn";
import { ModalLoader } from "../../components/brick/loader";
import { loader, setBookingParam } from "../../store/reducers/bookingReducer";
import types from "../../store/sagas/types/types";
import { Toast } from "../../components/brick/toast";


const TollDetails = ({ tolls }) => {

    return (
        <View style={{
            paddingHorizontal: 20,
            marginTop: 20
        }}>
            <View style={{ flexDirection: "row", justifyContent: "flex-start" }}>
                <Text style={{ fontFamily: fonts.RubikBold, fontSize: 20, color: themeColors.primary }} >Tolls Details</Text>
            </View>
            <View style={{
                paddingVertical: 10,
                flexDirection: 'column',
                justifyContent: 'space-between',
                alignItems: 'center'
            }}>
                {
                    tolls.map((obj, index) => {
                        return (

                            <View key={index} style={{
                                flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '100%',
                                borderTopWidth: StyleSheet.hairlineWidth,
                                borderTopColor: themeColors.gray,
                                paddingVertical: 10
                            }}>
                                <View style={{}}>
                                    <Text style={{
                                        fontSize: 13,
                                        fontFamily: fonts.RubikRegular
                                    }}>{obj.name} </Text>
                                </View>
                                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                                    <View style={{}}>
                                        <Text style={{
                                            fontSize: 14,
                                            fontFamily: fonts.RubikMedium,
                                            color: themeColors.darkGray
                                        }}  >
                                            {'\u20B9'}{obj.tagCost}
                                        </Text>
                                    </View>
                                    <TouchableOpacity onPress={() => openGps(obj.lat, obj.lng)}>
                                        <PIcon style={{ paddingLeft: 5, color: themeColors.infoHighlightColor, opacity: 0.9 }} type={PIcons.Feather} name="map-pin" size={15}></PIcon>
                                    </TouchableOpacity>
                                </View>
                            </View>

                        )
                    })
                }
            </View>
        </View>
    )
}

const PrintExtraBookingData = () => {
    const extraBookingDetails = useSelector((state) => state.booking.tollDetail);
    const { status, hasTolls, duration, distance, route, tolls } = extraBookingDetails?.data || '';
    const isTollAvailable = (hasTolls) ? 'Yes' : 'No';


    const reviewData = [
        {
            label: 'Approximate Distance',
            value: distance
        },
        {
            label: 'Approximate Duration',
            value: duration
        },
        {
            label: 'This Route has Tolls?',
            value: isTollAvailable
        }
    ]

    return (
        <>
            <View style={styles.container}>
                <View style={styles.blocks}>
                    {
                        reviewData.map((obj, index) => {
                            return (
                                <View key={index + 1} style={[styles.items]}>
                                    <Label>{obj.label}</Label>
                                    <View style={{ flexDirection: "row", justifyContent: "flex-start" }}>
                                        <Value>{obj.value}</Value>
                                    </View>
                                </View>
                            )
                        })
                    }
                </View>
            </View>
            <TollDetails tolls={tolls} />
        </>
    )

}

const PrintReviewBookingData = () => {
    const tripType = useSelector((state) => state.booking.tripType);
    const _trypType = (tripType == 1) ? 'ONE WAY TRIP' : 'ROUND TRIP';
    const reviewData = [
        {
            label: 'Pickup Address',
            value: useSelector((state) => state.booking.pickupAddress).address
        },
        {
            label: 'Drop Address',
            value: useSelector((state) => state.booking.dropAddress).address
        },
        {
            label: 'Pickup Date',
            value: useSelector((state) => state.booking.pickUpDate)
        },
        {
            label: 'Pickup Time',
            value: useSelector((state) => state.booking.pickUpTime)
        },
        {
            label: 'Vehicle Type / Seating Capacity',
            value: `${useSelector((state) => state.booking.vehicleType)} /  ${useSelector((state) => state.booking.seaters)}`
        },
        {
            label: 'Trip Type',
            value: _trypType
        }
    ]
    // Single WOMEN
    const isSingleWomen = useSelector((state) => state.booking.isSingleWomen)
    if (isSingleWomen)
        reviewData.push({
            label: 'Single Women',
            value: useSelector((state) => state.booking.vehicleType)
        })

    // Comments    
    const comments = useSelector((state) => state.booking.comments)
    if ((comments.trim()).length > 2) // More than 2 char min
        reviewData.push({
            label: 'Comments',
            value: useSelector((state) => state.booking.comments)
        })

    //Booking for OTHERs
    const forOther = useSelector((state) => state.booking.isSingleWomen)
    if (forOther) // More than 2 char min
        reviewData.push({
            label: 'Others Name',
            value: useSelector((state) => state.booking.OthersName)
        }, {
            label: 'Others Phone Number',
            value: useSelector((state) => state.booking.OthersPhoneNo)
        })

    return (
        <View style={styles.container}>
            <View style={styles.blocks}>
                {
                    reviewData.map((obj, index) => {
                        return (
                            <View key={index + 1} style={[styles.items]}>
                                <Label>{obj.label}</Label>
                                <View style={{ flexDirection: "row", justifyContent: "flex-start" }}>
                                    <Value>{obj.value}</Value>
                                </View>
                            </View>
                        )
                    })
                }
            </View>
        </View>
    )
}

export default function StepTwo({ navigation }) {
    const modalRef = useRef();
    const loading = useSelector((state) => state.booking.loading);
    const bookingCompletionStatus = useSelector((state) => state.booking.bookingCompletionStatus);
    const dispatch = useDispatch();
    const [termAndCondition, setTermAndCondition] = useState(false)
    let tandC;
    useEffect(() => {
        modalRef.current.handleModal(loading);
        if (bookingCompletionStatus) {
            // dispatch(setBookingParam({ key: "tollRouteResponse", value: false }));

            setTimeout(() => {
                Alert.alert(
                    "Info",
                    "Your Booking order has been placed sucessfully. Please get updates in Active section",
                    [
                        {
                            text: "OK",
                            onPress: () => {
                                navigation.navigate('dashboard', { screen: 'Active' })
                            }
                        }
                    ]
                )
            }, 500)
        }
    }, [loading, bookingCompletionStatus])

    useEffect(() => {
        tandC = termAndCondition;
    }, [termAndCondition])

    const backPressed = () => {
        navigation.goBack();
    }

    const stageOneSubmit = async () => {

        if (!termAndCondition) {
            Toast({ message: "Please select Term & condition to proceed." })
            return
        }

        await dispatch(loader({ status: true }));
        dispatch({ type: types.NEW_BOOKING_CONFIRMATION });

    }

    return (
        <View style={{ flex: 1 }}>
            <StatusBar translucent={true} backgroundColor={'transparent'} barStyle="dark-content" />

            <View style={{ flex: 0.24 }}>

                <TouchableOpacity onPress={backPressed} style={{
                    position: 'absolute', paddingLeft: 10, paddingTop: 30, zIndex: 2,
                }} >
                    <PIcon type={PIcons.Feather} name="arrow-left" size={25}></PIcon>
                </TouchableOpacity>

                <View style={styles.headerMapContainer}>
                    <Animatable.Image animation="bounceIn"
                        duraton="1500" style={styles.headerImg} source={require('../../../assets/sample_gmap.png')} />
                </View>
            </View>

            <ScrollView style={{ flex: 2 }} contentContainerStyle={{ flexGrow: 1 }}>

                <View style={{ marginLeft: 0, paddingLeft: 0, paddingLeft: DEVICE_WIDTH * 0.03, }}>

                    <View style={{ marginTop: 20 }}>
                        <Text style={{ fontSize: 25, fontFamily: fonts.RubikMedium }}> Review</Text>
                    </View>
                </View>

                <PrintReviewBookingData />

                <PrintExtraBookingData />

                <CheckBox
                    style={{ paddingTop: 10, marginLeft: 20 }}
                    onClick={() => {
                        // dispatch(setBookingParam({ key: "termAndCondition", value: true }));
                        setTermAndCondition(cur => cur = !cur)
                    }}
                    isChecked={termAndCondition}
                    rightText={"Please accept Terms and Condition"}
                    rightTextStyle={{ color: themeColors.primary }} />

                <View style={{
                    width: DEVICE_WIDTH,
                    // flexDirection: 'row',
                    justifyContent: "center",
                    marginBottom: 40,
                    marginTop: 40,
                    alignItems: 'center'
                }}>
                    <PBtn
                        config={{
                            label: 'Confirm',
                            icon: {
                                isRequired: false
                            },
                            customStyles: {
                                container: {
                                    width: '80%',
                                }
                            }
                        }}
                        onPress={stageOneSubmit} />
                </View>

            </ScrollView>
            <ModalLoader ref={modalRef} msg={'Booking is in process. Please wait...'} />

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: DEVICE_WIDTH,
        paddingLeft: DEVICE_WIDTH * 0.05,
        paddingRight: DEVICE_WIDTH * 0.05,
        alignItems: 'flex-start',
    },
    tollBlock: {
        marginTop: 20,
        borderRadius: 30,
        width: DEVICE_WIDTH * 0.9,
        marginLeft: DEVICE_WIDTH * 0.05,
        alignItems: 'flex-start',
        justifyContent: "flex-start",
        height: 'auto',
        backgroundColor: themeColors.light,
        padding: 20,
        marginBottom: 30
    },
    items: {
        paddingLeft: 10,
        flexDirection: "column",
        justifyContent: "flex-start",
        marginTop: 10
    },
    headerMapContainer: {
        flex: 1,
        zIndex: 1,
        top: 0,

    },
    headerImg: {
        height: DEVICE_HEIGHT * 0.2,
    },
    blocks: {
        borderLeftWidth: 5,
        borderLeftColor: themeColors.yellow,
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
        marginBottom: 20,
        marginTop: 20
    }
})