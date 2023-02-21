import { View, StyleSheet, StatusBar, ScrollView, Text, TouchableOpacity, TextInput } from "react-native";
import React, { useEffect, useState, useRef } from 'react';
import { TextField } from '@ubaids/react-native-material-textfield';
import { Label, PHeadings, Value } from "../../components/brick/text";
import { themeColors } from "../../utils/constant";
import { DEVICE_WIDTH, DEVICE_HEIGHT } from "../../utils/dimentions";
import { fonts } from "../../utils/theme";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import date from 'date-and-time';
import { PBtn } from "../../components/brick/button";
import { loader, setBookingParam } from "../../store/reducers/bookingReducer";
import { useDispatch, useSelector } from "react-redux";
import Toast from "react-native-easy-toast";
import CheckBox from 'react-native-check-box';
import PIcon, { PIcons } from "../../components/brick/Icon";
import types from "../../store/sagas/types/types";
import { ModalLoader } from "../../components/brick/loader";

const PickUpAddressfn = () => {
    /**
     * @todo hardcoded for google map development
     */
    const dispatch = useDispatch();
    // useEffect(() => {
    //     dispatch(setBookingParam({
    //         key: "pickupAddress", value: {
    //             name: "Home",
    //             loc: {
    //                 type: "Point",
    //                 coordinates: [
    //                     -73.97,
    //                     40.77
    //                 ]
    //             },
    //             address: "32/1 muslim street,pulimedu,vellore",
    //             address2: "",
    //             pincode: 632006,
    //             district: "CHENNAI"
    //         }
    //     }));
    // }, [dispatch])
    return (
        <View style={{ flexDirection: "column", justifyContent: "flex-start" }}>
            <Label>Pickup Address</Label>
            <View style={{ flexDirection: "row", justifyContent: "flex-start" }}>
                {/* <Value>Tiru Nagar, Vellore</Value> */}
                <TextInput
                    style={{ width: 250, height: 25, fontSize: 20, }}
                    keyboardType='default'
                    maxLength={100}
                    placeholder='pickupAddress'
                    onChangeText={(pickupAddress) => dispatch(setBookingParam({ key: "pickupAddress", value: {
                name: "Home",
                loc: {
                    type: "Point",
                    coordinates: [
                        -73.97,
                        40.77
                    ]
                },
                address: pickupAddress,
                address2: "",
                pincode: 632006,
                district: "CHENNAI"
            } }))}
                />
                <View style={{ backgroundColor: themeColors.yellow, marginLeft: 5, paddingLeft: 5, paddingRight: 5 }}>
                    <Text style={{ color: themeColors.primary, fontFamily: 'auto', fontWeight: "bold", letterSpacing: 0 }}>Edit</Text>
                </View>
            </View>
        </View>
    )
}

const DropAddress = () => {
    /**
     * @todo hardcoded for google map development & create common function for all dispatches
     */
    const dispatch = useDispatch();
    
    // useEffect(() => {
    //     dispatch(setBookingParam({
    //         key: "dropAddress", value: {
    //             loc: {
    //                 type: "Point",
    //                 coordinates: [
    //                     -73.97,
    //                     40.77
    //                 ]
    //             },
    //             address: "S2, SherWood Apt, Perumbakkam, Chennai",
    //             address2: "",
    //             pincode: 600100,
    //             district: "NELLORE"
    //         }
    //     }));
    // }, [dispatch])

    return (
        <View style={{ flexDirection: "column", justifyContent: "flex-start", marginTop: 20 }}>
            <Label>Drop Address</Label>
            <View style={{ flexDirection: "row", justifyContent: "flex-start" }}>
                {/* <Value>Perumbakkam, Vellore</Value> */}
                <TextInput
                    style={{ width: 250, height: 25, fontSize: 20, }}
                    keyboardType='default'
                    maxLength={100}
                    placeholder='DropAddress'
                    onChangeText={(DropAddress) => dispatch(setBookingParam({  key: "dropAddress", value: {
                loc: {
                    type: "Point",
                    coordinates: [
                        -73.97,
                        40.77
                    ]
                },
                address: DropAddress,
                address2: "",
                pincode: 600100,
                district: "NELLORE"
            } }))}

                />
                <View style={{ backgroundColor: themeColors.yellow, marginLeft: 5, paddingLeft: 5, paddingRight: 5 }}>
                    <Text style={{ color: themeColors.primary, fontFamily: 'auto', fontWeight: "bold", letterSpacing: 0 }}>Edit</Text>
                </View>
            </View>
        </View>
    )
}

