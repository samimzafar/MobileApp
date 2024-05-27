import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTabStackNavigator from './bottomTab';
import { ScreenStack } from './screenUtils';
const RootStack = createNativeStackNavigator();
function RootStackNavigation() {
    return (
        <RootStack.Navigator>
            <RootStack.Screen
                name={ScreenStack.BOTTOM_TAB_STACK}
                component={BottomTabStackNavigator}
            />
        </RootStack.Navigator>
    );
}
export default RootStackNavigation