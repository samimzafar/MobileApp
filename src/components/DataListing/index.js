import { useEffect, useState } from "react"
import { ActivityIndicator, FlatList, Image, StyleSheet, Text, View } from "react-native"
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen"
import Theme from "../../theme"
import SkeletonPlaceholder from "react-native-skeleton-placeholder"
import FastImage from "react-native-fast-image"
const ProductFlatList = () => {
    const list = [1, 2, 3]
    const [productData, setProductData] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        async function renderFunction() {
            fetch('https://dummyjson.com/products?limit=10&skip=10&select=title,price,thumbnail,category,brand,shippingInformation')
                .then(res => res.json())
                .then(({ products }) => {
                    setProductData(products)
                    setIsLoading(false)
                });
        }
        renderFunction()
    }, [])
    return (
        <View>
            {isLoading ? <SkeletonPlaceholder borderRadius={4}>
                {list.map((item, index) =>
                (
                    <SkeletonPlaceholder.Item width={wp(80)} height={hp(30)} borderRadius={5} marginBottom={hp(2)} marginTop={hp(2)} key={index} />
                )
                )}
            </SkeletonPlaceholder> : <FlatList data={productData}
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) => {
                    return (
                        <View key={item?.id} style={{
                            height: hp(40),
                            width: wp(80),
                            backgroundColor: "rgba(50, 191, 110, 1)",
                            marginVertical: hp(2),
                            alignItems: "center",
                            justifyContent: "center",
                            borderRadius: wp(5)
                        }}>
                            <Text style={styles.textStyle}>{item?.title}</Text>
                            <Text style={styles.textStyle}>{item?.price}</Text>
                            <Text style={styles.textStyle}>{item?.category}</Text>
                            <Text style={styles.textStyle}>{item?.brand}</Text>
                            <Text style={styles.textStyle}>{item?.shippingInformation}</Text>
                            <FastImage source={{ uri: item?.thumbnail }}
                                style={{ height: wp(50), width: wp(50) }}
                                resizeMode="contain" />
                        </View>
                    )
                }} />
            }
        </View>
    )
}
const styles = StyleSheet.create({
    textStyle: {
        color: "#fff",
        fontSize: wp(4.3),
        fontFamily: Theme.fonts.FONT_NUNITO_BOLD
    }
})
export {
    ProductFlatList
}