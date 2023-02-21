import React, { useEffect, useState, useMemo } from 'react';
import { Text, StyleSheet, View, ScrollView, Image } from "react-native";
import { themeColors } from '../../../utils/constant';
import { DEVICE_HEIGHT, DEVICE_WIDTH } from '../../../utils/dimentions';
import { fonts, pStyles } from '../../../utils/theme';

import StarRating from 'react-native-star-rating-widget';
import { useDispatch, useSelector } from 'react-redux';
import { setQuoteParam } from '../../../store/reducers/quotesSlice';
import types from '../../../store/sagas/types/types';

const UserInfoBlock = ({ userInfo }) => {

    const label = [{ exp: 'Exp. :' }, { language: 'Language :' }, { completedTrip: 'Completed Trip :' }, { badgesScored: 'Badges Scored :' }];

    return (
        <>
            <View style={[styles.blockContainer, { marginTop: 20 }]}>
                <View style={styles.profileImgContainer}>
                    <Image style={styles.driverAvatar} source={require('../../../../assets/driver_avatar.png')} />
                </View>
                <View style={styles.driverContentContainer}>
                    <View>
                        <Text style={{ fontFamily: pStyles.fontStyleM, fontSize: 14, color: pStyles.primary }}>{userInfo.name}</Text>
                    </View>
                    {
                        ['exp', 'language', 'completedTrip', 'badgesScored'].map((key, index) => {
                            return (
                                <View key={index} style={[{ flexDirection: 'row', paddingTop: 3 }]}>
                                    <Text style={{ fontFamily: pStyles.fontStyleR, fontSize: 12, color: pStyles.gray }}>{label[index][key]} </Text>
                                    <Text style={{ fontFamily: pStyles.fontStyleR, fontSize: 12, color: pStyles.darkGray, width: 0, flexGrow: 1, flex: 1, }}>{userInfo[key]}</Text>
                                </View>
                            )

                        })
                    }
                </View>
            </View>
            <View style={[styles.blockContainer, { height: 80, flexDirection: 'column', justifyContent: 'space-evenly' }]}>
                <Text style={{ fontFamily: pStyles.fontStyleB, fontSize: 17, color: pStyles.darkGray }}> About Us</Text>
                <Text style={{ fontFamily: pStyles.fontStyleM, fontSize: 11, color: pStyles.darkGray }}> {userInfo.aboutMe} </Text>
            </View>
        </>
    )
}

const StarRate = ({ rating, size, styleWidth }) => <StarRating
    rating={rating}
    onChange={(rating) => { return }}
    maxStars={5}
    color={pStyles.yellow}
    emptyColor={pStyles.gray}
    enableHalfStar={false}
    enableSwiping={false}
    starSize={size}
    starStyle={{ width: styleWidth }}
/>

const RatingAndReviewBlock = ({ ratings }) => {

    return (
        <View style={[styles.blockContainer, styles.ratingContainer, { height: 140, paddingTop: 25, paddingHorizontal: 10, borderBottomColor: pStyles.gray, borderBottomWidth: StyleSheet.hairlineWidth }]}>

            <View style={{ width: '100%', height: 140, flexDirection: 'column', alignItems: 'center', width: '50%', justifyContent: 'flex-start', }}>
                <View style={{ width: '100%', height: 30, flexDirection: 'row' }}>
                    <Text style={{ fontFamily: pStyles.fontStyleM, fontSize: 14 }}>Ratings and reviews</Text>
                </View>

                <View style={{ height: 120 }}>
                    <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ fontFamily: pStyles.fontStyleB, color: pStyles.darkGray, fontSize: 25 }}>{ratings.rating} </Text>
                        <Text style={{ fontFamily: pStyles.fontStyleR, color: pStyles.darkGray, fontSize: 11 }}>In {ratings.completedTrip} trips</Text>
                        <View style={{ paddingTop: 5 }}>
                            <StarRate
                                rating={ratings.rating}
                                size={25}
                                styleWidth={15} />

                        </View>
                    </View>
                </View>
            </View>

            <View style={{ height: 140, flexDirection: 'column', width: '50%', alignItems: 'center' }}>

                <View style={{ flexDirection: 'column', alignContent: 'center', justifyContent: 'center' }}>

                    {
                        (ratings.ratingForEach || []).map((value, index) => {
                            return (
                                <View key={index} style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <Text style={{ fontFamily: pStyles.fontStyleL, fontSize: 11 }}>{index + 1}</Text>
                                    <View style={{ margin: 5, borderRadius: 5, width: 100, height: 12, backgroundColor: pStyles.lightGray }}>
                                        <View style={{ width: value, height: 12, borderRadius: 5, backgroundColor: pStyles.yellow }}></View>
                                    </View>
                                </View>
                            )
                        })
                    }
                </View>
            </View>
        </View>
    )
}

