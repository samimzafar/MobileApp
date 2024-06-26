import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ScreenNames, ScreenStack } from '../screenUtils';
import Home from '../../screens/home';
import Library from '../../screens/library';
import Dashboard from '../../screens/dashboard';
import { Platform, StyleSheet, Text, View } from 'react-native';
import Theme from '../../theme';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import React from 'react';
import { Constants } from '../../utils/AppConst';
import { SizeClass } from '../../utils/SizeClass';
import Experiences from '../../screens/experiences';
import { ActivitiesTabIconSvg, DashboardTabIconSvg, HomeTabIconSvg, JourneyTabIconSvg } from '../../assets/svg';
const BottomTab = createBottomTabNavigator();
function BottomTabStackNavigator() {
    const tabsList = [
        {
            id: 0,
            name: ScreenNames.HOME,
            component: Home,
            title: Constants.HOME,
            icon: (bgColor) => <HomeTabIconSvg bgColor={bgColor} />
        },
        {
            id: 1,
            name: ScreenNames.JOURNEYS,
            component: Library,
            title: Constants.JOURNEYS,
            icon: (bgColor) => <JourneyTabIconSvg bgColor={bgColor} />
        },
        {
            id: 2,
            name: ScreenNames.EXPERIENCES,
            component: Experiences,
            title: Constants.EXPERIENCES,
            icon: (bgColor) => <ActivitiesTabIconSvg bgColor={bgColor} />
        },
        {
            id: 3,
            name: ScreenNames.DASHBOARD,
            component: Dashboard,
            title: Constants.DASHBOARD,
            icon: (bgColor) => <DashboardTabIconSvg bgColor={bgColor} />
        },
    ]
    return (
        <BottomTab.Navigator
            name={ScreenStack.BOTTOM_TAB_STACK}
            screenOptions={{
                tabBarStyle: styles.tabBarStyle,
            }}
        >
            {tabsList.map((tab, index) => {
                return (
                    <BottomTab.Screen name={tab.name} component={tab.component}
                        options={{
                            tabBarIcon: ({ focused }) => (
                                <View style={styles.tabIconView}>
                                    {tab.icon(focused ? Theme.colors.SKY_BLUE_COLOR : Theme.colors.COLOR_TEXT)}
                                </View>
                            ),
                            tabBarLabel: ({ focused }) => (
                                <Text style={styles.tabTitleStyle(focused)}>{tab.title}</Text>
                            ),
                            headerShown: false,

                        }}
                        key={index}
                    />
                )
            })}
        </BottomTab.Navigator>
    );
}
export default BottomTabStackNavigator

const styles = StyleSheet.create({
    tabBarStyle: {
        flexDirection: "row",
        alignItems: Platform.OS == 'ios' ? "flex-end" : "center",
        justifyContent: "center",
        height: SizeClass.getScreenHeightFromPercentage(Platform.OS == 'ios' ? 11 : 9)
    },
    tabIconView: {
        marginBottom: hp(Platform.OS == 'ios' ? 1.85 : 1)
    },
    tabTitleStyle: (focused) => ({
        color: focused ? Theme.colors.SKY_BLUE_COLOR : Theme.colors.COLOR_TEXT,
        fontFamily: Theme.fonts.FONT_NUNITO_BOLD,
        fontSize: SizeClass.scaleFont(2.85),
        letterSpacing: wp(.10),
    })
})