/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { ReactElement } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  FlatList,
  TouchableWithoutFeedback,
  View,
  Text
} from 'react-native';

import FadeInView from './animated/FadeInView';

function App(): React.JSX.Element {

  return (
    <SafeAreaView>
        <Text style={styles.title}>Aniamted</Text>

        <FlatList
        style={styles.list}
        data={[
            {
                type : 'Fade In',
                page : <FadeInView/>
            }
        ]}
        renderItem={({item}) => {
            
            return (
                <TouchableWithoutFeedback>
                    <View style={styles.row}>
                        <Text style={styles.text}>{item.type}</Text>
                        <View style={styles.line}></View>
                    </View>                    
                </TouchableWithoutFeedback>
            )
        }}
        >

        </FlatList>
    </SafeAreaView>
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
