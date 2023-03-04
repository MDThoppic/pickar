

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import quotesBook from '../screens/ActiveBooking/StepTwo/quotesBooking';
import ActiveBook from '../screens/ActiveBooking/StepOne/ActionBook';
import quotesBooking from '../screens/ActiveBooking/StepTwo/quotesBooking';

const BookingStack = createNativeStackNavigator();

const ActiveBookingStackNavScreens = () => {

    return (
        <BookingStack.Navigator>
            <BookingStack.Screen
                name='ActiveBook'
                component={ActiveBook}
                options={{
                    headerShown: false
                }}
            />

            <BookingStack.Screen
                name='quotesBooking'
                component={quotesBooking}
                options={{
                    headerShown: false
                }}
            />
           
        </BookingStack.Navigator>
    )
}
export default ActiveBookingStackNavScreens;