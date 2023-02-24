import { SortTypes } from 'expo-contacts';
import React, { useEffect } from 'react'
import { View,Text } from 'react-native'
import { useDispatch } from 'react-redux';
import { RenderVendorCardJSX } from '../../../components/rooms/vendorCards/vendorCards';
import types from '../../../store/sagas/types/types';

function ActiveBook() {
  const dispatch=useDispatch();
  // useEffect(()=>{
  //   // dispatch({type:types.REQUEST_GET_CUST_BOOKING_DETAILS})

  // },[])
  return (
    <View>
       <RenderVendorCardJSX />
    </View>
  )
}

export default ActiveBook;