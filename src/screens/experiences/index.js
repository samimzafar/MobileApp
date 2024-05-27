import { Dimensions, FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Header } from '../../components/Header'
import { Constants } from '../../utils/AppConst'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import Theme from '../../theme';
const { width } = Dimensions.get('window');
const itemWidth = width * 0.8; // 80% of screen width
const itemMargin = width * 0.05; // 5% of screen width
const snapInterval = itemWidth + itemMargin * 2; // Calculate snap interval
const Experiences = () => {
    const data = [
        { name: "PBR ", desc: "Dpl Project here" },
        { name: "MM  ", desc: "Contour Project here" },
        { name: "Carpal  ", desc: "Contour Project here" }
    ]
    return (
        <View style={styles.safeAreaView}>
            <Header title={Constants.EXPERIENCES} />
            <FlatList
                data={data}
                horizontal
                pagingEnabled
                bounces={false}
                showsHorizontalScrollIndicator={false}
                snapToInterval={snapInterval}
                snapToAlignment="center"
                renderItem={({ item }) => (
                    <TouchableOpacity style={styles.renderItemView}>
                        <Text style={styles.titleStyle}>{item.name}</Text>
                        <Text style={styles.descStyle}>{item.desc}</Text>
                    </TouchableOpacity>
                )}
            />
        </View>
    )
}

export default Experiences

const styles = StyleSheet.create({
    safeAreaView: {
        flex: 1,
        backgroundColor: '#fff',
    },
    renderItemView: {
        marginHorizontal: wp(5),
        marginVertical: hp(2),
        backgroundColor: "rgba(50, 191, 110, 1)",
        height: hp(15),
        borderRadius: wp(4),
        width: wp(80),
        alignItems: "center",
        justifyContent: "center"

    },
    titleStyle: {
        fontSize: wp(6),
        color: "#fff",
        fontFamily: Theme.fonts.FONT_NUNITO_BOLD
    },
    descStyle: {
        fontSize: wp(5),
        color: "#fff",
        fontFamily: Theme.fonts.FONT_NUNITO_SEMIBOLD
    }
})