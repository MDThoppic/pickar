

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ActiveBookingList from '../screens/ActiveBooking/StepTwo/activeBookingList';
import ActiveBookingDetail from '../screens/ActiveBooking/StepTwo/activeDetail';

const BookingStack = createNativeStackNavigator();

const ActiveBookingStackNavScreens = () => {

    return (
        <BookingStack.Navigator>
            <BookingStack.Screen
                name='BookingList'
                component={ActiveBookingList}
                options={{
                    headerShown: false
                }}
            />

            <BookingStack.Screen
                name='ActiveDetail'
                component={ActiveBookingDetail}
                options={{
                    headerShown: false
                }}
            />


        </BookingStack.Navigator>
    )
}
export default ActiveBookingStackNavScreens;