import React, { useState, useEffect, useRef } from 'react';
import { View, StyleSheet, StatusBar, Text, Alert } from 'react-native';
import { localStorageKeys, themeColors } from '../../utils/constant';
import * as Animatable from 'react-native-animatable';
import PhoneNoBlock from './components/phoneNoBlock';
import { useDispatch, useSelector } from 'react-redux';
import CALL_SAGA from '../../store/sagas/types/types';

import { FirebaseRecaptchaVerifierModal } from 'expo-firebase-recaptcha';
import { firebaseConfig } from '../../../config';
import firebase from 'firebase/compat/app';
import { setParam } from '../../store/reducers/userReducer';
import { getData, storeData } from '../../utils/helpersFn';
import { setConfig } from '../../store/reducers/modalReducer';

const styles = StyleSheet.create({
    container: {
        backgroundColor: themeColors.light
    },
    header: {
        flex: 1.7,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: themeColors.light
    }
})

export default function SignInScreen(props) {
    const dispatch = useDispatch();
    const [isPhoneNoValidated, setIsPhoneNoValidated] = useState(false);
    let isPhoneNoValidateStatus = useSelector((state) => state.user.isPhoneNoValidateStatus)

    const phoneNumber = useSelector((state) => state.user.phoneNo);
    const name = useSelector((state) => state.user.name);
    const loginState = useSelector((state) => state.user.loginState);
    const profileStatus = useSelector((state) => state.user.profileStatus);

    let phoneNumber1;
    

    /**
     * @description Triggered once PhoneNumber entered
     */
    useEffect(() => {
        setIsPhoneNoValidated(isPhoneNoValidateStatus);
        if (isPhoneNoValidateStatus) {
            checkingData();
        }
    }, [isPhoneNoValidateStatus])

    useEffect(() => {
        if (loginState) {
            dispatch({
                type: CALL_SAGA.REQUEST_CREATE_NEW_ACCOUNT,
                serviceId: 101,
                deviceId: '987-23423-234-234-234',
                phoneNo: phoneNumber,
                name: name,
                serviceName: 'vendor'
            });
        }

    }, [loginState])

    // useEffect(() => {
    //     // await storeData(localStorageKeys.profileStatus, profileStatus).then(value => { }).catch(e => { })

    //     //get sqlLite to get details to store the phoneNo
    //     getData(localStorageKeys.uniquePhoneNo).then(value => {
    //         sqlPhoneNo = value;
    //     })
    //     if (profileStatus == true) {
    //         console.log("profilestatus true");
    //         navigation.navigate('dashboard');

    //     } else {
    //         // console.log("profilestatus false");
    //         console.log(sqlPhoneNo)
    //         numberChecking();
    //         // alert("on this Done.Let will access the vendor application.To more info content (Number)")

    //     }

    // }, [])

    useEffect (()=>{
        //get sqlLite to get details to store the phoneNo
        // let phoneNumber;
        getData(localStorageKeys.uniquePhoneNo).then(value => {
            phoneNumber1 = value;
        console.log("number define",phoneNumber1)
        // sqlPhoneNo=phoneNumber1;
        //alert is the already register the vendor
        if(phoneNumber1){
            Alert.alert(
                "Info",
                    `ones is Done. Let will access the vendor appplication. To more INFO  Content above Number :  ${phoneNumber1}`,

            )
        }
        })
        // console.log("number define",sqlPhoneNo)

    },[])
    console.log("out",phoneNumber1);

    const checkingData = async () => {
        console.log("INSIDE")
        console.log("values", phoneNumber, name);
        await dispatch(setParam({ key: "phoneNo", value: phoneNumber }));
        await dispatch(setParam({ key: "name", value: name }));
        await dispatch(setParam({ key: "loginState", value: true }));
        await storeData(localStorageKeys.loginStatus, 'Y').then(value => { }).catch(e => { })
        await storeData(localStorageKeys.uniquePhoneNo, phoneNumber).then(value => { }).catch(e => { })

        // Alert.alert(
        //     "Info",
        //         `ones is Done. Let will access the vendor appplication. To more INFO  Content above Number : ${phoneNumber}`,

        // )
        // dispatch({
        //     type: CALL_SAGA.REQUEST_CREATE_NEW_ACCOUNT,
        //     serviceId: 101,
        //     deviceId: '987-23423-234-234-234',
        //     phoneNo: phoneNo,
        //     serviceName: 'vendor'
        // });
        // props.navigation.navigate('dashboard', { screen: 'home' });
    }
        console.log("values", phoneNumber1);

    /**
  * @description App launch handshake on load
  */
    // useEffect(() => {
    //     dispatch({
    //         type: CALL_SAGA.REQUEST_HANDSHAKE,
    //         serviceId: 100,
    //         serviceName: 'HandShake',
    //         deviceID: '2354234-2345-2345-234'
    //     })
    // }, [dispatch]);


    return (

        <View style={[styles.container, !isPhoneNoValidated ? { flex: 1.7 } : { flex: 2.2 }]}>
            <StatusBar backgroundColor={themeColors.white} barStyle="dark-content" />
            <View style={styles.header}>
                <Animatable.Image
                    animation="bounceIn"
                    duraton="1500"
                    source={require('../../../assets/logo.png')}
                    style={styles.image}
                ></Animatable.Image>
            </View>
            <PhoneNoBlock />
        </View>

    )
}
