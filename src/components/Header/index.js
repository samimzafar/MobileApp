import { ImageBackground, StyleSheet, Text, TouchableOpacity } from "react-native"
import Theme from "../../theme"
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen"
import { ArrowIconSvg, SortIconSvg } from "../../assets/svg"

const Header = ({ pressBack, onPress, title }) => {
    return (
        <ImageBackground source={Theme.icons.blueHeader} style={styles.headerImageContainer}>
            <TouchableOpacity onPress={pressBack}>
                <ArrowIconSvg />
            </TouchableOpacity>
            <Text style={styles.titleStyle}>{title}</Text>
            <SortIconSvg />
        </ImageBackground>
    )
}
const styles = StyleSheet.create({
    headerImageContainer: {
        height: hp(13),
        width: wp(100),
        paddingHorizontal: wp(4),
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingTop: hp(4)
    },
    titleStyle: {
        fontSize: wp(5.85),
        fontFamily: Theme.fonts.FONT_NUNITO_EXTRABOLD,
        color: "#fff"
    }
})
export {
    Header
}