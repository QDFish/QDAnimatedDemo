import React, { useEffect, useRef, useState } from "react";
import { Animated, Easing, StyleSheet, Text, TouchableWithoutFeedback, View } from "react-native";
import { EasingFunction } from "react-native";


interface AnimateFuncProps {
    name: string,
    func: () => void
}

const InterpolationView: React.FC = () => {
    const yAnim = useRef(new Animated.Value(0)).current
    const [toValue, setToValue] = useState(0)


    const resetAction = () => {
        Animated.timing(yAnim, {
            toValue: 0,
            duration: 2000,
            easing: Easing.step0,
            useNativeDriver: false
        }).start()
    }

    const datas: AnimateFuncProps[] = [
        {
            name: 'reset',
            func: () => {
                Animated.timing(yAnim, {
                    toValue: toValue,
                    duration: 2000,
                    easing: Easing.step0,
                    useNativeDriver: false
                }).start()
            }
        },
        {
            name: 'start',
            func: () => {
                Animated.spring(yAnim, {
                    toValue: 400,
                    useNativeDriver: false
                }).start()
            }
        }

    ]

    return (
        <View style={styles.container}>
            <View style={styles.selector}>
                {
                    datas.map((data) => {
                        let backgroundColor = 'green'
                        if (data.name == 'reset') {
                            backgroundColor = 'orange'
                        }
                        return (
                            <TouchableWithoutFeedback onPress={() => {
                                data.func()
                            }}>
                                <View style={[styles.button, { backgroundColor }]}>
                                    <Text style={styles.buttonText}>{data.name}</Text>
                                </View>
                            </TouchableWithoutFeedback>
                        )
                    })
                }
            </View>
            <View style={styles.showZone}>
                <Animated.View style={[styles.block,
                {
                    opacity: yAnim.interpolate({
                        inputRange: [0, 400],
                        outputRange: [1, 0.5]
                    })
                },
                {
                    transform: [
                        {
                            translateY: yAnim
                        }
                    ]
                }]} />
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

export default InterpolationView