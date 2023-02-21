import react from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { themeColors } from '../../utils/constant';
import { DEVICE_HEIGHT, DEVICE_WIDTH } from '../../utils/dimentions';
import { fonts } from '../../utils/theme';

export default function DirectBooking() {

    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row', alignSelf: 'flex-start', alignItems: 'baseline', justifyContent: 'flex-start' }}>
                {/* <Text style={{ fontFamily: fonts.RubikBlack, fontSize: 40, paddingRight: 1, color: themeColors.yellow }}>D</Text> */}
                <Text style={{ fontFamily: fonts.RubikBold, fontSize: 22, paddingBottom: 8, color: themeColors.primary }}>Direct Booking</Text>
            </View>
            <View style={[styles.block, { height: 200 }]}>
                <View style={{ height: '100%', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between' }}>

                    <View style={{ paddingVertical: 5 }}>
                        <Text style={{ fontFamily: fonts.RubikRegular, fontSize: 13 }}>  Don't have time to play with Bittings. Call us directly to do that job. </Text>
                    </View>

                    <View>
                        <TouchableOpacity activeOpacity={0.9} onPress={{}} style={{ alignItems: 'center', justifyContent: 'center', height: 50 }}>
                            <View style={{ height: 40, width: '90%', backgroundColor: themeColors.primary, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', borderRadius: 5, }}>

                                <Text style={{ fontFamily: fonts.RubikMedium, letterSpacing: 1.1, fontSize: 18, color: themeColors.white }}>CALL & BOOK NOW</Text>
                            </View>
                        </TouchableOpacity >
                    </View>
                </View>
            </View>
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        paddingVertical: 20,
        paddingHorizontal: 20,
        backgroundColor: themeColors.white
    },
    block: {
        backgroundColor: themeColors.white,
        padding: 20,
        borderRadius: 10,
        width: DEVICE_WIDTH * 0.9,
        height: DEVICE_HEIGHT,
        // flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
    }
})