const PickupDateAndTime = () => {
    const dispatch = useDispatch();
    const dateString = useSelector((state) => state.booking.pickUpDate);
    const timeString = useSelector((state) => state.booking.pickUpTime);
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [isTimePickerVisible, setTimePickerVisibility] = useState(false);
    const showDatePicker = () => setDatePickerVisibility(true);
    const hideDatePicker = () => setDatePickerVisibility(false);
    const showTimePicker = () => setTimePickerVisibility(true);
    const hideTimePicker = () => setTimePickerVisibility(false);

    const handleDateConfirm = (dateObj) => {
        const formattedDate = date.format(new Date(dateObj), 'DD/MM/YYYY');
        dispatch(setBookingParam({ key: "pickUpDate", value: formattedDate }));
        hideDatePicker();
    };

    const handleTimeConfirm = (dateObj) => {
        const formattedDate = date.format(new Date(dateObj), 'hh:mm:ss', false);
        dispatch(setBookingParam({ key: "pickUpTime", value: formattedDate }));
        hideTimePicker();
    };
    
    return (
        <View style={{ marginTop: 20 }}>
            <Label>Select Pickup Date & Time</Label>
            <View style={{ flexDirection: "row" }} >
                <TouchableOpacity onPress={showDatePicker} style={{ borderWidth: StyleSheet.hairlineWidth, paddingVertical: 5, paddingHorizontal: 10, borderRadius: 10 }}>
                    <Value>{dateString}</Value>
                </TouchableOpacity>
                <TouchableOpacity onPress={showTimePicker} style={{ borderWidth: StyleSheet.hairlineWidth, paddingVertical: 5, paddingHorizontal: 10, marginLeft: 5, borderRadius: 10 }}>
                    <Value>{timeString}</Value>
                </TouchableOpacity>
            </View>
            <DateTimePickerModal
                isVisible={isDatePickerVisible}
                mode="date"
                textColor="white"
                onConfirm={handleDateConfirm}
                onCancel={hideDatePicker}
            />
            <DateTimePickerModal
                isVisible={isTimePickerVisible}
                mode="time"
                textColor="white"
                onConfirm={handleTimeConfirm}
                onCancel={hideTimePicker}
            />
        </View>
    )
}


const VehicleType = () => {
    const dispatch = useDispatch();
    const vehicleType = useSelector((state) => state.booking.vehicleType);
    const seaters = useSelector((state) => state.booking.seaters);
    // const [seatters, setSeatters] = useState(5);
    const vehicleTypes = [
        {
            type: "HATCHBACK",
            seatters: 5
        }, {
            type: "SEDAN",
            seatters: 5
        }, {
            type: "SUV",
            seatters: 6
        }, {
            type: "MUV",
            seatters: 8
        }, {
            type: "AUTO",
            seatters: 3
        }
    ]

    return (
        <View style={{ flexDirection: "column", justifyContent: "flex-start", marginTop: 20 }}>
            <Label>Select Vehicle Type</Label>
            <View style={{ flexDirection: "row", justifyContent: "flex-start", width: DEVICE_WIDTH, flexWrap: "wrap" }}>
                {
                    vehicleTypes.map((item, index) => {
                        return (
                            <TouchableOpacity
                                key={index}
                                onPress={() => {
                                    // setVehicleType(curVehicle => curVehicle = item.type)
                                    // setSeatters(curseatters => curseatters = item.seatters)
                                    dispatch(setBookingParam({ key: "vehicleType", value: item.type }));
                                    dispatch(setBookingParam({ key: "seaters", value: item.seatters }));
                                }}
                                style={[vehicleType == item.type ? styles.vehicleTypeActive : styles.vehicleTypeInactive, styles.vehicleConatiner]}>

                                <Text style={{ fontSize: 10 }}>{item.type}</Text>
                            </TouchableOpacity>
                        )
                    })
                }

            </View>
            <View style={{ marginLeft: 5 }}>
                <Text style={{ fontSize: 13, fontFamily: fonts.RubikMediumItalic }} >Seaters: {seaters}</Text>
            </View>
        </View>
    )
}

