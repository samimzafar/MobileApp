import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
const Library = ({ navigation }) => {
    return (
        <View>
            <Text>Library Screen</Text>
            <Button title='Back to Home' onPress={() => navigation.goBack()} />
        </View>
    )
}

export default Library

const styles = StyleSheet.create({})