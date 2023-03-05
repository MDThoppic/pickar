import React from 'react'
import { ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native'
import { themeColors } from '../../../utils/constant'
import { pStyles } from '../../../utils/theme'
import { BlockTitle, TitleWithBackBtn } from '../../../components/brick/text';
import { DEVICE_HEIGHT, DEVICE_WIDTH } from '../../../utils/dimentions';
import { useDispatch, useSelector } from 'react-redux';
import { RenderVendorCardJSX } from '../../../components/rooms/vendorCards/vendorCards';
import { SelectedBookingJSX } from '../../../components/rooms/customerCard/singleCustomerCard';
import { SelectedBookingCardJSX } from '../../../components/rooms/bookinCard/SelectBooking';
import CheckBox from 'react-native-check-box';
import { setBookingParam } from '../../../store/reducers/bookingReducer';



export default function QuotesBooking({ route }) {
  const dispatch = useDispatch();

  const bookingList = useSelector((state) => state.booking.bookingList)
  const quotedAmt = useSelector((state) => state.booking.quotedAmt);
  const extraKM = useSelector((state) => state.booking.extraKM)
  const beta = useSelector((state) => state.booking.beta)

  const { bookingId } = route?.params;
  const Booking = bookingList.filter(quote => quote._id == bookingId)
  const pickaarCommission = Booking[0].pickaarCommission
  const distance = Booking[0].distance
  const TotalAmount =parseInt(pickaarCommission)+parseInt(beta)+parseInt(distance*quotedAmt);
  console.log("params", pickaarCommission, distance, TotalAmount,)


  const confrimQuote = () => {
    console.log("confrimed")
    // dispatch({
    //   bookingId,
    //   type: types.REQUEST_POST_VENDOR_QUOTES_DETAILS,
    // })
  }

  return (
    <View style={{ flex: 1, paddingBottom: 45 }}>
      <StatusBar backgroundColor={themeColors.yellow} barStyle='dark-content' />
      <TitleWithBackBtn name="Confirmation" />
      <ScrollView>
        <View style={styles.headerContainer}>
          <View style={{ width: '80%', marginBottom: 20 }}>
            {
              Booking?.length > 0 &&
            <SelectedBookingCardJSX item={Booking[0]} />
            }
          </View>
        </View>

        <View style={styles.contentContainer}>
          <View style={{ backgroundColor: themeColors.yellow }}>
            <View style={{ flex: 1, paddingVertical: 20, paddingHorizontal: 20, borderTopLeftRadius: 30, borderTopRightRadius: 30, backgroundColor: themeColors.white }}>

              <BlockTitle name={'QuotesInput'} />

            </View>

          </View>
        </View>

        <TouchableWithoutFeedback>
          <View style={styles.modalView1}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '90%', paddingTop: 10, paddingBottom: 10, marginTop: 5 }}>
              <View style={{}}>
                <Text style={{
                  fontSize: 16,
                  fontFamily: pStyles.fontStyleR,
                  paddingEnd: 20,
                }}>Quote Amount</Text>
              </View>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
                <Text>per Km/</Text>
                <TextInput
                  style={{ borderBottomWidth: 1, width: 50, fontSize: 16 }}
                  keyboardType='number-pad'
                  maxLength={2}
                  onChangeText={(quotedAmt) => dispatch(setBookingParam({ key: 'quotedAmt', value: quotedAmt }))}
                />
              </View>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '90%', paddingTop: 10, paddingBottom: 10, marginTop: 5 }}>
              <View style={{}}>
                <Text style={{
                  fontSize: 16,
                  fontFamily: pStyles.fontStyleR,
                  paddingEnd: 20,
                }}>Extra Km</Text>
              </View>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
                <Text>per Km/</Text>
                <TextInput
                  style={{ borderBottomWidth: 1, width: 50, fontSize: 16 }}
                  keyboardType='number-pad'
                  maxLength={2}
                  onChangeText={(extraKM) => dispatch(setBookingParam({ key: 'extraKM', value: extraKM }))}
                />
              </View>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '90%', paddingTop: 10, paddingBottom: 10, marginTop: 5 }}>
              <View style={{}}>
                <Text style={{
                  fontSize: 16,
                  fontFamily: pStyles.fontStyleR,
                  paddingEnd: 20,
                }}>Beta (Driver)</Text>
              </View>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
                <TextInput
                  style={{ borderBottomWidth: 1, width: 50, fontSize: 16 }}
                  keyboardType='number-pad'
                  maxLength={3}
                  onChangeText={(beta) => dispatch(setBookingParam({ key: 'beta', value: beta }))}
                />
              </View>
            </View>
            <View >
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingStart: '68%', paddingEnd: 10 }}>
                <Text style={{ fontSize: 12, paddingEnd: 10 }}>Amount:-</Text>
                <Text style={{ fontSize: 13 }}>&#8377; {distance * quotedAmt == '' ? '0.00' : distance * quotedAmt + '.00'}</Text>
              </View>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingStart: '73%', paddingEnd: 10 }}>
                <Text style={{ fontSize: 12, paddingEnd: 10 }}>Beta:-</Text>
                <Text style={{ fontSize: 13 }}>&#8377; + {beta == '' ? '0.00' : beta + '.00'}</Text>
              </View>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingStart: '50%', paddingTop: 5, paddingEnd: 10 }}>
                <Text style={{ fontSize: 12, paddingEnd: 10 }}>PickaarCommission:-</Text>
                <Text style={{ fontSize: 13, }}>&#8377; + {pickaarCommission + '.00'}</Text>
              </View>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingStart: '59%', paddingTop: 5, paddingEnd: 10 }}>
                <Text style={{ fontSize: 12, paddingEnd: 10 }}>Total Amount:-</Text>
                <Text style={{ fontSize: 12 }}>&#8377; {!TotalAmount?pickaarCommission+'.00':TotalAmount+'.00'}</Text>
              </View>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'flex-start', paddingEnd: '80%', marginTop: 20 }} >
              {/* <CheckBox

              /> */}
            </View>

            <View style={{ marginBottom: 10, marginTop: 50, marginLeft: 0, backgroundColor: pStyles.white, width: '150%', alignItems: 'center', justifyContent: 'center', height: 50, flexDirection: 'row' }}>
              <TouchableOpacity activeOpacity={0.9} onPress={() => { confrimQuote() }} >
                <View style={{ height: 40, width: '100%', backgroundColor: pStyles.primary, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', borderRadius: 5, }}>
                  <Text style={{ fontFamily: pStyles.fontStyleM, letterSpacing: 1.1, fontSize: 18, color: pStyles.white, justifyContent: 'center' }}>Proceed</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableWithoutFeedback>

      </ScrollView>


    </View>
  )
}

const styles = StyleSheet.create({
  headerContainer: {
    flex: 0.9,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: DEVICE_WIDTH,
    backgroundColor: themeColors.yellow,
  },
  contentContainer: {
    flex: 2.5,
    justifyContent: "center",
    alignItems: "center",
  },
  modal1: {
    flex: 1,
    width: DEVICE_WIDTH,
    height: DEVICE_HEIGHT,
    alignItems: 'center',
    justifyContent: 'flex-end',
    // position: 'absolute',
    // zIndex: 9999
  },
  modalView1: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    bottom: 0,
    width: DEVICE_WIDTH,
    alignItems: 'center',
    backgroundColor: pStyles.white,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 6

  },
})