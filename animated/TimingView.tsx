import React, { useEffect, useRef, useState } from "react";
import { Animated, Easing, StyleSheet, Text, TouchableWithoutFeedback, View } from "react-native";
import { EasingFunction } from "react-native";

const TimingView: React.FC = () => {    
    const yAnim = useRef(new Animated.Value(0)).current
    const [toValue, setToValue] = useState(0)
    const [easing, setEasing] = useState<EasingFunction>(() => { return Easing.step0 })
    console.log('render')
    useEffect(() => {
        console.log('star animation ' + easing)
        Animated.timing(yAnim, {
            toValue: toValue,
            duration: 2000,
            easing: easing,
            useNativeDriver: false
        }).start()
    }, [easing, toValue])


    const datas: {name: string, func: EasingFunction}[] = [
        {
            name: 'reset',
            func: Easing.step0,
        },
        {
            name: 'ease',
            func: Easing.ease
        },
        {
            name: 'back',
            func: Easing.back(2)
        },
        {
            name: 'elastic',
            func: Easing.elastic(2)
        },
        {
            name: 'circle',
            func: Easing.circle
        },
        {
            name: 'quad',
            func: Easing.quad
        },
        {
            name: 'cubic',
            func: Easing.cubic
        },
        {
            name: 'poly',
            func: Easing.poly(1)
        },
        {
            name: 'sin',
            func: Easing.sin
        },
        {
            name: 'exp',
            func: Easing.exp
        },
        {
            name: 'bounce',
            func: Easing.bounce
        },
        {
            name: 'in',
            func: Easing.in(Easing.ease)
        },
        {
            name: 'out',
            func: Easing.out(Easing.ease)
        },
        {
            name: 'inout',
            func: Easing.inOut(Easing.ease)
        }
    ]
 
    const changeEasing = (data: {name: string, func: EasingFunction}) => {
        console.log('dddd')
        if (data.name == 'reset') {
            setEasing( () => { return Easing.step0 } )
            setToValue(0)
        } else {
            setEasing( _ => data.func )
            // setEasing(data.func)
            setToValue(300)
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.selector}>
                {
                    datas.map((data) => {
                        return (
                            <TouchableWithoutFeedback onPress={() => {
                                changeEasing(data)
                            }}>
                                <View style={styles.button}>
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

export default TimingView