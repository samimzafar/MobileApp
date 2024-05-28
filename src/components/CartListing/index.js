import { useEffect, useState } from "react"
import { FlatList, StyleSheet, Text, View } from "react-native"
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen"
import Theme from "../../theme"
import SkeletonPlaceholder from "react-native-skeleton-placeholder"
import FastImage from "react-native-fast-image"
const CartFlatList = () => {
    const list = [1, 2, 3]
    const [cartData, setCartData] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        async function renderFunction() {
            fetch('https://dummyjson.com/carts?limit=10&skip=0')
                .then(res => res.json())
                .then(({ carts }) => {
                    setCartData(carts)
                    setIsLoading(false)
                });
        }
        renderFunction()
    }, [])
    const _renderItem = ({ item }) => {
        const cartProduct = item?.products[0]
        return (
            <View key={item?.id} style={styles.renderItemView}>
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
            {isLoading ? <SkeletonPlaceholder borderRadius={4}>
                {list.map((item, index) =>
                (
                    <SkeletonPlaceholder.Item width={wp(80)}
                        height={hp(30)} borderRadius={5}
                        marginBottom={hp(2)} marginTop={hp(2)}
                        key={index} />
                )
                )}
            </SkeletonPlaceholder> : <FlatList data={cartData}
                showsVerticalScrollIndicator={false}
                renderItem={_renderItem} />
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
    }
})
export default CartFlatList