const Comments = () => {
    const dispatch = useDispatch();

    return (
        <View style={{ width: DEVICE_WIDTH * 0.9, marginTop: 20 }}>
            <TextField
                tintColor={themeColors.primary}
                baseColor={themeColors.primary}
                labelTextStyle={{ color: themeColors.yellow }}
                label='Comments'
                onChangeText={(comments) => dispatch(setBookingParam({ key: "comments", value: comments }))}
            />
        </View>
    )
}

const ReturnDatePicker = () => {
    const dispatch = useDispatch();
    const returnDateString = useSelector((state) => state.booking.returnDate);
    const [isReturnDateVisible, setDatePickerVisibility] = useState(false);
    const showReturnDatePicker = () => setDatePickerVisibility(true);
    const hideReturnDatePicker = () => setDatePickerVisibility(false);

    const handleDateConfirm = (dateObj) => {
        const formattedDate = date.format(new Date(dateObj), 'DD/MM/YYYY');
        dispatch(setBookingParam({ key: "returnDate", value: formattedDate }));
        hideReturnDatePicker();
    };

    return (
        <View style={{ marginTop: 20 }}>
            <Label>Select Return Date </Label>
            <View style={{ flexDirection: "row" }} >
                <TouchableOpacity onPress={showReturnDatePicker} style={{ borderWidth: StyleSheet.hairlineWidth, paddingVertical: 5, paddingHorizontal: 10, borderRadius: 10 }}>
                    <Value>{returnDateString}</Value>
                </TouchableOpacity>
            </View>
            <DateTimePickerModal
                isVisible={isReturnDateVisible}
                mode="date"
                textColor="white"
                onConfirm={handleDateConfirm}
                onCancel={hideReturnDatePicker}
            />

        </View>
    )
}

