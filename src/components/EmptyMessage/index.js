import { StyleSheet, View } from "react-native"
import { heightPercentageToDP as hp } from "react-native-responsive-screen"
import { Text } from "react-native-svg"
import Theme from "../../theme"

const EmptyTrackTextMessgeRenderer = () => {
    return (
        <View style={styles.emptyTrackMessageContainer}>
            <Text style={styles.emptyTrackMessageText}>No Record found</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    emptyTrackMessageContainer: (renderedFrom) => ({
        height: hp(60),
        justifyContent: 'center',
    }),
    emptyTrackMessageText: {
        paddingTop: hp('15%'),
        alignSelf: 'center',
        color: Theme?.colors?.COLOR_TEXT,
        fontFamily: Theme?.fonts?.FONT_NUNITO_BOLD,
        textAlign: 'center'
    },
})

export default EmptyTrackTextMessgeRenderer