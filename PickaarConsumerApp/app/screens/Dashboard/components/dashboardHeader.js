// import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
// import { themeColors } from "../../../utils/constant";
// import { fonts } from '../../../utils/theme';
// import PIcon, { PIcons } from '../../../components/brick/Icon';
// import { useDispatch, useSelector } from 'react-redux';
// import { setConfig } from "../../../store/reducers/modalReducer";

// export default function DashboardHeader() {
//     const dispatch = useDispatch();
//     const locations = useSelector((state) => state.user.locations);
//     console.log("_______"+JSON.stringify(locations))
//     const primaryAddress = locations.filter(address => address.isPrimary == true);
//     const maxVisibleLimit = 40;

//     function openAddressPickerModal() {
//         dispatch(setConfig({
//             visible: true,
//             modal: 'ADDRESS_PICKER', //ADDRESS_PICKER
//             animationType: 'fade'
//         }))
//     }

//     return (
//         <TouchableOpacity onPress={openAddressPickerModal} style={styles.headerContainer} >
//             <View style={{ flex: 1, flexDirection: 'row' }}>
//                 <PIcon type={PIcons.Feather} color={themeColors.yellow} name="map-pin" />
//                 <Text style={styles.addressTxtName}>{primaryAddress[0]?.name}</Text>
//                 {/* <Text style={styles.addressTxtName} >Home</Text> */}
//             </View>
//             <View style={{ flex: 1, flexDirection: 'row' }}>
//                 <Text style={styles.addressTxtValue}  > {((primaryAddress[0]?.address)?.length > maxVisibleLimit) ?
//                     (((primaryAddress[0]?.address).substring(0, maxVisibleLimit - 3)) + '...') :
//                     primaryAddress[0]?.address}</Text>
//                     <Text style={styles.addressTxtName}>
                    
//                     </Text>
//             </View>
//         </TouchableOpacity>
//     )
// }

// const styles = StyleSheet.create({
//     headerContainer: {
//         flex: 1,
//         alignItems: 'flex-start',
//         height: 100
//     },
//     addressTxtName: {
//         paddingHorizontal: 5,
//         fontFamily: fonts.RubikExtraBold,
//         fontSize: 16,
//         color: themeColors.primary
//     },
//     addressTxtValue: {
//         paddingHorizontal: 5,
//         fontFamily: fonts.RubikLight,
//         fontSize: 11,
//         color: themeColors.darkGray
//     }
// })