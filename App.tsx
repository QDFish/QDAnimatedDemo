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

import LifecycleView from './src/LifecycleView';

const Stack = createNativeStackNavigator()

const datas = [
    {
        type: 'Lifecycle',
        page: 'lifecycle',
        compo: LifecycleView
    }
]

const HomeScreen = ({ navigation }) => {
    return (

        <FlatList
            // keyExtractor={item => item.type}
            style={styles.list}
            data={datas}
            renderItem={({ item }) => {

                return (
                    <TouchableWithoutFeedback onPress={() => {
                        navigation.navigate(item.page)
                    }}>
                        <View style={styles.row} key={item.type}>
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
                key={'home'}
                name='home' 
                component={HomeScreen}
                options={{title: 'Home'}}
                />
                {datas.map((item) => {
                    return (
                <Stack.Screen
                key={item.page}
                name={item.page} 
                component={item.compo}
                options={{title: item.type}}
                />
                    )                    
                })}   
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