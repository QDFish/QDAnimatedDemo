/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { ReactElement } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import {
    SafeAreaView,
    StyleSheet,
    FlatList,
    TouchableWithoutFeedback,
    View,
    Text
} from 'react-native';

import FadeInView from './animated/FadeInView';

const Stack = createNativeStackNavigator()


const HomeScreen = ({ navigation }) => {
    return (

        <FlatList
            style={styles.list}
            data={[
                {
                    type: 'Fade In',
                    page: 'fade_in'
                }
            ]}
            renderItem={({ item }) => {

                return (
                    <TouchableWithoutFeedback onPress={() => {
                        navigation.navigate(item.page)
                    }}>
                        <View style={styles.row}>
                            <Text style={styles.text}>{item.type}</Text>
                            <View style={styles.line}></View>
                        </View>
                    </TouchableWithoutFeedback>
                )
            }}
        >
        </FlatList>
    )
}

function App(): React.JSX.Element {

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Home'>
                <Stack.Screen 
                name='home' 
                component={HomeScreen}
                options={{title: 'Home'}}
                />
                <Stack.Screen
                name='fade_in' 
                component={FadeInView}
                options={{title: 'Fade In'}}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    list: {
        // backgroundColor: 'green',
    },
    title: {
        color: 'green',
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center'
    },

    row: {
        height: 70,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'green',
        margin: 10,
        borderRadius: 20
    },
    text: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold'
    },
    line: {
        backgroundColor: 'white',
        height: 1,
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0
    }
});

export default App;
