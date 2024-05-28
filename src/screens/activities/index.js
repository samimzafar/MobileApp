import { StyleSheet, Text, View, } from 'react-native'
import React, { useState } from 'react'
import { Header } from '../../components/Header'
import { Constants, routes } from '../../utils/AppConst'
import { TabView, TabBar } from 'react-native-tab-view';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import ProductFlatList from '../../components/ProductListing';
import CartFlatList from '../../components/CartListing';
import RecipesFlatList from '../../components/RecipesListing';
import PostsFlatList from '../../components/PostListing';
import UsersFlatList from '../../components/UsersListing';
import Theme from '../../theme';
const Activities = ({ navigation }) => {
    const [index, setIndex] = useState(0)
    const renderScene = (route) => {
        switch (route.id) {
            case 1:
                return <ProductFlatList id={1} />;
            case 2:
                return <CartFlatList id={2} />;
            case 3:
                return <RecipesFlatList id={3} />;
            case 4:
                return <PostsFlatList id={4} />;
            case 5:
                return <UsersFlatList id={5} />;
            default:
                return null;
        }
    };

    const renderTabBar = props => (
        <TabBar
            {...props}
            indicatorStyle={{ backgroundColor: '#fff' }}
            style={{
                backgroundColor: '#fff'
            }}
            renderLabel={({ route, focused, color }) => {
                return (
                    <View style={{ alignItems: 'center', }}>
                        <View style={styles.tabViewStyle(route, focused)}>
                            <Text style={styles.tabTitleStyle(focused)}>{route.title}</Text>
                        </View>
                        <View style={styles.tabDot(focused, route)} />
                    </View>
                )
            }}
        />)
    return (
        <View style={styles.safeAreaView}>
            <Header title={Constants.ACTIVITIES} pressBack={() => navigation.goBack()} />
            <TabView
                lazy
                navigationState={{ index, routes }}
                initialLayout={{ width: wp("100%") }}
                onIndexChange={setIndex}
                renderTabBar={renderTabBar}
                renderScene={({ route }) => (
                    <View style={styles.renderSceneView}>
                        {renderScene(route)}
                    </View>
                )}
            />
        </View>
    )
}

export default Activities

const styles = StyleSheet.create({
    safeAreaView: {
        flex: 1,
        backgroundColor: '#fff',
    },
    renderSceneView: {
        alignItems: "center",
        justifyContent: "center",
    },
    tabViewStyle: (route, focused) => {
        return {
            alignItems: 'center',
            justifyContent: 'center',
            marginVertical: hp(0.5),
            width: wp(17),
            height: wp(14),
            borderRadius: hp(1),
            shadowOffset: { width: 0, height: 0 },
            backgroundColor: focused ? "#fff" : Theme.colors.GREEN_RGBA,
            shadowColor: focused ? Theme.colors.GREEN_RGBA : '#fff',
            shadowOpacity: focused ? 0.8 : 0,
            elevation: focused ? 6 : 0,
            shadowRadius: focused ? 10 : 0,
        }
    },
    tabTitleStyle: (focused) => ({
        color: focused ? Theme.colors.GREEN_RGBA : '#fff',
        fontSize: wp(5),
        fontFamily: Theme.fonts.FONT_NUNITO_EXTRABOLD
    }),
    tabDot: (focused, route) => {
        return {
            height: wp(2),
            width: wp(2),
            borderRadius: 10,
            borderWidth: 4.5,
            borderColor: focused ? Theme.colors.GREEN_RGBA : '#fff'
        }
    },
})