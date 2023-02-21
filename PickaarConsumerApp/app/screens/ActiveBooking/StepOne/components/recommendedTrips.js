import { useState, useRef } from 'react';
import { RenderVendorCardJSX } from '../../../../components/rooms/vendorCards/vendorCards';
import Carousel from 'react-native-snap-carousel';
import { DEVICE_WIDTH } from '../../../../utils/dimentions';

export default function RecommendedTrips({ quotes }) {
    const carouselRef = useRef('')
    // const [orderItems, setOrderItems] = useState(quotes);
    const recommendedQuotes = quotes;
    // console.log(recommendedQuotes)
    const gotoBookingDetail = (item) => {
        navigation.push('OrderDetail', {
            selectedItem: item
        })
    }

    return (
        <Carousel
            ref={carouselRef}
            data={recommendedQuotes}
            layout='stack'
            // initialScrollIndex={1}
            accessible={true}
            bounces={false}
            // initialScrollIndex={1}
            firstItem={0}
            layoutCardOffset={1}
            inactiveSlideOpacity={0.3}
            inactiveSlideScale={0.4}
            // inactiveSlideShift={1}
            renderItem={RenderVendorCardJSX}
            // sliderHeight={400}
            // itemHeight={100} 
            itemWidth={DEVICE_WIDTH * 0.6}
            vertical={false}
            sliderWidth={DEVICE_WIDTH}
            onSnapToItem={(index) => console.warn(index)}
        />
    );
}


// const styles = StyleSheet.create({
//     headerContainer: {
//         flex: 0.5,
//         width: DEVICE_WIDTH,
//         backgroundColor: themeColors.yellow,
//     },
//     contentContainer: {
//         flex: 2.5,
//         justifyContent: "center",
//         alignItems: "center",
//     },
//     item: {
//         height: 150,
//         overflow: 'hidden',
//         width: DEVICE_WIDTH * 0.9,
//         backgroundColor: themeColors.white,
//         borderLeftWidth: 10,
//         borderRadius: 10,
//         marginTop: 20,
//         alignSelf: "center",
//         shadowColor: "#000",
//         shadowOffset: {
//             width: 0,
//             height: 3,
//         },
//         shadowOpacity: 0.27,
//         shadowRadius: 4.65,
//         elevation: 6,
//     }
// })