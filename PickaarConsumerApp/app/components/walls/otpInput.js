import { OutlinedTextField } from '@ubaids/react-native-material-textfield';
import React, { useState, useRef, useEffect } from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import { PicInputTextField } from '../brick/inputs';
import OTPInputView from '@twotalltotems/react-native-otp-input'
import { themeColors } from '../../utils/constant';

const initialPin={
    pin1: '',
    pin2: '',
    pin3: '',
    pin4: '',
    pin5: '',
    pin6: ''
}

const OtpInputContainer = ({ postEnteredOTP , otpWrongCount}) => {
    const [pins, setPin] = useState(initialPin);

    const setOTPToParent = (pin) => postEnteredOTP(pin)

    const clearOTP=()=>{
        setPin(initialPin)
        };

    useEffect(() => {
        //Check all pin entered
        const status = Object.values(pins).some(x => x == '');
        if (!status) {
            let pin = Object.values(pins).join('');
            setOTPToParent(pin);
        }

    }, [pins])

    useEffect(() => {
        if(otpWrongCount<3){
            clearOTP();
        }
       }, [otpWrongCount])

    const pin1 = useRef();
    const pin2 = useRef();
    const pin3 = useRef();
    const pin4 = useRef();
    const pin5 = useRef();
    const pin6 = useRef();


    return (

        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center' }}>
            <TextInput
                placeholder=''
                style={{ borderWidth: 2, borderColor: themeColors.secondary, borderRadius: 10, height: 40, width: 40, textAlign: 'center' }}
                ref={pin1}
                maxLength={1}
                value={pins.pin1}
                keyboardType="number-pad"
                onChangeText={(pin) => {
                    setPin(prevState => ({
                        ...prevState,
                        pin1: pin
                    }))
                    if (pin != '')
                        pin2.current.focus();
                }
                }
            ></TextInput>
            <TextInput
                placeholder=''
                style={{ borderWidth: 2, borderColor: themeColors.secondary, borderRadius: 10, height: 40, width: 40, textAlign: 'center' }}
                ref={pin2}
                maxLength={1}
                value={pins.pin2}
                keyboardType="number-pad"
                onChangeText={(pin) => {
                    setPin(prevState => ({
                        ...prevState,
                        pin2: pin
                    }))
                    if (pin != '')
                        pin3.current.focus();
                }
                }
            ></TextInput>
            <TextInput
                placeholder=''
                style={{ borderWidth: 2, borderColor: themeColors.secondary, borderRadius: 10, height: 40, width: 40, textAlign: 'center' }}
                ref={pin3}
                maxLength={1}
                value={pins.pin3}
                keyboardType="number-pad"
                onChangeText={(pin) => {
                    setPin(prevState => ({
                        ...prevState,
                        pin3: pin
                    }))
                    if (pin != '')
                        pin4.current.focus();
                }
                }
            ></TextInput>
            <TextInput
                placeholder=''
                style={{ borderWidth: 2, borderColor: themeColors.secondary, borderRadius: 10, height: 40, width: 40, textAlign: 'center' }}
                ref={pin4}
                maxLength={1}
                value={pins.pin4}
                keyboardType="number-pad"
                onChangeText={(pin) => {

                    setPin(prevState => ({
                        ...prevState,
                        pin4: pin
                    }))
                    if (pin != "")
                        pin5.current.focus();

                }}

            ></TextInput>

            <TextInput
                placeholder=''
                style={{ borderWidth: 2, borderColor: themeColors.secondary, borderRadius: 10, height: 40, width: 40, textAlign: 'center' }}
                ref={pin5}
                maxLength={1}
                value={pins.pin5}
                keyboardType="number-pad"
                onChangeText={(pin) => {

                    setPin(prevState => ({
                        ...prevState,
                        pin5: pin
                    }))
                    if (pin != "")
                        pin6.current.focus();

                }}

            ></TextInput>

            <TextInput
                placeholder=''
                style={{ borderWidth: 2, borderColor: themeColors.secondary, borderRadius: 10, height: 40, width: 40, textAlign: 'center' }}
                ref={pin6}
                maxLength={1}
                value={pins.pin6}
                keyboardType="number-pad"
                onChangeText={(pin) => {

                    setPin(prevState => ({
                        ...prevState,
                        pin6: pin
                    }))
                    if (pin != "")
                        pin6.current.blur();

                }}

            ></TextInput>
        </View>
    )
}

export default OtpInputContainer;


const styles = StyleSheet.create({
    otpContainer: {
    }
})