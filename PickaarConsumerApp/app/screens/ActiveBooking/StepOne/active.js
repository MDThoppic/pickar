import { View, Text, StyleSheet, StatusBar } from "react-native";
import { useSelector } from 'react-redux';
import AcitveBookings from './components/activeBookings';
import { themeColors } from '../../../utils/constant';
import { DEVICE_WIDTH } from '../../../utils/dimentions';
import { fonts } from '../../../utils/theme';
import ActiveContent from './components/activeContent';
import LottieView from 'lottie-react-native';

export default function AcitveScreen({ navigation }) {

    const spinner = useSelector((state) => state.quotes.quoteItemLoader)

    return (
        <>
            <View style={[styles.container]}>
                <StatusBar backgroundColor={themeColors.yellow} barStyle="dark-content" />

                <View style={styles.activeContainer}>

                    <View style={{ backgroundColor: themeColors.yellow, marginBottom: 15, marginTop: 10 }}>
                        <Text style={{ fontSize: 18, fontFamily: fonts.RubikRegular }}>Hunt a Ride</Text>
                    </View>

                    <View >
                        <AcitveBookings navigation={navigation} />
                    </View>
                </View>
            </View>

            <>
                {
                    spinner == true &&
                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                        <View>
                            <LottieView
                                style={{ height: 200 }}
                                source={require('../../../../assets/lottie/activeLoader.json')}
                                autoPlay={true}
                            />
                            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                                <Text style={{ fontFamily: fonts.RubikLight }}> Fetching Detail. Please wait..  </Text>
                            </View>
                        </View>
                    </View>
                }
                {
                    spinner == false &&
                    <ActiveContent />
                }
            </>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 250,
        width: DEVICE_WIDTH,
        transform: [{ scaleX: 2 }],
        borderBottomStartRadius: 200,
        borderBottomEndRadius: 200,
        overflow: 'hidden',
    },
    card: {
        width: DEVICE_WIDTH * 0.8,
        alignContent: 'center',
        justifyContent: 'center',
        height: 150,
        borderWidth: 1,
        borderColor: themeColors.primary
    },
    activeContainer: {
        flex: 1,
        transform: [{ scaleX: 0.5 }],
        backgroundColor: themeColors.yellow,
        alignItems: 'center'
    }
})