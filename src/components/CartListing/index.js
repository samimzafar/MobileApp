import { ActivityIndicator, FlatList, StyleSheet, Text, View } from "react-native"
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen"
import Theme from "../../theme"
import SkeletonPlaceholder from "react-native-skeleton-placeholder"
import FastImage from "react-native-fast-image"
import NoNetInfo from "../NoNetInfo"
import { LoadingState } from "../../utils/AppConst"
import EmptyTrackTextMessgeRenderer from "../EmptyMessage"
import useActivities from "../../screens/activities/useActivities"
const CartFlatList = ({ id }) => {
    const { data, skip, isLoading, setIsLoading, getDataListing, netInfo } = useActivities({ index: id })
    const list = [1, 2, 3]
    const _renderItem = ({ item, index }) => {
        const cartProduct = item?.products?.[0]
        return (
            <View key={index} style={styles.renderItemView}>
                <Text style={styles.textStyle}>{cartProduct?.title}</Text>
                <Text style={styles.textStyle}>{cartProduct?.price}</Text>
                <Text style={styles.textStyle}>{cartProduct?.quantity}</Text>
                <Text style={styles.textStyle}>{cartProduct?.discountPercentage}</Text>
                <Text style={styles.textStyle}>{cartProduct?.discountedTotal}</Text>
                <FastImage source={{ uri: cartProduct?.thumbnail }}
                    style={styles.fastImageStyle}
                />
            </View>
        )
    }
    return (
        <View>
            {isLoading == LoadingState.INITIAL ? (
                <SkeletonPlaceholder>
                    <View style={{ marginTop: hp(10) }}>
                        {list.map((item, index) => (
                            <SkeletonPlaceholder.Item
                                width={wp(80)}
                                height={hp(30)}
                                borderRadius={wp(6)}
                                marginBottom={hp(2)}
                                marginTop={hp(2)}
                                key={index} />
                        ))}
                    </View>
                </SkeletonPlaceholder>
            ) : <FlatList data={data}
                keyExtractor={(item, index) => index.toString()}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.flatListContentContainer}
                renderItem={_renderItem}
                initialNumToRender={10}
                maxToRenderPerBatch={10}
                onEndReachedThreshold={0.5}
                ListEmptyComponent={() => {
                    if (!netInfo?.isInternetReachable && isLoading !== LoadingState.INITIAL) {
                        return <NoNetInfo />

                    } else if ((!isLoading && data?.length == 0)) {
                        return <EmptyTrackTextMessgeRenderer />
                    }
                }}
                onEndReached={() => {
                    console.log("🚀 ~ onEndReached ~ isLoading:", isLoading)
                    if (netInfo?.isInternetReachable) {
                        setIsLoading(LoadingState.FETCH)
                        getDataListing({ skip: skip + 10 })
                    }
                }}
                ListFooterComponent={() => {
                    console.log("🚀 ~ ListFooterComponent ~ isLoading:", isLoading)
                    return isLoading == LoadingState.FETCH && (
                        <View>
                            <ActivityIndicator />
                        </View>
                    )
                }}
            />
            }
        </View>
    )
}
const styles = StyleSheet.create({
    textStyle: {
        color: "#fff",
        fontSize: wp(4.3),
        fontFamily: Theme.fonts.FONT_NUNITO_BOLD
    },
    renderItemView: {
        height: hp(40),
        width: wp(80),
        backgroundColor: Theme.colors.GREEN_RGBA,
        marginVertical: hp(2),
        alignItems: "center",
        justifyContent: "center",
        borderRadius: wp(5)
    },
    fastImageStyle: {
        height: wp(50),
        width: wp(50),
        resizeMode: "contain"
    },
    flatListContentContainer: {
        paddingBottom: hp(7)
    }
})
export default CartFlatList
