
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignInScreen from '../screens/PreLogin/SignInScreen';
import MainTab from './MainTabNav';
import { SplashScreen } from '../screens/PreLogin/splashScreen';
import ActiveBookingStackNavScreens from './activeBookingNav';
// import Signinpopup from '../screens/Dashboard/components/Signinpopup';

// import FeedbackComponent from '../screens/ActiveBooking/StepTwo/Feedback';
// import ActiveBookingStackNavScreens from './activeBookingNav';
// import BookingStackNavScreens from './bookingNav';
// import TravelStackNavScreens from './travelBooking';
// import { getData } from '../utils/helpersFn';
// import { localStorageKeys } from '../utils/constant';
// import SettingScreenNav from './settingsNav';
const RootStack = createNativeStackNavigator();

const RootStackNavScreens = () => {

    return (
        <RootStack.Navigator initialRouteName='dashboard'>

             <RootStack.Screen
                name="splashScreen"
                component={SplashScreen}
                options={{
                    headerShown: false,
                }}
            />
            <RootStack.Screen
                name="SignInScreen"
                component={SignInScreen}
                options={{
                    headerShown: false,
                }} 
            /> 

            <RootStack.Screen
                name="dashboard"
                component={MainTab}
                options={{
                    headerShown: false,
                    cardStyle: { backgroundColor: '#fff' }
                }} />

            {/* <RootStack.Screen
                name="Signpopup"
                component={Signinpopup}
                options={{
                    headerShown: false,
                    cardStyle: { backgroundColor: '#fff' }
                }} /> */}
            {/*
                <RootStack.Screen
                name="booking"
                component={BookingStackNavScreens}
                options={{
                    headerShown: false,
                    cardStyle: { backgroundColor: '#fff' }
                }} />*/}
            <RootStack.Screen
                name="active"
                component={ActiveBookingStackNavScreens}
                options={{

                    headerShown: false,
                    cardStyle: { backgroundColor: '#fff' }
                }} /> 

            {/* <RootStack.Screen
                name="setting"
                component={SettingScreenNav}
                options={{

                    headerShown: false,
                    cardStyle: { backgroundColor: '#fff' }
                }} /> */}

            {/* <RootStack.Screen
                name="feedback"
                component={FeedbackComponent}
                options={{
                    headerLayoutPreset: 'center',
                    headerShown: true,
                    title: 'Feedback',
                    cardStyle: { backgroundColor: '#fff' }
                }} /> */}

            {/* <RootStack.Screen
                name="travelBooking"
                component={TravelStackNavScreens}
                options={{
                    headerShown: false,
                    cardStyle: { backgroundColor: '#fff' }
                }} /> */}


        </RootStack.Navigator>
    )
}

export default RootStackNavScreens;