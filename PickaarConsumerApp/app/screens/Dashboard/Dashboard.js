import { useEffect } from 'react';
import { View, StyleSheet, TouchableOpacity, StatusBar, Text, Alert } from "react-native";
import { localStorageKeys, themeColors } from '../../utils/constant';
import { fonts } from '../../utils/theme';
import { useDispatch, useSelector } from 'react-redux';
import { getData, storeData } from '../../utils/helpersFn';
import ActiveBook from '../ActiveBooking/StepOne/ActionBook';
import { Icon } from 'react-native-gradient-icon';

// import { value } from 'deprecated-react-native-prop-types/DeprecatedTextInputPropTypes';

// const BookNow = (props) => {

//     const gotoBookNow = () => {
//         props.navigation.navigate('booking', { screen: 'StepOne' })
//     }

//     return (
//         <View style={styles.titleBlock}>
//             <View style={{ width: '85%' }}>
//                 <View style={{ flexDirection: 'column', justifyContent: 'space-between' }}>
//                     <View>
//                         <Text style={[styles.mainTitle, { color: themeColors.primary }]}>Book confortable     </Text>
//                     </View>
//                     <View>
//                         <Text style={[styles.mainTitle, { color: themeColors.yellow }]}>rides in affordable price  </Text>
//                     </View>
//                 </View>
//             </View>
//             <View style={{ width: '15%', flexDirection: 'row', justifyContent: 'flex-end' }}>
//                 <TouchableOpacity onPress={gotoBookNow}>
//                     <PIcon type={PIcons.Feather} gradient={false} color={themeColors.primary} name="arrow-right" size={45}></PIcon>
//                 </TouchableOpacity>
//             </View>
//         </View>
//     )
// }

export default function Dashboard() {
    // const dispatch = useDispatch();

    const locations = 0;

    useEffect(() => {
        let serviceLoc;
        getData(localStorageKeys.serviceLoc).then(value => {
            serviceLoc = value;
            // if(serviceLoc.length)
            // console.log("serviceLoc", serviceLoc)
            console.log(serviceLoc)

        }).catch(e => {
            console.log(e)
        })
        console.log(serviceLoc)

    }, [])

    // const locationstaus = () => {
    //     if (locations <= 2) {
    //         Alert.alert(
    //             "Info",
    //             "We need you to create district list to available there service ", "steps:-  Setting--> your service location",
    //             [
    //                 {
    //                     text: "OK",
    //                     onPress: () => {
    //                         navigation.navigate('dashboard', { screen: 'Active' })
    //                     }
    //                 }
    //             ]

    //         )
    //     }
    // }




    return (
        <>


            <View style={styles.container}>
                <StatusBar backgroundColor={themeColors.white} barStyle="dark-content" />
                <View style={{ height: 40,elevation: 6,shadowColor: "#000", }}>
                    {/* Header component work */}
                </View>
                <View>
                    <Text style={{ fontSize: 25, fontFamily: fonts.RubikMedium }}>Dashboard</Text>
                </View>
                <View style={{
                    borderBottomWidth: 0, shadowOffset: 1, backgroundColor: 'white', height: 30, shadowColor: "#000",
                    // shadowOpacity: 0.27,
                    // shadowRadius: 4.65,
                    // elevation: 6,
                }} >
                   <View style={{flexDirection:'row-reverse',flex:1,paddingLeft:10}}>
                    <TouchableOpacity>
                        <Icon name='menu' color='black'/>
                    </TouchableOpacity>
                    <TouchableOpacity style={{paddingEnd:10}}>
                        <Icon name='filter' color='black'/>
                    </TouchableOpacity>
                   </View>
                </View>
                <View>
                    <ActiveBook />
                </View>


            </View>

        </>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
    titleBlock: {
        justifyContent: 'space-around',
        flexDirection: 'row',
        paddingVertical: 30
    },
    mainTitle: {
        fontSize: 23,
        fontFamily: fonts.RubikBold
    },
    activityIndicator: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: 80
    }
})