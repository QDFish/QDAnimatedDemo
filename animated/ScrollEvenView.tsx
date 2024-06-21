import React, { useRef } from "react";
import { Animated, Easing, ScrollView, StyleSheet, Text, TouchableWithoutFeedback, View } from "react-native";


interface AnimateFuncProps {
    name: string,
    func: () => void
}

const ScrollEvenView: React.FC = () => {    
    const yAnim = useRef(new Animated.Value(0)).current 
    const scrollX = useRef(new Animated.Value(0)).current

    const datas: AnimateFuncProps[] = [
        {
            name: 'reset',
            func: () => {
                // Animated.timing(yAnim, {
                //     toValue: toValue,
                //     duration: 2000,
                //     easing: Easing.step0,
                //     useNativeDriver: false
                // }).start()
            }
        },      
    ]

    return (
        <View style={styles.container}>
            <View style={styles.selector}>
                {
                    datas.map((data) => {
                        let backgroundColor = 'green'
                        if (data.name == 'reset') {
                            backgroundColor = 'gray'
                        }
                        return (
                            <TouchableWithoutFeedback onPress={() => {
                                data.func()
                            }}>
                                <View style={[styles.button, {backgroundColor}]}>
                                    <Text style={styles.buttonText}>{data.name}</Text>
                                </View>
                            </TouchableWithoutFeedback>
                        )
                    })
                }
            </View>   
            <View style={{height: 100}}>
                <ScrollView                
                horizontal={true}
                onScroll={
                    Animated.event([
                        {
                            nativeEvent: {
                                contentOffset: {
                                    x: scrollX
                                }
                            }
                        },
                        
                    ],
                    )
                }
                scrollEventThrottle={1}
                >
                    <View style={styles.subView}></View>
                </ScrollView>
            </View>
            <View style={styles.showZone}>
                <Animated.View style={[styles.block, {transform: [{translateY: 30}, {rotateX: '-30deg'}]}]}/>
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
    },

    subView: {
        width: 1000,
        height: 100,
        backgroundColor: 'yellow' 
    }
})

export default ScrollEvenView