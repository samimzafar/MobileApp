import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import RootStackNavigation from './rootStack';
export default function Navigator() {
    return (
        <NavigationContainer>
            <RootStackNavigation />
        </NavigationContainer>
    );
}