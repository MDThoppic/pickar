import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import LottieView from 'lottie-react-native';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { State } from 'react-native-gesture-handler';
import Dashboard from '../Dashboard';



export default function Signinpopup(props) {

  const status = useSelector((state) => state.user.profileStatus)
  const [loaderText, setloaderText] = useState('Fetching Info..');


  useEffect(() => {
    if (status = ture) {
      // <Dashboard />
      props.navigation.navigate('dashboard');

    }

  }, [status])

  return (
    <View style={styles.container}>
      <LottieView
        style={{ height: 200 }}
        // source={require('../../../assets/lottie/splashScreenLoader.json')}
        source={require('../../../../assets/lottie/splashScreenLoader.json')}
        autoPlay={true}
      >
      </LottieView>
      <Text style={styles.loaderTxt}>{loaderText}</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  loaderTxt: {
      fontSize: 10
  }
})
