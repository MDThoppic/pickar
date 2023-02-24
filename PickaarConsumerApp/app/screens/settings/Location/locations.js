import { StyleSheet, View, Text, ScrollView } from "react-native"
import { Label, PHeadings } from "../../../components/brick/text"
import { pStyles } from "../../../utils/theme"
import { AutocompleteDropdown } from "react-native-autocomplete-dropdown";
import { useState } from "react";
import { PBtn } from "../../../components/brick/button";
import { MultipleSelectList, SelectList } from "react-native-dropdown-select-list";
import { storeData } from "../../../utils/helpersFn";
import { localStorageKeys } from "../../../utils/constant";


export const Location = ({ navigation }) => {

    const [select, setSelected] = useState([])
    const data = [
        { key: '1', value: 'Mobiles', disabled: true },
        { key: '2', value: 'Appliances' },
        { key: '3', value: 'Cameras' },
        { key: '4', value: 'Computers', disabled: true },
        { key: '5', value: 'Vegetables' },
        { key: '6', value: 'Diary Products' },
        { key: '7', value: 'Drinks' },
        { key: '8', value: 'tea', disabled: true },
        { key: '9', value: 'coffee' },
        { key: '10', value: 'assate' },
        // { key: '11', value: 'Computers', disabled: true },
        { key: '11', value: 'team' },
        { key: '12', value: ' Products' },
        { key: '13', value: 'setvalue' },
    ]



    const backBtnPressed = () => {
        navigation.goBack();
    };

    const addServiceLocation = async() => {
        if(select.length >=2){
            await storeData(localStorageKeys.serviceLoc,select).then(value => {console.log(value) }).catch(e => {console.log(e); })
            navigation.navigate('dashboard', { screen: 'home' })
        }else{
            alert("add district")
        }
        
    }

    return (
        <>
            <View style={styles.container}>
                <ScrollView>
                <PHeadings title=" Service Location" backBtnPressed={backBtnPressed} />
                <View style={{ flex: 1, paddingEnd: 10, paddingStart: 10 }}>
                    <MultipleSelectList
                        setSelected={(val) => setSelected(val)}
                        data={data}
                        save="value"
                        // onSelect={() => console.log(select)}
                        label="Your service District  (Pickup Your costomer)"
                        notFoundText="No Data Exists"
                    />
                    <View style={{marginTop:50}}>
                        <PBtn
                            config={{
                                label: 'Proceed',
                                outlinedBtn: false,
                                icon: {
                                    isRequired: false,
                                    name: 'navigate-next'
                                }
                            }} 
                                onPress={addServiceLocation}
                            />
                    </View>
                </View>

                </ScrollView>
            </View>


        </>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    listBlock: { backgroundColor: pStyles.lightGray, width: '100%', paddingHorizontal: 5 }
})