const ScoredBadges = ({ scoredBadgesWithTotal }) => {
    return (
        scoredBadgesWithTotal.map((item2, index2) => {
            return (
                <View key={index2} style={styles.badgeBox}>
                    <Text style={{ fontFamily: pStyles.fontStyleM, color: pStyles.darkGray, fontSize: 10, }}>{item2}</Text>
                </View>
            )
        })
    )
}

const ScoredBadgesBlock = ({ scoredBadgesWithTotal }) => {
    return (
        <View style={[styles.blockContainer]}>

            <View style={[{ width: '100%', paddingVertical: 10, paddingLeft: 20, flexDirection: 'row', flex: 1, flexWrap: 'wrap' }]}>
                <View style={{ width: '100%', alignSelf: 'flex-start', paddingBottom: 10 }}>
                    <Text style={{ fontFamily: pStyles.fontStyleM, fontSize: 14 }}>Scored Badges</Text>
                </View>

                <ScoredBadges scoredBadgesWithTotal={scoredBadgesWithTotal} />

            </View>
        </View>
    )
}

const Hr = () => <View style={{ height: StyleSheet.hairlineWidth, width: DEVICE_WIDTH * 0.95, alignItems: 'center', backgroundColor: pStyles.white, marginBottom: 10, }}></View>;


