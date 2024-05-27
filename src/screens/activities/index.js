import { Dimensions, StyleSheet, Text, View, } from 'react-native'
import React, { useState } from 'react'
import { Header } from '../../components/Header'
import { Constants } from '../../utils/AppConst'
import { TabView, TabBar } from 'react-native-tab-view';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { ProductFlatList } from '../../components/DataListing';

const routes = [
    { key: 'first', title: 'First' },
    { key: 'second', title: 'Second' },
];
const renderScene = ({ route }) => {
    switch (route.key) {
        case 'first':
            return <ProductFlatList />;
        // case 'second':
        //     return <SecondRoute />;
        default:
            return null;
    }
};

const renderTabBar = props => (
    <TabBar
        {...props}
        indicatorStyle={{ backgroundColor: 'white' }}
        style={{ backgroundColor: 'pink' }}
    />)
const Activities = () => {
    const [index, setIndex] = useState(0)
    return (
        <View style={styles.safeAreaView}>
            <Header title={Constants.ACTIVITIES} />
            <TabView
                lazy
                renderTabBar={renderTabBar}
                renderScene={renderScene}
                swipeEnabled={false}
                tabBarPosition='bottom'
                navigationState={{ index, routes }}
                initialLayout={{ width: wp("100%") }}
                onIndexChange={setIndex}
                style={{
                    marginLeft: wp(10)
                }}

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
})