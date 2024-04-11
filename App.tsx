/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
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

import TimingView from './animated/TimingView';
import SpringDecayView from './animated/SpringDecayView';
import CompositeView from './animated/CompositeView';
import InterpolationView from './animated/InterpolationView';
import ScrollEvenView from './animated/ScrollEvenView';
import PanEvenView from './animated/PanEvenView';
import LayoutAnimationView from './animated/LayoutAnimationView';

const Stack = createNativeStackNavigator()

const datas = [
    {
        type: 'Timing',
        page: 'timing',
        compo: TimingView
    },
    {
        type: 'Spring & Decay',
        page: 'spring_decay',
        compo: SpringDecayView
    },
    {
        type: 'Composite',
        page: 'composite',
        compo: CompositeView
    },
    {
        type: 'Interpolation',
        page: 'interpolation',
        compo: InterpolationView
    },
    {
        type: 'Scroll Event',
        page: 'scroll_event',
        compo: ScrollEvenView
    },
    {
        type: 'Pan Event',
        page: 'pan_event',
        compo: PanEvenView
    },
    {
        type: 'Layout Animation',
        page: 'layout_animation',
        compo: LayoutAnimationView
    }
]

const HomeScreen = ({ navigation }) => {
    return (

        <FlatList
            style={styles.list}
            data={datas}
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
                {datas.map((item) => {
                    return (
                <Stack.Screen
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
