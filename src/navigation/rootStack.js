import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTabStackNavigator from './bottomTab';
import { ScreenNames, ScreenStack } from './screenUtils';
import Activities from '../screens/activities';
const RootStack = createNativeStackNavigator();
function RootStackNavigation() {
    return (
        <RootStack.Navigator>
            <RootStack.Screen
                options={{
                    headerShown: false
                }}
                name={ScreenStack.BOTTOM_TAB_STACK}
                component={BottomTabStackNavigator}
            />
            <RootStack.Screen
                options={{
                    headerShown: false
                }}
                name={ScreenNames.ACTIVITIES}
                component={Activities}
            />
        </RootStack.Navigator>
    );
}
export default RootStackNavigation