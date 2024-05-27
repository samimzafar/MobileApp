import { Dimensions, Platform, StatusBar } from "react-native"
import { widthPercentageToDP as wp } from "react-native-responsive-screen"

export const SizeClass = (function Size() {
    const SCREEN_WIDTH = Dimensions.get('window').width
    const SCREEN_HEIGHT = Dimensions.get('screen').height
    const WINDOW_HEIGHT = Dimensions.get('window').height
    const statusBarheight = StatusBar.currentHeight || 24
    const NAVBAR_HEIGHT =
        Platform.OS === 'android' ? WINDOW_HEIGHT * 0.09 : WINDOW_HEIGHT * 0.12

    const DEFAULT_MARGIN = SCREEN_WIDTH * 0.04
    const SMALL_MARGIN = SCREEN_WIDTH * 0.02
    const LARGE_MARGIN = SCREEN_WIDTH * 0.06

    const getScreenWidthFromPercentage = (percentageValue) => {
        return (percentageValue / 100) * SCREEN_WIDTH
    }
    const getScreenHeightFromPercentage = (percentageValue) => {
        return (percentageValue / 100) * SCREEN_HEIGHT
    }
    const scaleFont = (size) => wp(size)
    return {
        SCREEN_HEIGHT,
        SCREEN_WIDTH,
        WINDOW_HEIGHT,
        NAVBAR_HEIGHT,
        DEFAULT_MARGIN,
        SMALL_MARGIN,
        LARGE_MARGIN,
        getScreenWidthFromPercentage,
        getScreenHeightFromPercentage,
        scaleFont,
    }
})()