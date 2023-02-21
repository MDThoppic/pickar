import { useNavigation } from "@react-navigation/native";
import { useSelector } from 'react-redux';
import { View, TouchableOpacity, Image } from "react-native";

const OfferBanners = (props) => {
    
    const promotionBanners = useSelector((state) => state.dashboard.promotionBanners);

    /**
     * @todo create standalone page and just load offer details using offerID
     * @param {*} offerID 
     */
    const gotoOfferbannerBooking = (offerID) => {
        // props.navigation.navigate('booking', { screen: 'StepOne' })
    }

    if (promotionBanners.length == 0)
        return <></>

    return (
        <>
            {
                promotionBanners.map((item, index) => {
                    if (item.type == 'medium') {
                        return (
                            <TouchableOpacity key={index} onPress={gotoOfferbannerBooking(item.offerID)} >
                                <View  >
                                    {item.bannerImage && <Image
                                        style={{
                                            height: 130,
                                            width: '100%',
                                            borderRadius: 20
                                        }}
                                        source={{ uri: item.bannerImage }} />}
                                </View>
                            </TouchableOpacity>
                        )
                    }

                })
            }
        </>
    )


}
export { OfferBanners };