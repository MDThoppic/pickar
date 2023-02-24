import { View, StyleSheet, Text, ScrollView } from 'react-native';
import { useRef, useState, useEffect } from 'react';
import { PBtn } from '../../../components/brick/button';
import * as Animatable from 'react-native-animatable';
import { themeColors } from "../../../utils/constant";
import { PInputOutlined } from '../../../components/brick/inputs';
import { fonts } from '../../../utils/theme';
import { useDispatch } from 'react-redux';
import CALL_SAGA from '../../../store/sagas/types/types'
import { Toast } from '../../../components/brick/toast';
import { setParam } from '../../../store/reducers/userReducer';

const proceeBtnObj = {
    label: 'Proceed',
    icon: 'navigate-next'
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'flex-end',
        alignItems: 'flex-start',
        borderTopLeftRadius: 80,
        borderBottomStartRadius: 90,
        borderBottomEndRadius: 90,
        borderTopRightRadius: 80,
        backgroundColor: themeColors.yellow,
        paddingHorizontal: 30,
        paddingVertical: 40,
        marginLeft:5
    },
    title: {
        fontSize: 22,
        fontFamily: fonts.RubikBold,
        color: themeColors.primary,
    },
    fieldsContainer: {
        flex: 1,
        justifyContent: 'flex-start',
        width: '100%'
    }
})

const PhoneNoBlock = () => {
    const dispatch = useDispatch();
    const phoneNoValueRef = useRef('');
    const vendorNameValueRef = useRef('');

    useEffect(() => {
        dispatch(setParam({ key: "isPhoneNoValidateStatus", value: false }));
        dispatch(setParam({ key: "phoneNo", value: null }))
    }, [])


    const validatePhoneNo = () => {
        /*Validation and sending OTP logic will goes here
            @return true = redirect to OTP block
        */
        const phoneNo = phoneNoValueRef.current;
        const name = vendorNameValueRef.current;


        if (phoneNo.length > 8 && phoneNo.length < 12) {
            // DO FCM notification here and enable 
            dispatch(setParam({ key: "isPhoneNoValidateStatus", value: true }))
            dispatch(setParam({ key: "phoneNo", value: phoneNo }))
            dispatch(setParam({ key: "name", value: name }))


        } else {
            Toast({ message: 'Please enter valid Phone Number to Proceed.', time: 'SHORT' });
        }
    }

    return (
        <>
            <ScrollView >

                <Animatable.View
                    animation="bounceInUp"
                    duraton="3500"
                    style={[styles.container, { flex: 1.9 }]}>

                    <View style={{ flex: 1, marginStart:40}}>
                        <Text fontFamily={fonts.RubikMedium} style={styles.title}>
                            Welcome to Pickaar !
                        </Text>
                        <Text fontFamily={fonts.RubikMedium} style={{ fontSize: 10, paddingHorizontal: 9,marginBottom:10 }}>
                            Best place to find affordable rides.
                        </Text>
                    </View>
                    <View style={styles.fieldsContainer}>
                        <View style={{ marginBottom: 10 }} >
                            <PInputOutlined
                                config={{
                                    maxLength: 12,
                                    keyboardType: 'number-pad',
                                    label: 'Phone Number',
                                    styles: {}
                                }}
                                onTextChange={(phoneNo) => {
                                    phoneNoValueRef.current = phoneNo;
                                }}
                            />
                        </View>
                        <View >
                            <PInputOutlined
                                config={{
                                    // maxLength: 12,
                                    keyboardType: 'default',
                                    label: 'Enter your name',
                                    styles: {}
                                }}
                                onTextChange={(vendorName) => {
                                    vendorNameValueRef.current = vendorName;
                                }}
                            />
                        </View>
                        <View >
                            <PBtn
                                config={{
                                    label: 'Proceed',
                                    outlinedBtn: false,
                                    icon: {
                                        isRequired: false,
                                        name: 'navigate-next'
                                    }
                                }}
                                onPress={validatePhoneNo} />
                        </View>
                    </View>

                </Animatable.View>
            </ScrollView>

        </>
    )
}

export default PhoneNoBlock;