import React from 'react'
import { ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native'
import { themeColors } from '../../../utils/constant'
import { pStyles } from '../../../utils/theme'
import { TitleWithBackBtn } from '../../../components/brick/text';
import { DEVICE_WIDTH } from '../../../utils/dimentions';
import ListContainer from '../../../components/rooms/listContainer/listContainer'


export default function QuotesBooking() {


  return (
    <View style={{ flex: 1, paddingBottom: 45 }}>
      <StatusBar backgroundColor={themeColors.yellow} barStyle='dark-content' />
      <TitleWithBackBtn name="DETAILS" />
      <ScrollView>
        
      </ScrollView>
    </View>
  )
}

const styles=StyleSheet.create({
  contentContainer: {
    // flex: 3,
    justifyContent: "center",
    alignItems: "center",
}
})