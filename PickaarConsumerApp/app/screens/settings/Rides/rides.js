import { useState } from "react";
import { StyleSheet, View, Text } from "react-native"
import { AutocompleteDropdown } from "react-native-autocomplete-dropdown";
import { Label, PHeadings } from "../../../components/brick/text"
import { pStyles } from "../../../utils/theme"

export const Rides = ({ navigation }) => {


    const backBtnPressed = () => {
        navigation.goBack();
    };

    return (
        <View style={styles.container}>
            <PHeadings title="Rides" backBtnPressed={backBtnPressed} />

        </View>
    )
}
const styles = StyleSheet.create({
    container: {

        flex: 1,
    },
    listBlock: { backgroundColor: pStyles.lightGray, width: '100%', paddingHorizontal: 5 }
})