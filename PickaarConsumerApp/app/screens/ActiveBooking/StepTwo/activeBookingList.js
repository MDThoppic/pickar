import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, Image, StatusBar, TouchableOpacity, ScrollView } from "react-native";
import PIcon, { PIcons } from '../../../components/brick/Icon';
import { themeColors } from "../../../utils/constant";
import { DEVICE_HEIGHT, DEVICE_WIDTH } from "../../../utils/dimentions";
import { fonts } from '../../../utils/theme';
import * as Animatable from 'react-native-animatable';
import StarRating from 'react-native-star-rating-widget';
import { BlockTitle, TitleWithBackBtn } from '../../../components/brick/text';
import { useSelector } from 'react-redux';
import { RenderVendorCardJSX } from '../../../components/rooms/vendorCards/vendorCards';
import { SelectedBookingJSX } from '../../../components/rooms/customerCard/singleCustomerCard';


export default function ActiveBookingList(props) {

    const quotesList = useSelector((state) => state.quotes.quotesList);

    return (
        <View style={{ flex: 1 }}>

            <StatusBar backgroundColor={themeColors.yellow} barStyle="dark-content" />

            <TitleWithBackBtn name={'HUNTING'} />

            <ScrollView>
                <View style={styles.headerContainer}>
                    <View style={{ width: '80%', marginBottom: 20 }}>

                        <SelectedBookingJSX from={'DETAIL'} />

                    </View>
                </View>

                <View style={styles.contentContainer}>
                    <View style={{ backgroundColor: themeColors.yellow }}>
                        <View style={{ flex: 1, paddingVertical: 20, paddingHorizontal: 20, borderTopLeftRadius: 30, borderTopRightRadius: 30, backgroundColor: themeColors.white }}>
                            {console.log(quotesList?.length)}
                            <BlockTitle name={'Quotes'} />
                                {/* quotesList?.quotesList?.length > 0 && */}
                            {
                                quotesList?.length > 0 &&
                                quotesList.map((item, index) => <RenderVendorCardJSX key={index} item={item} />)
                                
                            }
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    headerContainer: {
        flex: 0.9,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
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
    itemRowTwo: {
        padding: 3,
        width: '33%'
    },
    itemRowTwoExtra: {
        borderRightWidth: StyleSheet.hairlineWidth,
        borderRightColor: themeColors.yellow
    }
})