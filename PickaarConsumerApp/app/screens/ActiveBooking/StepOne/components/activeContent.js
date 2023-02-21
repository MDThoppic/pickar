import { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import PIcon, { PIcons } from '../../../../components/brick/Icon';
import RecommendedTrips from './recommendedTrips';
import { DEVICE_WIDTH } from '../../../../utils/dimentions';
import { pStyles } from '../../../../utils/theme';
import { navigateTo } from '../../../../store/reducers/quotesSlice';
import { BlockTitle } from '../../../../components/brick/text';
import { select } from 'redux-saga/effects';

const BadgedContainer = ({ Economic, premium }) => {

    const badgeds = [                                                                                                              
        { label: 'Premium Ride', text: 'Badged Profiles by Pickaar', textTwo: `${premium[0]?.vendorName} is ready to take you at`, price: premium[0]?.quotedAmtByKM },
        { label: 'Economic Ride', text: 'Lowest price of Bitting', textTwo: `${Economic[0]?.vendorName} is ready to take you at`, price: Economic[0]?.quotedAmtByKM },
    ]

    return (
        <View style={styles.BadgedContainer}>
            {
                badgeds.map((item, index) => {
                    return (
                        <View key={index} style={styles.boxContainer} >
                            <View style={{ flexDirection: 'column', flex: 1.5 }}>
                                <Text style={pStyles.txtMediumWhite}> {item.label} </Text>
                                <Text style={[pStyles.txtSmLightWhite, { marginTop: 3 }]}> {item.text} </Text>
                            </View>
                            <View style={{ height: StyleSheet.hairlineWidth, backgroundColor: pStyles.yellow }} />

                            <View style={{ paddingTop: 10, width: '100%' }}>
                                <Text style={pStyles.txtMediumLightWhite}>{item.textTwo} </Text>
                            </View>
                            {
                                console.log(`${premium[0]}`)
                            }

                            <View style={{ flex: 2, flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'center' }}>
                                <Text style={{ color: pStyles.white, fontSize: pStyles.fontSizeL - 1, fontFamily: pStyles.fontStyleBI }}>{item.price} </Text>
                                <Text style={{ color: pStyles.yellow, fontSize: pStyles.fontSizeL + 1, fontFamily: pStyles.fontStyleBI }}>/</Text>
                                <Text style={{ color: pStyles.white, fontSize: pStyles.fontSizeL - 1, fontFamily: pStyles.fontStyleBI }}> Km</Text>
                            </View>
                        </View>
                    )
                })
            }
        </View>
    )
}

const GotoBookingsListBlock = ({ count }) => {

    const navigation = useNavigation();

    const gotoBookingList = () => {
        navigation.navigate('active', { screen: 'BookingList', otherParam: 'anything you want here', })
        // navigation.navigate('active', { screen: 'OrderDetail' })
    }

    return (
        <TouchableOpacity activeOpacity={.9} onPress={gotoBookingList}>
            <View style={[styles.highlights, { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', borderRadius: 10 }]}>
                <View style={{ flexDirection: 'column' }}>
                    <Text style={pStyles.txtMediumWhite}>Show All Bedding</Text>
                    <Text style={[pStyles.txtSmLightWhite, { marginTop: 3 }]}>List of bettings</Text>
                </View>

                <View style={{ flexDirection: 'row', width: '40%', alignItems: 'center', justifyContent: 'space-around' }}>
                    <Text style={{ fontSize: pStyles.fontSizeM, fontFamily: pStyles.fontStyleMI, color: pStyles.white }}>
                        <Text style={styles.bracketsStyles}>( </Text>
                        {count}
                        <Text style={styles.bracketsStyles}> )</Text>
                    </Text>
                    <PIcon type={PIcons.FontAwesome5} size={24} name={'angle-right'} color={pStyles.yellow} />
                </View>

            </View>
            <Text style={{ alignSelf: 'flex-start', fontSize: pStyles.fontSizeM, paddingTop: 2, fontFamily: pStyles.fontStyleLI, marginBottom: 10, paddingLeft: 5 }}></Text>
        </TouchableOpacity>
    )
}
const ActiveContentt = () => {
    const quotesList = useSelector((state) => state.quotes.quotesList);
    console.log(`QUEO LIST ${JSON.stringify(quotesList)}`)
    return (
        <></>
    )
}
const ActiveContent = ({ navigation }) => {
    // console.log(quoteobj)
    const quotesList = useSelector((state) => state.quotes.quotesList);
    const quotesCount = quotesList?.length || 0;
    // const quotesCount=useSelector((state)=> state.quotes.quotesList.length);
    const recommendedQuotes = quotesList?.filter(quotes => quotes.bookingPrivilege === 'Recommended') || [];
    const premium = quotesList?.filter(quoteObj => quoteObj.bookingPrivilege == 'Premium') || [];
    const Economic = quotesList?.filter(quoteObj => quoteObj.bookingPrivilege == 'Economy') || [];
    // console.log(quotesList.length);
    // console.log("active page",quotesCount);
    // console.log("activeconuntent",navigation);
    
    

    console.log("quotecount",quotesList.length)

    return (
        <ScrollView stye={{ flex: 2 }} contentContainerStyle={{ flexGrow: 1 }}>
            <View style={{
                width: DEVICE_WIDTH,
                flex: 2,
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                {/* no quotes do display that */}
                {
                quotesCount == 0 &&
                <>
                    <View>
                        <Text>No quotes avaliable </Text>
                    </View>
                </>
             }

                <BlockTitle name={'Start Bedding'} />
                <GotoBookingsListBlock count={quotesCount} navigation={navigation} />
                 {/* <BadgedContainer Economic={Economic} premium={premium} />  */}

                {
                    quotesCount > 0 && premium.length > 0 && Economic.length > 0 &&
                    <BadgedContainer Economic={Economic} premium={premium} /> 
                   } 

                {
                    recommendedQuotes.length > 0 &&
                    <>
                        <View style={styles.thickBorder} />

                        <View style={{ flex: 1, height: 300 }}>

                            <BlockTitle name={'Recommended Trips'} />

                            <RecommendedTrips quotes={recommendedQuotes} />
                        </View>
                    </>
                }
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    boxContainer: {
        width: DEVICE_WIDTH * 0.43,
        backgroundColor: pStyles.primary,
        height: 150,
        padding: 10,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 7,
        },
        shadowOpacity: 0.43,
        shadowRadius: 9.51,
        elevation: 15,
        // flex: 1
    },
    bracketsStyles: {
        color: pStyles.yellow,
        fontSize: pStyles.fontSizeL
    },
    BadgedContainer: {
        width: DEVICE_WIDTH * 0.9,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        marginBottom: 20
    },
    highlights: {
        marginTop: 10,
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: pStyles.primary,
        height: 60,
        paddingLeft: 10,
        width: DEVICE_WIDTH * 0.9,
        backgroundColor: pStyles.primary,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 7,
        },
        shadowOpacity: 0.43,
        shadowRadius: 9.51,
        elevation: 15,
    },
    thickBorder: {
        width: DEVICE_WIDTH,
        height: 9,
        backgroundColor: pStyles.yellow,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    }
})

export default ActiveContent;