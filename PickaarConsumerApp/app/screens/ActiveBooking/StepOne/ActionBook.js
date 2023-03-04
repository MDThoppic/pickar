import { SortTypes } from 'expo-contacts';
import React, { useEffect } from 'react'
import { View, Text, ScrollView, StyleSheet } from 'react-native'
import { useDispatch, useSelector } from 'react-redux';
import { RenderVendorCardJSX } from '../../../components/rooms/vendorCards/vendorCards';
import types from '../../../store/sagas/types/types';
import ModalComponent from '../../.././components/brick/modal'
import { themeColors } from '../../../utils/constant';

function ActiveBook() {
  const district = useSelector((state) => state.booking.district);
  const bookingList = useSelector((state) => state.booking.bookingList)
  // console.log("active", bookingList.length)
  const dispatch = useDispatch();
  useEffect(() => {
    if (district != null) {
      dispatch({
        district,
        type: types.REQUEST_GET_CUST_BOOKING_DETAILS,
      })
    }

  }, [district])
  return (
    <View style={styles.contentContainer}>

      <View style={{ flex: 1, paddingVertical: 20, paddingHorizontal: 20, borderTopLeftRadius: 30, borderTopRightRadius: 30, backgroundColor: themeColors.white }}>

        {/* bookingList length to get validation process */}
        {
          
          bookingList?.length > 0 ?
          bookingList.map((item,index)=><RenderVendorCardJSX key={index} item={item} />)
          :
          <Text>Not available the Booking</Text>
        }
      </View>

      {/* <ScrollView> */}
      {/* {
          bookingList?.length > 0 ?
            bookingList1.map((item, index) => <RenderVendorCardJSX key={index} item={item} />)
            :
            <>
              <Text>Not available the Booking</Text>
            </>
        } */}
      {/* <ModalComponent /> */}
      {/* </ScrollView> */}
    </View>
  )
}
const styles = StyleSheet.create({
  contentContainer: {
    flex: 0,
    justifyContent: "center",
    alignItems: "center",
  }
})

export default ActiveBook;