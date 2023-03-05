
// import react, { useState, useRef } from 'react';
import { View, Text, StyleSheet, Image, StatusBar, TouchableOpacity, ScrollView, TouchableHighlight, TouchableWithoutFeedback } from "react-native";
import { themeColors } from '../../../utils/constant';
import { DEVICE_HEIGHT, DEVICE_WIDTH } from '../../../utils/dimentions';
import { vCardStyles } from '../vendorCards/vendorStyle';
import { fonts, pStyles } from '../../../utils/theme';
// import * as Animatable from 'react-native-animatable';
// import PIcon, { PIcons } from '../../brick/Icon';
// import StarRating from 'react-native-star-rating-widget';
import { useNavigation } from '@react-navigation/native';
import { Icon } from 'react-native-gradient-icon';
import { useDispatch } from 'react-redux';
// import { setConfig } from '../../../store/reducers/modalReducer';
// import { date } from 'date-and-time';
import moment from 'moment';
// import ModalInfo from '../Modal';


// const BargainableJSX = () => {
//     return (
//         <View style={vCardStyles.C1.bargainContainer}>
//             <Animatable.Text animation="pulse" easing="ease-out" iterationCount="infinite"
//                 style={vCardStyles.C1.bargainLabelTxt}>BARGAIN</Animatable.Text>
//         </View>
//     )
// }

// const TagWrapperJSX = ({ width, name }) => {
//     return (
//         <View style={[vCardStyles.common.tagContainer, { width: width }]}>
//             <Text style={vCardStyles.common.tagTxt}>{name}</Text>
//         </View>
//     )
// }

// const FirstColBlockJSX = ({ quotedAmt, save, isNegotiable }) => {

//     return (
//         <View style={{ flex: 1, height: 150 }}>
//             <View style={vCardStyles.C1.main}>
//                 <View style={vCardStyles.C1.container}>
//                     <View>
//                         <Text style={vCardStyles.C1.quotedAmtTxt}>{'\u20B9'} quotedAmt</Text>
//                         <View style={{ flexDirection: 'row', alignItems: 'baseline' }}>
//                             <Text style={vCardStyles.C1.savelabelTxt}>Save </Text>
//                             <Text style={vCardStyles.C1.saveValueTxt}>{save}%</Text>
//                         </View>
//                     </View>
//                     <View style={vCardStyles.C1.bargainMain}>
//                         {
//                             isNegotiable &&
//                             <BargainableJSX />
//                         }
//                     </View>
//                 </View>
//             </View>
//         </View>
//     )
// }

const ExpWrapperJSX = ({ item }) => {
   
    return (
        <>
            <View style={vCardStyles.C2.blockBContainer}>
                <Text style={vCardStyles.common.expLabel}>Date:-</Text>
                <Text style={vCardStyles.common.expValue}>{moment(item.pickUpDate).utc().format('DD/MM/yy')} </Text>
                <View style={vCardStyles.C2.blockBContainer}>
                    <Text style={vCardStyles.common.expLabel}>Trip Type:-</Text>
                    <Text style={vCardStyles.common.expValue}>{item.tripType == 1 ? 'oneway' : 'return'} </Text>
                </View>
            </View>
            {
                item.tripType == 2 ?
                    <View style={vCardStyles.C2.blockBContainer}>
                        <Text style={vCardStyles.common.expLabel}>Return Date:-</Text>
                        <Text style={vCardStyles.common.expValue}>{moment(item.returnDate).utc().format('DD/MM/yy')} </Text>
                    </View>
                    : null
            }
        </>
    )
}


const PickupWrapperJSX = ({ pickup }) => {
    return (
        <View style={vCardStyles.C2.blockAContainerSubBlockA}>
            <Icon name='map-pin' color='green' size={13} style={{ paddingEnd: 10 }} />
            <Text style={vCardStyles.common.nameLabelTxt}>{pickup} </Text>
        </View>
    )
}
const DropWrapperJSX = ({ drop }) => {
    return (
        <View style={vCardStyles.C2.blockAContainerSubBlockA}>
            <Icon name='map-pin' size={13} color='red' style={{ paddingEnd: 10 }} />
            <Text style={vCardStyles.common.nameLabelTxt}>{drop}</Text>
        </View>
    )
}



const TopContainerJSX = ({ item }) => {
    // console.log('font',JSON.stringify(item.dropAddress.address));
    return (
        <>
            <View style={vCardStyles.C2.blockAContainer}>
                <PickupWrapperJSX pickup={item.pickupAddress?.address} />
                <View>
                    <Text style={{ marginStart: 80, fontSize: 9 }}>----------------To--------------</Text>

                    <DropWrapperJSX drop={item.dropAddress?.address} />
                </View>
            </View>
            <View>
                <ExpWrapperJSX item={item} />
                
            </View>
        </>
    )
}

const FooterItems = ({ item, index }) => {
    const { value, label } = item;
    return (
        <View style={[vCardStyles.common.container,]}>
            <Text style={vCardStyles.common.labelTxt}>{label}</Text>
            <Text style={vCardStyles.common.valueTxt}>{value}</Text>
        </View>
    )
}




const FooterContainerJSX = (item) => {

   
    // console.log("_1id", JSON.stringify(item.item))


    const dispatch = useDispatch();
    const footerItems = [{
        label: 'Vehicle',
        value: item.item.vehicleType,
    }, {
        label: 'Seater',
        value: item.item.seaters,
    },
    {
        label: 'Duration',
        value: item.item.duration,
    },
    {
        label: 'distance',
        value: item.item.distance,
    }]
    
    

  

    return (
        <View style={vCardStyles.C2.blockBContainerBlock}>
            <View style={vCardStyles.C2.blockBContainerBlockB}>
                {
                    footerItems.map((item, index) => {
                        return <FooterItems key={index} item={item} index={index} />
                    })
                }               
            </View>
        </View>
    )
}

const SecondColBlockJSX = ({ item }) => {
    const navigation = useNavigation();
    

    return (
        <TouchableOpacity activeOpacity={0.7} style={vCardStyles.C2.main}>
            <View style={vCardStyles.C2.container}>

                <View style={vCardStyles.C2.blockA}>
                    <TopContainerJSX item={item} />
                </View>

                <View style={vCardStyles.C2.blockB}>
                    <FooterContainerJSX item={item} />
                </View>
            </View>
        </TouchableOpacity>
    )
}

export const SelectedBookingCardJSX = ({ item }) => {
    // console.log("SelectCard",item)
    return (

        <View style={[styles.item]} >
            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
                <SecondColBlockJSX item={item} />
            </View>
        </View>
    )

};

const styles = StyleSheet.create({
    headerContainer: {
        flex: 0.5,
        width: DEVICE_WIDTH,
        backgroundColor: themeColors.yellow,
    },
    contentContainer: {
        flex: 2.5,
        justifyContent: "center",
        alignItems: "center",
    },
    item: {
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

    }
})