const Feedback = () => {

    // const feedbackList = useSelector(state=> state.feedback) [
        const feedbackList =[
        {
            profileImgSrc: '../../../../assets/customer_avatar.png',
            reviewerName: 'Anil',
            gender: 'M',
            starRating: 4,
            comments: 'Had great discussion while travelling.',
            scoredBadges: ['Women Safe', 'Polite', 'Clean']
        },
        {
            profileImgSrc: '../../../../assets/customer_avatar.png',
            reviewerName: 'Koushik',
            gender: 'M',
            starRating: 5,
            comments: 'Had great discussion while tr. Lorem Ipsum is simply dummy text of the printing andtypesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to mak Lorem Ipsum is simply dummy text of the printing andtypesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to mak Lorem Ipsum is simply dummy text of the printing andtypesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to mak Lorem Ipsum is simply dummy text of the printing andtypesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to mak Lorem Ipsum is simply dummy text of the printing andtypesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to mak ',
            scoredBadges: ['Women Safe', 'Safe Driving', 'On Time']
        },
        {
            profileImgSrc: '../../../../assets/customer_avatar.png',
            reviewerName: 'Prem',
            gender: 'M',
            starRating: 5,
            comments: 'Good',
            scoredBadges: ['Women Safe', 'Safe Driving', 'On Time']
        },
        {
            profileImgSrc: '../../../../assets/customer_avatar.png',
            reviewerName: 'Haresh',
            gender: 'M',
            starRating: 3,
            comments: ' Need to improve on communication but driving is good.',
            scoredBadges: ['Women Safe', 'Polite', 'Clean']
        }, {
            profileImgSrc: '../../../../assets/customer_avatar.png',
            reviewerName: 'Aarthy Viswanathan',
            gender: 'F',
            starRating: 5,
            comments: 'More Pariotic person. ',
            scoredBadges: ['Women Safe', 'Safe Driving', 'On Time']
        },
        {
            profileImgSrc: '../../../../assets/customer_avatar.png',
            reviewerName: 'Kishore',
            gender: 'M',
            starRating: 2,
            comments: 'Need to improve on driving.',
            scoredBadges: ['Women Safe', 'Polite', 'Clean']
        }
    ];
     useEffect(()=>{
    const dispatch = useDispatch();        
        dispatch({type:types.REQUEST_GET_VENDOR_FEEDBACK_BY_VENDORID});

     },[])
    return (
        <>
            <View style={{ width: '100%', paddingBottom: 10, paddingLeft: 20, paddingTop: 10 }}>
                <Text style={{ fontFamily: fonts.RubikBold, fontSize: 18, color: themeColors.darkGray }}>Feedbacks</Text>
            </View>
            {
                feedbackList.map((item, Index) => {
                    return (
                        <View key={Index} style={[styles.blockContainer, { paddingVertical: 10, paddingHorizontal: 10, flexDirection: 'column' }]} >
                            <View style={{ width: '100%', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>

                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <Image style={{ padding: 5, height: 25, width: 25, borderRadius: 50, opacity: 0.7 }} source={require('../../../../assets/customer_avatar.png')} ></Image>
                                    <Text style={{ paddingLeft: 5, fontFamily: fonts.RubikMedium, fontSize: 12 }}> {item.reviewerName}</Text>
                                </View>

                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <Text style={{ fontFamily: fonts.RubikMedium, fontSize: 10 }}>{item.starRating}</Text>
                                    <StarRate
                                        rating={item.starRating}
                                        size={15}
                                        styleWidth={5} />
                                </View>
                            </View>

                            <View style={{ width: '100%', paddingTop: 10, paddingLeft: 5, paddingBottom: 10 }}>
                                <ScrollView style={{}}>
                                    <View>
                                        <Text numberOfLines={20} style={{ fontFamily: fonts.RubikRegular, fontSize: 12 }}>{item.comments}</Text>
                                    </View>
                                </ScrollView>
                            </View>

                            <View style={styles.feedbackBadgeContainer}>
                                <ScoredBadges scoredBadgesWithTotal={item.scoredBadges} />
                            </View>
                        </View>
                    )
                })
            }
        </>
    )
}

export default function FeedbackComponent() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setQuoteParam({ key: 'detailScreenRedirectTo', value: '' }))
    }, [])

    const [feedbackList, setfeedbackList] = useState()


    const userDetail = {
        userInfo: {
            name: 'Kameeshwaran Viswanathan',
            exp: '3.4 Yrs',
            language: 'Tamil, Hindi, English',
            completedTrip: 120,
            badgesScored: 6,
            aboutMe: 'Some content about the driver goes here',
            profileImgSrc: '../../../../assets/driver_avatar.png'
        },
        ratings: {
            rating: 3.8,
            completedTrip: 120,
            ratingForEach: [85, 75, 45, 15, 5]
        },
        scoredBadgesWithTotal: ['Women Safe 80%', 'Polite 100%', 'Clean 50%', 'Good 100%', 'Excellent Driving 100%', 'Family Safe 70%']
    }


    return (
        <>
            <ScrollView>

                <View style={styles.container}>

                    <UserInfoBlock userInfo={userDetail.userInfo} />

                    <Hr />

                    <RatingAndReviewBlock ratings={userDetail.ratings} />

                    <ScoredBadgesBlock scoredBadgesWithTotal={userDetail.scoredBadgesWithTotal} />

                    <Hr />

                    <Feedback />
                </View>

            </ScrollView>
        </>
    )
}

const styles = StyleSheet.create({
    badgeBox: {
        height: 20,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: themeColors.lightGray,
        paddingTop: 1,
        paddingLeft: 4,
        paddingRight: 4,
        margin: 3,
        borderRadius: 5,
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: themeColors.darkGray
    },
    feedbackBadgeContainer: {
        flexDirection: 'row',
        width: '100%',
        height: 30,
        paddingTop: 5,
        paddingVertical: 10,
    },
    container: {
        // height: DEVICE_HEIGHT,
        flex: 1,
        // flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: themeColors.lightGray
    },
    blockContainer: {
        flex: 1,
        width: DEVICE_WIDTH * 0.9,
        backgroundColor: themeColors.white,
        borderRadius: 10,
        marginBottom: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    ratingContainer: {
        flexDirection: 'row',
    },
    profileImgContainer: {
        flex: 0.3,
        // width: '25%',
        flexDirection: 'column',
        alignItems: 'center',
        paddingVertical: 20,
        // paddingTop: 15,
        // paddingBottom: 15,
        justifyContent: 'center',
        // height: 110
        // backgroundColor: themeColors.chepestBgColor,


    },
    driverContentContainer: {
        //     width: '75%',
        //     height: 110,
        margin: 0,
        flex: 0.7,
        padding: 0,
        // backgroundColor: themeColors.darkGray,
        flexDirection: 'column',
        paddingHorizontal: 15,
        paddingVertical: 15,
        // alignItems: 'flex-start',
        justifyContent: 'center',

    },
    driverAvatar: {
        width: 60,
        height: 60
    }
})