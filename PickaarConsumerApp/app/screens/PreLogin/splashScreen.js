import { CommonActions, useNavigation } from '@react-navigation/native';
import React, { useState, useEffect } from 'react';
import { View, StyleSheet, StatusBar, Text, Alert } from 'react-native';
import { localStorageKeys } from '../../utils/constant';
import { getData, storeData } from '../../utils/helpersFn';
import LottieView from 'lottie-react-native';
import CALL_SAGA from '../../store/sagas/types/types';
import { useDispatch, useSelector } from 'react-redux';
import Dashboard from '../Dashboard/Dashboard';
import { Toast } from '../../components/brick/toast';

export const SplashScreen = ({ navigation }) => {
    // let loaderText = ;
    const [loaderText, setloaderText] = useState('Fetching Info..');
    const dispatch = useDispatch();
    const isLoading = useSelector((state) => state.user.isLoading);
    const phoneNo = useSelector((state) => state.user.phoneNo)
    const profileStatus = useSelector((state) => state.user?.profileStatus)
    
    useEffect(() => {
        //This storeData using the sqlLite ,the data as profilestatus 
        console.log(">>>>>>>>>>",profileStatus)
        if (profileStatus == true) {
            console.log("profilestatus true");
            storefu();
            // storefu();
        }
        if(profileStatus != null){
            console.log("profilestatus falses");

            navigation.navigate('SignInScreen');

        }

        // setData(, profileStatus);
        // if(profileStatus == true) => Dashboard else sign

    }, [profileStatus]);

    const storefu = async () => {
        const res = await storeData(localStorageKeys.profileStatus, 'yes').then(value => {
            console.log(profileStatus);
         }).catch(e => { })
         navigation.navigate('dashboard');


    }

    // useEffect(() => {
    //     if (isLoading)
    //      navigation.navigate('Signpopup');

    // }, [isLoading])

    useEffect(() => {
        let phoneNumber;
        getData(localStorageKeys.uniquePhoneNo).then(value => {
            phoneNumber = value;
        })
        // if (!phoneNumber) { // New Commer
        //     navigation.navigate('SignInScreen');
        //     return
        // }

        // if (phoneNumber) { // Existing Customer

        getData(localStorageKeys.loginStatus).then(status => {

            console.log(phoneNumber, status);

            setloaderText('Hola! Found your detials..');
            if (status == 'Y' && phoneNumber) {
                console.log("INSIDE")
                dispatch({ // API to check whether customer is still active
                    type: CALL_SAGA.REQUEST_HANDSHAKE,
                    serviceId: 100,
                    serviceName: 'HandShake',
                    deviceID: '2354234-2345-2345-234',
                    phoneNo: phoneNumber
                })
            }
            else {
                setloaderText('Welcome to Pickaar. Login with your Phone number.' + phoneNumber);
                navigation.navigate('SignInScreen');
            }
        }).catch(e => {
            console.log("Async Store Error :" + e);
        })
        // }


    }, [])

    // useEffect(() => {
    //     console.log(`LOCATION RECEIVED: ${JSON.stringify(locations)}`)
    // }, [locations])

    return (
        <View style={styles.container}>

            <LottieView
                style={{ height: 200 }}
                source={require('../../../assets/lottie/splashScreenLoader.json')}
                autoPlay={true}
            >
            </LottieView>
            <Text style={styles.loaderTxt}>{loaderText}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    loaderTxt: {
        fontSize: 10
    }
})