const TripType = () => {
    const dispatch = useDispatch();
    const [tripType, setTripType] = useState(0);
    const styleTripType = StyleSheet.create({
        activeContainer: {
            backgroundColor: themeColors.primary
        },
        inActiveContainer: {
            backgroundColor: themeColors.white
        },
        activeText: {
            color: themeColors.white
        },
        inActiveText: {
            color: themeColors.darkGray
        }
    });


    return (
        <>
            <View style={{ width: DEVICE_WIDTH * 0.9, marginTop: 20, flexDirection: "column", alignItems: "flex-start" }}>
                <Label>Select Trip Type</Label>
                <View style={{ marginTop: 5 }}>
                    <View style={{ flexDirection: "row", width: '100%', alignitems: 'center', justifyContent: "center", height: 40 }}>
                        <TouchableOpacity onPress={() => {
                            setTripType(1)
                            dispatch(setBookingParam({ key: "tripType", value: 1 }));

                        }} style={[tripType == 1 ? styleTripType.activeContainer : styleTripType.inActiveContainer, { borderWidth: StyleSheet.hairlineWidth, borderColor: themeColors.gray, flex: 1, borderTopLeftRadius: 20, borderBottomLeftRadius: 20, alignItems: "center", justifyContent: "center" }]}>
                            <Text style={[tripType == 1 ? styleTripType.activeText : styleTripType.inActiveText, { fontFamily: fonts.RubikBold }]}> ONE WAY</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => {
                            setTripType(2)
                            dispatch(setBookingParam({ key: "tripType", value: 2 }));

                        }} style={[tripType == 2 ? styleTripType.activeContainer : styleTripType.inActiveContainer, { borderWidth: StyleSheet.hairlineWidth, borderColor: themeColors.gray, flex: 1, borderTopRightRadius: 20, borderBottomRightRadius: 20, alignItems: "center", justifyContent: "center" }]}>
                            <Text style={[tripType == 2 ? styleTripType.activeText : styleTripType.inActiveText, { fontFamily: fonts.RubikBold }]}> ROUND</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', paddingTop: 2 }}>
                    <View style={{ flex: 1, alignItems: "center" }}>
                        <Text style={{ fontFamily: fonts.RubikLight, fontSize: 10 }}>FROM {'--->'} TO</Text>
                    </View>
                    <View style={{ flex: 1, alignItems: "center" }}>
                        <Text style={{ fontFamily: fonts.RubikLight, fontSize: 10 }}>TO {'<===>'} FROM</Text>
                    </View>
                </View>
            </View>

            {tripType == 2 &&
                <ReturnDatePicker />}
        </>
    )
}

const IsBookingForOthers = () => {
    const [forOther, setForOther] = useState(false);
    const dispatch = useDispatch();
    /**
     * @todo Device API to featch contact list need to develop
     * 
     */
    return (
        <>
            {/* <Line /> */}
            <View style={{ width: '100%' }}>
                <CheckBox
                    style={{ paddingTop: 10 }}
                    onClick={() => {
                        setForOther(curr => curr = !curr);
                        dispatch(setBookingParam({ key: "isBookingForOthers", value: forOther }));
                    }}
                    isChecked={forOther}
                    rightText={"Booking for close one"}
                    rightTextStyle={{ color: themeColors.primary }}
                />
            </View>

            {
                forOther &&
                <View style={{ borderRadius: 10, borderWidth: StyleSheet.hairlineWidth, borderColor: themeColors.gray, flexDirection: "column", padding: 10, marginTop: 10 }}>
                    <View style={{ flexDirection: "row", marginTop: 0, paddingTop: 0, paddingHorizontal: 5 }}>
                        <View style={{ width: '90%', }}>
                            <TextField
                                baseColor={themeColors.secondary}
                                tintColor={themeColors.secondary}
                                textColor={themeColors.primary}
                                label='Enter his/her Phone Number'
                                labelTextStyle={{ fontSize: 19 }}
                                keyboardType={'number-pad'}
                                maxLength={12}
                                onChangeText={(e) => {
                                    dispatch(setBookingParam({ key: "OthersPhoneNo", value: e }));
                                }}
                            />
                        </View>
                        <TouchableOpacity onPress={() => { getContact() }} style={{ width: '10%', justifyContent: "center", alignItems: "center" }}>
                            <PIcon style={{ color: themeColors.primary, opacity: 0.9 }} type={PIcons.FontAwesome} name="address-book" size={20}></PIcon>
                        </TouchableOpacity>
                    </View>
                    <View style={{ marginTop: 0, paddingTop: 0, paddingHorizontal: 5 }}>
                        <TextField
                            baseColor={themeColors.secondary}
                            tintColor={themeColors.secondary}
                            textColor={themeColors.primary}
                            label='Enter his/her Name'
                            labelTextStyle={{ fontSize: 19 }}
                            keyboardType={'default'}
                            containerStyle={{}}
                            maxLength={12}
                            onChangeText={(e) => {
                                dispatch(setBookingParam({ key: "OthersName", value: e }));
                            }}
                        />
                    </View>
                </View>
            }
        </>
    )
}

