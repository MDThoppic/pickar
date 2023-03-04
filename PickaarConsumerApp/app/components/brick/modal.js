import { View, Text, Image, StyleSheet, StatusBar, TouchableWithoutFeedback, TouchableOpacity, ScrollView, FlatList, Pressable } from "react-native";
import { DEVICE_HEIGHT, DEVICE_WIDTH } from "../../utils/dimentions";
import { fonts, pStyles } from "../../utils/theme";
import Modal from "react-native-modal";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { setModalParam } from "../../store/reducers/modalReducer";

import { themeColors } from "../../utils/constant";
import PIcon, { PIcons } from "./Icon";
import { setParam } from "../../store/reducers/userReducer";
import { useNavigation } from "@react-navigation/native";

import moment, { duration } from "moment";
import CheckBox from "@react-native-community/checkbox";
import { Toggle } from "react-native-toggle-input";
import { flat } from "react-native-flags/flags";
import { MultipleSelectList } from "react-native-dropdown-select-list";
import RadioGroup from 'react-native-radio-buttons-group';
import RadioButtonRN from "radio-buttons-react-native";
import { Icon } from "react-native-gradient-icon";
import Slider from "@react-native-community/slider";


const InforModalContent = ({ closeModal, msg, }) => {

    return (
        <TouchableWithoutFeedback>
            <View style={styles.modal}>
                <View style={[styles.modalView, {}]}>

                    <View style={{ padding: 15, }}>
                        <Text>{msg}</Text>
                    </View>

                    <TouchableOpacity activeOpacity={0.9} onPress={closeModal} style={{ backgroundColor: pStyles.white, width: '100%', alignItems: 'center', justifyContent: 'flex-end', height: 50 }}>
                        <View style={{ height: 40, width: '90%', backgroundColor: pStyles.primary, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', borderRadius: 5 }}>
                            <Text style={{ fontFamily: pStyles.fontStyleM, letterSpacing: 1.1, fontSize: 18, color: pStyles.white }}>OK</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}

const CarModalContent = ({ closeModal, modalContent, item },) => {

    // console.log("address",item.isSingleWomen)
    // console.log(moment(item.pickUpDate).utc().format('DD/MM/yy'))

    const navigation = useNavigation();
    const openNewroute = () => {
        console.log("welcomes", item);
        navigation.navigate('active', { screen: 'quotesBooking' });
    }

    /***
     * @todo Need to work on ModalContent to show vehicle detail
     */
    return (
        <TouchableWithoutFeedback>
            <View style={styles.modal1}>
                <View style={[styles.modalView1, {}]}>
                    <View style={{ height: 50, width: '90%', marginTop: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', borderBottomWidth: 0.3 }}>
                        {/* <Image source={require('../../../assets/cars/ritz.jpeg')} style={{ height: 100, width: 150 }}></Image> */}
                        <Text style={{ fontFamily: pStyles.fontStyleB, fontSize: 20 }}>Booking Details</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '90%', paddingTop: 10, paddingBottom: 10, marginTop: 20 }}>
                        <View style={{}}>
                            <Text style={{
                                fontSize: 13,
                                fontFamily: pStyles.fontStyleR,
                                paddingEnd: 20,
                            }}>PickUpAddress</Text>
                        </View>
                        <View style={{}}>
                            <Text style={{
                                fontSize: 13,
                                fontFamily: pStyles.fontStyleM,
                                color: pStyles.darkGray
                            }}>{item.pickupAddress.address}</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '90%', paddingTop: 10, paddingBottom: 10, }}>
                        <View style={{}}>
                            <Text style={{
                                fontSize: 13,
                                fontFamily: pStyles.fontStyleR,
                                paddingEnd: 20,
                            }}>DropAddress</Text>
                        </View>
                        <View style={{}}>
                            <Text style={{
                                fontSize: 14,
                                fontFamily: pStyles.fontStyleM,
                                color: pStyles.darkGray
                            }}>{item.dropAddress.address}</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '90%', paddingTop: 10, paddingBottom: 10, }}>
                        <View style={{}}>
                            <Text style={{
                                fontSize: 13,
                                fontFamily: pStyles.fontStyleR
                            }}>Date and time</Text>
                        </View>
                        <View style={{}}>
                            <Text style={{
                                fontSize: 14,
                                fontFamily: pStyles.fontStyleM,
                                color: pStyles.darkGray
                            }}>{moment(item.pickUpDate).utc().format('DD/MM/yy')}</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '90%', paddingTop: 10, paddingBottom: 10, }}>
                        <View style={{}}>
                            <Text style={{
                                fontSize: 13,
                                fontFamily: pStyles.fontStyleR
                            }}>TripType</Text>
                        </View>
                        <View style={{}}>
                            <Text style={{
                                fontSize: 14,
                                fontFamily: pStyles.fontStyleM,
                                color: pStyles.darkGray
                            }}>{item.tripType ? 'oneway' : 'Return'}</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '90%', paddingTop: 10, paddingBottom: 10, }}>
                        <View style={{}}>
                            <Text style={{
                                fontSize: 13,
                                fontFamily: pStyles.fontStyleR
                            }}>Women Safty</Text>
                        </View>
                        <View style={{}}>
                            <Text style={{
                                fontSize: 14,
                                fontFamily: pStyles.fontStyleM,
                                color: pStyles.darkGray
                            }}>{item.isSingleWomen ? 'Yes' : 'No'}</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '90%', paddingTop: 10, paddingBottom: 10, }}>
                        <View style={{}}>
                            <Text style={{
                                fontSize: 13,
                                fontFamily: pStyles.fontStyleR
                            }}>Setters</Text>
                        </View>
                        <View style={{}}>
                            <Text style={{
                                fontSize: 14,
                                fontFamily: pStyles.fontStyleM,
                                color: pStyles.darkGray
                            }}>{item.seaters} (Passangers) + 1 (Driver)</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '90%', paddingTop: 10, paddingBottom: 10, }}>
                        <View style={{}}>
                            <Text style={{
                                fontSize: 13,
                                fontFamily: pStyles.fontStyleR
                            }}>Distance</Text>
                        </View>
                        <View style={{}}>
                            <Text style={{
                                fontSize: 14,
                                fontFamily: pStyles.fontStyleM,
                                color: pStyles.darkGray
                            }}>{item.distance}/Km</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '90%', paddingTop: 10, paddingBottom: 10, }}>
                        <View style={{}}>
                            <Text style={{
                                fontSize: 13,
                                fontFamily: pStyles.fontStyleR
                            }}>Tolls</Text>
                        </View>
                        <View style={{}}>
                            <Text style={{
                                fontSize: 14,
                                fontFamily: pStyles.fontStyleM,
                                color: pStyles.darkGray
                            }}>{item.isTollAvailable ? 'Yes' : 'No'}</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '90%', paddingTop: 10, paddingBottom: 10, }}>
                        <View style={{}}>
                            <Text style={{
                                fontSize: 13,
                                fontFamily: pStyles.fontStyleR
                            }}>pickaarCommission</Text>
                        </View>
                        <View style={{}}>
                            <Text style={{
                                fontSize: 14,
                                fontFamily: pStyles.fontStyleM,
                                color: pStyles.darkGray
                            }}>RS.{item.pickaarCommission}</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '90%', paddingTop: 10, paddingBottom: 10, }}>
                        <View style={{}}>
                            <Text style={{
                                fontSize: 13,
                                fontFamily: pStyles.fontStyleR
                            }}>Vehicle Type</Text>
                        </View>
                        <View style={{}}>
                            <Text style={{
                                fontSize: 14,
                                fontFamily: pStyles.fontStyleM,
                                color: pStyles.darkGray
                            }}>{item.vehicleType}</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '90%', paddingTop: 10, paddingBottom: 10, }}>
                        <View style={{}}>
                            <Text style={{
                                fontSize: 13,
                                fontFamily: pStyles.fontStyleR
                            }}>For Other</Text>
                        </View>
                        <View style={{}}>
                            <Text style={{
                                fontSize: 14,
                                fontFamily: pStyles.fontStyleM,
                                color: pStyles.darkGray
                            }}>{item.isBookingForOthers ? "Yes" : 'No'}</Text>
                        </View>
                    </View>
                    <View style={{ marginBottom: 10, marginTop: 50, marginLeft: 40, backgroundColor: pStyles.white, width: '100%', alignItems: 'center', justifyContent: 'space-around', height: 50, flexDirection: 'row' }}>
                        <TouchableOpacity activeOpacity={0.9} onPress={closeModal} >
                            <View style={{ height: 40, width: '80%', backgroundColor: pStyles.gray, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', borderRadius: 5, }}>
                                <Text style={{ fontFamily: pStyles.fontStyleM, letterSpacing: 1.1, fontSize: 18, color: pStyles.primary }}>Close</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.9} onPress={() => { openNewroute() }} >
                            <View style={{ height: 40, width: '80%', backgroundColor: pStyles.primary, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', borderRadius: 5, }}>
                                <Text style={{ fontFamily: pStyles.fontStyleM, letterSpacing: 1.1, fontSize: 18, color: pStyles.white }}>Proceed</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>

            </View>
        </TouchableWithoutFeedback>
    )
}

const gotoGetAddressPage = () => { console.log("GOTO MAP ADDRESS PAGE") }


const Item = ({ item }) => {
    const dispatch = useDispatch();
    let locations = useSelector((state) => state.user.locations);

    const selectThisAddress = (addressId) => {
        //Reset Primary address
        const index = locations.findIndex((item) => item.isPrimary === true)
        const index2 = locations.findIndex((item) => item._id == addressId)
        const newLoc = locations.map((value, key) => {
            if (key == index)
                return { ...value, isPrimary: false }

            if (key == index2)
                return { ...value, isPrimary: true }

            return value;
        })

        dispatch(setParam({ key: "locations", value: newLoc }))
        dispatch(setModalParam({ key: "visibleConfig", value: false }))
    }

    return (
        <TouchableWithoutFeedback onPress={() => selectThisAddress(item._id)} key={item._id}>
            <View style={[styles.addressItem, { backgroundColor: item.isPrimary ? themeColors.lightGray2 : themeColors.white }]}>
                <View style={{ flex: 1, flexDirection: 'row' }}>
                    <PIcon type={PIcons.Feather} style={{ color: item.isPrimary ? themeColors.yellow : themeColors.primary }} name="map-pin" />
                    <Text style={[styles.addressTxtName, { color: item.isPrimary ? themeColors.primary : themeColors.secondary }]}>{item.name}</Text>
                </View>
                <View style={{ flex: 2, flexDirection: 'row' }}>
                    <View style={{ flex: 2 }}>
                        <Text style={[styles.addressTxtValue, { opacity: item.isPrimary ? 0.6 : 1 }]}  > {((item.address).length > 45) ?
                            (((item.address).substring(0, 45 - 3)) + '...') :
                            item.address}</Text>
                    </View>
                    <TouchableOpacity onPress={gotoGetAddressPage} style={{ flex: 0.2, backgroundColor: themeColors.yellow, alignContent: "flex-end", paddingVertical: 1, paddingHorizontal: 5 }}>
                        <Text style={{ color: themeColors.primary, fontFamily: 'auto', fontWeight: "bold", letterSpacing: 0 }}>Edit</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}

const AddressPickerContent = ({ closeModal }) => {
    const locations = useSelector((state) => state.user.locations);
    const renderItem = ({ item }) => (
        <Item item={item} />
    );

    return (
        <View style={styles.modal3}>
            <View style={[styles.modalView3, {}]}>

                <View style={styles.addressContainer} >
                    <FlatList
                        horizontal={false}
                        data={locations}
                        scrollEnabled={true}
                        renderItem={renderItem}
                        keyExtractor={item => item._id}
                    />
                </View>

                <TouchableOpacity activeOpacity={0.9} onPress={closeModal} style={{ backgroundColor: pStyles.white, width: '100%', alignItems: 'center', justifyContent: 'flex-end', height: 50 }}>
                    <View style={{ height: 40, width: '100%', backgroundColor: pStyles.primary, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={{ fontFamily: pStyles.fontStyleM, letterSpacing: 1.1, fontSize: 18, color: pStyles.white }}>Add New</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}
const RadioButtons = (data) => {
    console.log("112345678", data)
    return (
        <View>
            {
                data.map((item) => {
                    return (
                        <Pressable>
                            <Text>{item.value}</Text>
                        </Pressable>
                    )
                })
            }
        </View>
    )
}
const radioButtonsData = [{
    id: '1', // acts as primary key, should be unique and non-empty string
    label: 'Option 1',
    value: 'option1'
}, {
    id: '2',
    label: 'Option 2',
    value: 'option2'
}]

const FilterModal = ({ msg, closeModal }) => {

    const [All, setAll] = useState(true);
    const [vehicleType, setVehicleType] = useState(false);
    const [distance, setDistance] = useState(false);
    const [duration, setDuration] = useState(false);
    const [tripType, setTripType] = useState(false);

    //selection the VehicleType
    const [selectVehicle, setSelectVehicle] = useState('');
    const data = [
        { key: '1', value: 'HATCHBACK' },
        { key: '2', value: 'SEDAN' },
        { key: '3', value: 'SUV' },
        { key: '4', value: 'MUV' },
        { key: '5', value: 'AUTO' },
    ]
    console.log("selectVehicle", selectVehicle);
    //distance using silder
    const [selectdistance, setSelectDistance] = useState('100')
    console.log("selectdistance", selectdistance);

    //this using Trip type
    const [selectTrip, setSelectTrip] = useState('')
    const trip = [
        { key: '1', label: 'OneWay' },
        { key: '1', label: 'return' }
    ]
    console.log("selecttrip", selectTrip)

    // if(vehicleType==true ||distance==true||duration==true||tripType==true){
    //     setAll=false
    // }

    return (
        <TouchableWithoutFeedback>
            <View style={styles.filtermodal}>
                <View style={[styles.filtermodalView, {}]}>
                    {/* <ScrollView style={{width:'100%'}}> */}
                    <View style={{ padding: 10, width: '100%' }}>
                        <View style={{ borderBottomWidth: 0.5, }}>
                            <Text style={{ fontSize: 18, flexDirection: 'column', justifyContent: 'center' }}>Filter</Text>
                        </View>
                        <View style={{ flexDirection: 'row', paddingTop: 10 }}>
                            <CheckBox
                                value={vehicleType == true || distance == true || duration == true || tripType == true ? false : true}
                                onValueChange={setAll}

                            /><Text style={{ fontSize: 16 }}>All</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <CheckBox
                                value={vehicleType}
                                onValueChange={setVehicleType}

                            /><Text style={{ fontSize: 16 }}>vehicleType</Text>
                        </View>
                        {
                            vehicleType == true ?

                                <View style={{ flexDirection: 'column', paddingStart: 20 }}>
                                    <MultipleSelectList
                                        setSelected={(val) => setSelectVehicle(val)}
                                        data={data}
                                        save="value"
                                        // onSelect={() => console.log(select)}
                                        // label="Your service District  (Pickup Your costomer)"
                                        notFoundText="No Data Exists"
                                    />
                                </View>
                                : null
                        }
                        <View style={{ flexDirection: 'row' }}>
                            <CheckBox
                                value={distance}
                                onValueChange={setDistance}

                            /><Text style={{ fontSize: 16 }}>distance</Text>
                        </View>
                        {
                            distance == true ?
                                <>
                                <Text>{selectdistance}</Text>
                                    <Slider
                                        style={{ width: 200, height: 40 }}
                                        minimumValue={0}
                                        maximumValue={1}
                                        minimumTrackTintColor="tomoto"
                                        maximumTrackTintColor="#000"
                                        value={.5}
                                        onValueChange={value =>setSelectDistance(parseInt(value*1000)+'/km')}
                                    />
                                </>
                                : null

                        }
                        <View style={{ flexDirection: 'row' }}>
                            <CheckBox
                                value={duration}
                                onValueChange={setDuration}

                            /><Text style={{ fontSize: 16 }}>duration</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <CheckBox
                                value={tripType}
                                onValueChange={setTripType}
                            /><Text style={{ fontSize: 16 }}>TripType</Text>
                        </View>

                        {
                            tripType == true ?
                                <>
                                    <RadioButtonRN
                                        data={trip}
                                        selectedBtn={(e) => setSelectTrip(e)}
                                        icon={
                                            <Icon
                                                name="check-circle"
                                                size={10}
                                                color="#2c9dd1"

                                            />
                                        }
                                    />

                                </>
                                : null
                        }
                        {/* <View style={{ flexDirection: 'row' }}>
                            <CheckBox
                                value={All}
                                onValueChange={setAll}

                            /><Text style={{ fontSize: 16 }}>All</Text>
                        </View> */}

                    </View>
                    {/* </ScrollView> */}


                    <TouchableOpacity activeOpacity={0.9} onPress={closeModal} style={{ backgroundColor: pStyles.white, width: '100%', alignItems: 'center', justifyContent: 'flex-end', height: 80 }}>
                        <View style={{ height: 30, width: '90%', backgroundColor: pStyles.primary, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', borderRadius: 5 }}>
                            <Text style={{ fontFamily: pStyles.fontStyleM, letterSpacing: 1.1, fontSize: 16, color: pStyles.white }}>Apply</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}

export const ModalComponent = (prop) => {
    const dispatch = useDispatch();

    const isVisible = useSelector((state) => state.modal.visibleConfig)
    const isTransparent = useSelector((state) => state.modal.transparentConfig)
    const animationType = useSelector((state) => state.modal.animationTypeConfig)
    const swipeDirection = useSelector((state) => state.modal.swipeDirectionConfig)
    const modalName = useSelector((state) => state.modal.modalName)
    const msg = useSelector((state) => state.modal.message)
    const modalContent = useSelector((state) => state.modal.modalContent)
    const [showModal, setInfoModalVisible] = useState(isVisible);
    //vendorcard -->foooterList under more to parse the data in modal redex to store and get the value 
    const params = useSelector((state) => state.modal.params);
    // console.log("modal page",params);


    useEffect(() => {
        setInfoModalVisible(isVisible);
    }, [isVisible])

    const closeModal = () => {
        setInfoModalVisible(false);
        dispatch(setModalParam({ key: "visibleConfig", value: false }))
    }

    return (

        <Modal
            // propagateSwipe={true}
            animationType={animationType}
            visible={showModal}
            // hasBackdrop={true}
            transparent={isTransparent}
            backdropOpacity={showModal ? 0.7 : 1}
            // statusBarTranslucent={true}
            swipeDirection={swipeDirection}

            // statusBarTranslucent={infoModalVisible}
            onRequestClose={closeModal}
            style={{ flex: 1, margin: 0, height: DEVICE_HEIGHT }}
        >
            {modalName == 'INFO' && <InforModalContent closeModal={closeModal} msg={msg} />}

            {modalName == 'CAR_DETAIL_MODAL' && <CarModalContent closeModal={closeModal} modalContent={modalContent} prop={prop} item={params.item} />}

            {modalName == 'ADDRESS_PICKER' && <AddressPickerContent closeModal={closeModal} />}
            {modalName == 'FilterModal' && <FilterModal closeModal={closeModal} msg={msg} />}
        </Modal>
    )
}


const styles = StyleSheet.create({
    modal: {
        flex: 1,
        width: DEVICE_WIDTH,
        height: DEVICE_HEIGHT,
        alignItems: 'center',
        justifyContent: 'center',
    },
    modalView: {
        borderRadius: 20,
        height: 200,
        width: DEVICE_WIDTH * 0.9,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        backgroundColor: pStyles.white,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 6

    },
    modal1: {
        flex: 1,
        width: DEVICE_WIDTH,
        height: DEVICE_HEIGHT,
        alignItems: 'center',
        justifyContent: 'flex-end',
        // position: 'absolute',
        // zIndex: 9999
    },
    modalView1: {
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        bottom: 0,
        width: DEVICE_WIDTH,
        alignItems: 'center',
        backgroundColor: pStyles.white,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 6

    },
    modal3: {
        flex: 1,
        width: DEVICE_WIDTH,
        height: DEVICE_HEIGHT,
        alignItems: 'center',
        justifyContent: 'center',
    },
    modalView3: {
        flex: 0.3,
        borderRadius: 5,
        width: DEVICE_WIDTH * 0.9,
        justifyContent: 'flex-end',
        backgroundColor: pStyles.white,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 6
    },
    addressContainer: {
        flex: 1,
        margin: 0,
        padding: 0

    },
    addressItem: {
        paddingVertical: 10,
        paddingHorizontal: 7,
        flex: 1,
        flexDirection: "column",
        // marginVertical: 8,
        // marginHorizontal: 16,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: themeColors.darkGray
    },
    addresstitle: {
        fontSize: 32,
        color: '#fff'
    },
    addressTxtName: {
        paddingHorizontal: 5,
        fontFamily: fonts.RubikExtraBold,
        fontSize: 16,

    }, addressTxtValue: {
        fontSize: 12
    }, item: {
        height: 150,
        overflow: 'hidden',
        width: DEVICE_WIDTH * 0.9,
        backgroundColor: themeColors.white,
        borderLeftWidth: 10,
        borderRadius: 10,
        marginTop: 20,
        alignSelf: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 6,
    },
    filtermodal: {
        flex: 1,
        width: DEVICE_WIDTH,
        height: DEVICE_HEIGHT,
        alignItems: 'flex-end',
        justifyContent: 'flex-start',
        paddingTop: 100
    },
    filtermodalView: {
        borderRadius: 20,
        height: 'auto',
        width: DEVICE_WIDTH * 0.6,
        justifyContent: 'space-evenly',
        alignItems: 'flex-start',
        paddingStart: 20,
        backgroundColor: pStyles.white,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 6

    }
})
