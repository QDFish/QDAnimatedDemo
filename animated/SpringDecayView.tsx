import React, { useEffect, useRef } from "react";
import { Animated, Easing, StyleSheet, Text, TouchableWithoutFeedback, View } from "react-native";


interface AnimateFuncProps {
    name: string,
    func: () => void
}

const SpringDecayView: React.FC = () => {    
    console.log('render')
    const yAnim = useRef(new Animated.Value(0)).current  

    const datas: AnimateFuncProps[] = [
        {
            name: 'reset',
            func: () => {
                Animated.timing(yAnim, {
                    toValue: 0,
                    duration: 2000,
                    easing: Easing.step0,
                    useNativeDriver: false
                }).start()
            }
        },
        {
            name: 'spring',
            func: () => {
                Animated.spring(yAnim, {
                    toValue: 300,
                    useNativeDriver: false
                }).start()
            }
        },
        {
            name: 'decay',
            func: () => {
                Animated.decay(yAnim, {
                    velocity: 0.4,
                    deceleration: 0.997,
                    useNativeDriver: false
                }).start()
            }
        },

    ]

    return (
        <View style={styles.container}>
            <View style={styles.selector}>
                {
                    datas.map((data, index) => {
                        let backgroundColor = 'green'
                        if (data.name == 'reset') {
                            backgroundColor = 'orange'
                        }
                        return (
                            <TouchableWithoutFeedback onPress={() => {
                                data.func()
                            }}>
                                <View style={[styles.button, {backgroundColor}]} key={index}>
                                    <Text style={styles.buttonText}>{data.name}</Text>
                                </View>
                            </TouchableWithoutFeedback>
                        )
                    })
                }
            </View>            
            <View style={styles.showZone}>
                <Animated.View style={[styles.block, {top: yAnim}]}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    selector: {
        flexDirection: 'row',
        flexWrap: 'wrap',        
        marginBottom: 10,
        backgroundColor: 'white'
    },

    showZone: {
      flex: 1,
    //   flexDirection: 'row'
    },

    button: {
        width: 100,
        borderRadius: 5,
        margin: 5,
        height: 30,
        backgroundColor: 'green',
        alignItems: 'center',
        justifyContent: 'center'
    },

    buttonText: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'normal',        
    },

    block: {
        alignSelf: 'center',
        width: 100,
        height: 100,
        borderRadius: 10,
        backgroundColor: 'green'
    }
})

export default SpringDecayView