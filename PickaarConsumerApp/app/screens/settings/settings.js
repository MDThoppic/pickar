import { View, Text, StyleSheet, Image, Alert, TouchableOpacity, BackHandler } from "react-native";
import { pStyles } from "../../utils/theme";
import LottieView from 'lottie-react-native';
import { useRef } from "react";
import { useEffect } from "react";
import PIcon, { PIcons } from "../../components/brick/Icon";
// import { CommonActions, useNavigation } from "@react-navigation/native";
import { localStorageKeys } from "../../utils/constant";
import { storeData } from "../../utils/helpersFn";
import { useSelector } from "react-redux";

const UserProfile = () => {
    const userDetail = useSelector((state)=>state.user)

    console.log("phoneNo",userDetail.phoneNo);
    const avatarAnimate = useRef(null);
    useEffect(() => {
        avatarAnimate.current.play(87, 147)
    }, [])

    return (
        <View style={[styles.listBlock, styles.lineBorder, { flexDirection: 'row', height: 80, marginBottom: 10, }]}>
            <View style={{ alignItems: "center", justifyContent: 'center', width: '25%' }}>
                <LottieView
                    ref={avatarAnimate}
                    loop={true}
                    style={{ width: '85%', height: '85%', alignItems: "center", justifyContent: 'center', }}
                    source={require('../../../assets/lottie/cusavatar.json')}
                    autoPlay={true}
                />
            </View>
            <View style={{ alignItems: 'flex-start', justifyContent: 'center', width: '60%' }}>
                <Text style={{ fontFamily: pStyles.fontStyleB, fontSize: pStyles.fontSizeL }}>{userDetail.name}</Text>
                <Text style={{ fontFamily: pStyles.fontStyleR, fontSize: pStyles.fontSizeM - 2, paddingVertical: 2 }}> +91  {userDetail.phoneNo}</Text>
                <Text style={{ fontFamily: pStyles.fontStyleR, fontSize: pStyles.fontSizeM - 2 }}>mohamud2611@gmail.com</Text>
            </View>

            <View style={{ width: '10%', alignItems: 'flex-end', justifyContent: 'center' }}>
                <PIcon style={{ color: pStyles.gray }} type={PIcons.FontAwesome} name="angle-right" size={15}></PIcon>
            </View>
        </View>

    )
}

const List = ({ item, isLast, navigateTo }) => {

    const goto = (route) => navigateTo(route);

    return (
        <TouchableOpacity activeOpacity={0.8} onPress={() => goto(item.redirectTo)} style={{ flexDirection: "row", height: 35 }}>
            <View style={{ height: 35, width: '15%', alignItems: "center", justifyContent: "center" }}>
                <View style={{ backgroundColor: item.iconbg, width: 22, alignItems: 'center', justifyContent: 'center', height: 22, borderRadius: 5 }}>
                    <PIcon style={{ color: '#fff' }} type={PIcons.Feather} name={item.icon} size={13}></PIcon>
                </View>
            </View>
            <View style={[{ width: '85%', height: 35, justifyContent: "center", alignItems: "center", flexDirection: "row" }, isLast ? {} : { borderBottomWidth: StyleSheet.hairlineWidth, borderBottomColor: pStyles.gray }]}>
                <View style={{ width: '90%' }}>
                    <Text style={{ fontFamily: pStyles.fontStyleR, fontSize: pStyles.fontSizeM }}>{item.name}</Text>
                </View>
                <View style={{ width: '5%' }}>
                    <PIcon style={{ color: pStyles.gray }} type={PIcons.FontAwesome} name="angle-right" size={15}></PIcon>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const SettingList = ({ navigation }) => {

    const settingList = [
        {
            name: 'Your serivce Locations',
            redirectTo: 'location',
            icon: 'map-pin',
            iconbg: 'green'
        },
        {
            name: 'Your geting Rides',
            redirectTo: 'rides',
            icon: 'zap',
            iconbg: '#4c4cd6'
        },
        {
            name: 'About Us',
            redirectTo: 'aboutUs',
            icon: 'feather',
            iconbg: '#c71f1f'
        },
        {
            name: 'Privacy',
            redirectTo: 'aboutUs',
            icon: 'feather',
            iconbg: '#c71f1f'
        },
        {
            name: 'Help',
            redirectTo: 'aboutUs',
            icon: 'feather',
            iconbg: '#c71f1f'
        }
    ]

    const navigateTo = (route) => {
        navigation.navigate(route)
    }

    return (
        <View style={[styles.listBlock, { flexDirection: 'column', marginTop: 10 }, styles.lineBorder]}>
            {
                settingList.map((item, index, items) => <List key={index} item={item} isLast={items.length == index + 1} navigateTo={navigateTo} />)
            }
        </View>
    )
}

export default function SettingScreen({ navigation }) {

    const exitApp = () => BackHandler.exitApp();

    const logout = () => {
        Alert.alert(
            "Confirmation",
            `Are you sure, do you want to logout from Pickaar !`,
            [
                {
                    text: "Okay",
                    onPress: async () => {
                        await storeData(localStorageKeys.loginStatus, 'N')
                        exitApp();
                        return
                    }
                },
                {
                    text: "Cancel",
                    onPress: () => {
                        return
                    }
                }
            ]
        )

    }

    return (
        <View style={styles.container}>
            <View style={{ flex: 0.13, alignItems: "flex-start", justifyContent: "center", paddingHorizontal: 20 }}>
                <Text style={{ fontSize: pStyles.fontSizeXXL, fontFamily: pStyles.fontStyleB }}>Settings </Text>
            </View>

            <View style={{ flex: 1, alignItems: "flex-start", justifyContent: "flex-start" }}>

                <UserProfile />

                <SettingList navigation={navigation} />

                <TouchableOpacity onPress={logout} style={{ marginTop: 100, paddingHorizontal: 10 }}>
                    <Text style={{ fontFamily: pStyles.fontStyleL, fontSize: pStyles.fontSizeL, color: 'red'}}> Logout </Text>
                </TouchableOpacity>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    listBlock: { backgroundColor: pStyles.lightGray, width: '100%', paddingHorizontal: 5 },
    lineBorder: {
        borderTopWidth: StyleSheet.hairlineWidth, borderTopColor: pStyles.darkGray, borderBottomColor: pStyles.darkGray, borderBottomWidth: StyleSheet.hairlineWidth
    }
})