const SingleWomen = () => {
    const dispatch = useDispatch();
    const [isSingleWomen, setSingleWomen] = useState(false);

    return (
        <>
            <View style={{ width: '100%' }}>
                <CheckBox
                    style={{ paddingTop: 10 }}
                    containerStyle={{ height: 2 }}
                    onClick={() => {
                        setSingleWomen(cur => cur = !cur)
                        dispatch(setBookingParam({ key: "isSingleWomen", value: isSingleWomen }));
                    }}
                    isChecked={isSingleWomen}
                    rightText={"Single Women"}
                    rightTextStyle={{ color: themeColors.primary }}
                />
                <View style={{ paddingLeft: 30 }}>
                    <Text style={{ fontSize: 9, fontFamily: fonts.RubikLight }}> Additional safety action will be taken</Text>
                </View>
            </View>
        </>
    )
}


export default function StepOne({ navigation }) {
    let toastRef;
    const dispatch = useDispatch();
    const modalRef = useRef();

    const pickupAddress = useSelector((state) => state.booking.pickupAddress);
    const dropAddress = useSelector((state) => state.booking.dropAddress);
    const loading = useSelector((state) => state.booking.loading);
    const tollRouteResponse = useSelector((state) => state.booking.tollRouteResponse);

    useEffect(() => {
        modalRef.current.handleModal(loading);
        /**
         * @todo Get TOLL ROUTE API response and redirec to next confirmation page  
         */
        if (tollRouteResponse) {
            dispatch(setBookingParam({ key: "tollRouteResponse", value: false }));
            setTimeout(() => {
                navigation.navigate('booking', { screen: 'StepTwo' });
            }, 500)
        }

    }, [loading, tollRouteResponse])

    const validateField = (param) => {
        return param == null || param == undefined || param == '' ? false : true;
    }

    const stageOneSubmit = async () => {

        if (!validateField(pickupAddress) || !validateField(dropAddress)) {
            toastRef.show('Please enter valid details to proceed');
            return
        }

        await dispatch(loader({ status: true }));
        dispatch({ type: types.TOLL_ROUTE_DATA });
    }

    const backPressed = () => navigation.goBack();

    return (
        <ScrollView keyboardShouldPersistTaps="always">
            <StatusBar backgroundColor={themeColors.white} barStyle="dark-content" />

            <PHeadings title="On Boarding" backBtnPressed={backPressed}></PHeadings>

            <View style={styles.container}>

                <PickUpAddressfn />

                <DropAddress />

                <PickupDateAndTime />

                <TripType />

                <VehicleType />

                <Comments />

                <SingleWomen />

                <IsBookingForOthers />

                <View style={{
                    flex: 1,
                    width: '100%',
                    marginTop: 50,
                    marginBottom: 50
                }}>
                    <PBtn
                        config={{
                            label: 'Proceed',
                            icon: {
                                isRequired: false
                            }
                        }}
                        onPress={stageOneSubmit} />
                </View>

            </View>
            <Toast ref={(toast) => toastRef = toast} position={'bottom'} />

            <ModalLoader ref={modalRef} msg={'Gathering Information. Please wait...'} />
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        width: DEVICE_WIDTH,
        paddingLeft: DEVICE_WIDTH * 0.05,
        paddingRight: DEVICE_WIDTH * 0.05,
        alignItems: 'flex-start',
        flex: 1
    },
    vehicleConatiner: {
        justifyContent: "flex-end",
        paddingBottom: 8,
        alignItems: "center",
        height: 70,
        margin: 5,
        borderRadius: 10,
        width: DEVICE_WIDTH * 0.15
    },
    vehicleTypeActive: {
        borderColor: themeColors.yellow,
        borderWidth: 2
    },
    vehicleTypeInactive: {
        borderColor: themeColors.primary,
        borderWidth: StyleSheet.hairlineWidth
    },
    commentsTxt: {
        width: 200,
        borderBottomColor: 'red',
        borderBottomWidth: 1,
    },
})