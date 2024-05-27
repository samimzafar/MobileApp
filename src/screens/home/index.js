import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { ScreenNames } from '../../navigation/screenUtils';
const Home = () => {
    const navigation = useNavigation()
    return (
        <View>
            <Text>Home Screen</Text>
            <Button title='Go To Library' onPress={() => navigation.navigate(ScreenNames.LIBRARY)} />
        </View>
    )
}

export default Home

const styles = StyleSheet.create({})