import react from "react";
import { StyleSheet, TextInput } from 'react-native';
import { TextField, FilledTextField, OutlinedTextField } from '@ubaids/react-native-material-textfield';
import { themeColors } from "../../utils/constant";

/***
 * BtnConfig will have following properties
 * 
    config={{
      maxLength: *
      keyboardType: 
      label: *
      styles: 
    }} 
    
    (config, funs...)
    Ref :: https://reactnative.dev/docs/textinput
 */

const PInputOutlined = ({ config, onTextChange }) => {

    // const onChangeText = (e) => onTextChange(e);

    return (
        <OutlinedTextField
        
            label={config.label}
            baseColor={themeColors.secondary}
            tintColor={themeColors.secondary}
            textColor={themeColors.primary}
            styles={[config.styles]}
            maxLength={config.maxLength}
            keyboardType={config.keyboardType || 'default'}
            onChangeText={(e) => { onTextChange(e) }}
        />
    )
}

const PInputFilled = ({ config, onTextChange }) => {

    const onChangeText = (e) => onTextChange(e);

    return (
        <FilledTextField
            label={config.label}
            baseColor={themeColors.secondary}
            tintColor={themeColors.secondary}
            textColor={themeColors.primary}
            styles={[config.styles]}
            maxLength={config.maxLength}
            keyboardType={config.keyboardType || 'default'}
            onChangeText={onChangeText}
        />
    )
}

export { PInputOutlined, PInputFilled };
