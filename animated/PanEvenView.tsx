import React, { useRef } from "react";
import { Animated, PanResponder, StyleSheet, Text, TouchableWithoutFeedback, View } from "react-native";


interface AnimateFuncProps {
    name: string,
    func: () => void
}

const PanEvenView: React.FC = () => {    
    const pan = useRef(new Animated.ValueXY()).current
    const panResponder = useRef(
        PanResponder.create({
            onMoveShouldSetPanResponder: () => true,
            onPanResponderMove: Animated.event([null, {dx: pan.x, dy: pan.y}]),
            onPanResponderRelease: () => {
                Animated.spring(pan, {
                    toValue: {x: 0, y: 0},
                    useNativeDriver: true
                }).start()
            }            
        })
    ).current

    const datas: AnimateFuncProps[] = [
        {
            name: 'reset',
            func: () => {
              
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
            <View style={styles.showZone}>
                <Animated.View style={[styles.block, {transform: [
                    {
                        translateX: pan.x                        
                    },
                    {
                        translateY: pan.y
                    }
                ]}]}
                {...panResponder.panHandlers}
                />
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

export default PanEvenView