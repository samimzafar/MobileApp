import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import Theme from '../../theme'

const NoNetInfo = () => {
    return (
        <View style={styles.mainContainer}>
            <Image source={Theme.icons.wifi} style={styles.img} resizeMode={'contain'} />
            <Text style={styles.title}>No Connection</Text>
            <Text style={styles.subTitle}>You don’t appear to be connected to the internet. Check your connection.</Text>
        </View>
    )
}

export default NoNetInfo

const styles = StyleSheet.create({
    mainContainer: {
        alignItems: 'center',
        paddingVertical: hp(2.5),
        paddingHorizontal: wp(4),
        backgroundColor: '#EAF5FF',
        borderRadius: hp(1.5),
        marginHorizontal: wp(4),
        alignSelf: 'center',
        marginTop: hp(3)
    },
    img: {
        height: wp(9),
        width: wp(8)
    },
    title: {
        fontFamily: Theme.fonts.FONT_NUNITO_EXTRABOLD,
        color: Theme.colors.COLOR_TEXT,
        fontSize: wp(4.5)
    },
    subTitle: {
        fontFamily: Theme.fonts.FONT_NUNITO_REGULAR,
        color: Theme.colors.COLOR_TEXT,
        fontSize: wp(3.8),
        textAlign: 'center'
    }

})
