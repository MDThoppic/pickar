import React, { useState, useEffect, useRef } from 'react';
import { View, StyleSheet, StatusBar, Text } from 'react-native';
import { localStorageKeys, themeColors } from '../../utils/constant';
import * as Animatable from 'react-native-animatable';
import OTPBlock from './components/otpblock';
import PhoneNoBlock from './components/phoneNoBlock';
import { useDispatch, useSelector } from 'react-redux';
import CALL_SAGA from '../../store/sagas/types/types';

import { FirebaseRecaptchaVerifierModal } from 'expo-firebase-recaptcha';
import { firebaseConfig } from '../../../config';
import firebase from 'firebase/compat/app';
import { setParam } from '../../store/reducers/userReducer';
import { storeData } from '../../utils/helpersFn';

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
    let isOTPValidateStatus = useSelector((state) => state.user.isOTPValidateStatus)

    const phoneNumber = useSelector((state) => state.user.phoneNo);
    const name=useSelector((state)=>state.user.name);
    const loginState =useSelector((state)=> state.user.loginState);
    // const name = useSelector((state) => state.user.name);

    // const [code, setCode] = useState('');
    // const [verificationId, setVerificationId] = useState('');
    // const recaptchaVerifier = useRef(null);
    // const ValidateOTP = (code) => {
    //     console.log(code)
    // }

    /**
     * @description Triggered once PhoneNumber entered
     */
    useEffect(() => {
        setIsPhoneNoValidated(isPhoneNoValidateStatus);
        if (isPhoneNoValidateStatus) {
            checkingData();
        }
    }, [isPhoneNoValidateStatus])
     
    useEffect(()=>{
        if(loginState){
            dispatch({
                type: CALL_SAGA.REQUEST_CREATE_NEW_ACCOUNT,
                serviceId: 101,
                deviceId: '987-23423-234-234-234',
                phoneNo: phoneNumber,
                name:name,
                serviceName: 'vendor'
            });
        }

    },[loginState])


    const checkingData = async () => {
        console.log("INSIDE")
        console.log("values",phoneNumber,name);
        await dispatch(setParam({ key: "phoneNo", value: phoneNumber }));
        await dispatch(setParam({ key: "name", value: name }));
        await dispatch(setParam({ key: "loginState", value: true }));
        await storeData(localStorageKeys.loginStatus, 'Y').then(value => { }).catch(e => { })
        await storeData(localStorageKeys.uniquePhoneNo, phoneNumber).then(value => { }).catch(e => { })
        // dispatch({
        //     type: CALL_SAGA.REQUEST_CREATE_NEW_ACCOUNT,
        //     serviceId: 101,
        //     deviceId: '987-23423-234-234-234',
        //     phoneNo: phoneNo,
        //     serviceName: 'vendor'
        // });
        // props.navigation.navigate('dashboard', { screen: 'home' });
        props.navigation.navigate('Signpopup');

    }

    // const sendVerification = () => {
    //     const phoneProvider = new firebase.auth.PhoneAuthProvider();
    //     console.log('+91' + phoneNumber)
    //     phoneProvider
    //         .verifyPhoneNumber('+91' + phoneNumber, recaptchaVerifier.current)
    //         .then(setVerificationId);
    // }

    // const confirmCode = (otp) => {
    //     const _OTP = otp;
    //     const credential = firebase.auth.PhoneAuthProvider.credential(
    //         verificationId,
    //         _OTP
    //     );
    //     firebase.auth().signInWithCredential(credential)
    //         JSON.stringify(sendVerification)
    //         .then(async () => {
    //             setCode('');
    //             console.log("INSIDE")
    //             await dispatch(setParam({ key: "phoneNo", value: phoneNumber }));
    //             await dispatch(setParam({ key: "loginState", value: true }));
    //             await storeData(localStorageKeys.loginStatus, 'Y').then(value => { }).catch(e => { })
    //             await storeData(localStorageKeys.uniquePhoneNo, phoneNumber).then(value => { }).catch(e => { })
    //             props.navigation.navigate('dashboard', { screen: 'home' });
    //         })
    //         .catch((error) => {
    //             /* ReWrite   
    //             Mega
    //             */
    //             console.log(error)
    //         })
    // }


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

            {/* <FirebaseRecaptchaVerifierModal
                ref={recaptchaVerifier}
                firebaseConfig={firebaseConfig}
            /> */}

            <View >

            </View>
            <PhoneNoBlock />
            {/* {
                !isPhoneNoValidated
                    ? <PhoneNoBlock />
                    : <OTPBlock
                        ValidateOTP={confirmCode}
                    />
            } */}
        </View>

    )
}
