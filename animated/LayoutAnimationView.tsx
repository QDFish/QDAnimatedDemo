import React, { useState } from "react";
import { LayoutAnimation, StyleSheet, Text, TouchableWithoutFeedback, View, NativeModules } from "react-native";

const {UIManager} = NativeModules
UIManager.setLayoutAnimationEnabledExperimental &&
  UIManager.setLayoutAnimationEnabledExperimental(true);



interface AnimateFuncProps {
    name: string,
    func: () => void
}

const LayoutAnimationView: React.FC = () => {
    const [height, setHeight] = useState<number|'auto'>(30)

    const datas: AnimateFuncProps[] = [
        {
            name: 'reset',
            func: () => {
                LayoutAnimation.easeInEaseOut();
                setHeight(30)
            }
        },
        {
            name: 'start',
            func: () => {
                LayoutAnimation.easeInEaseOut();
                setHeight('auto')
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
                            backgroundColor = 'orange'
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
                <View style={[styles.bubble, {height}]}>
                    <Text style={styles.buttonText}>{
                        "dfsdf\ndfsd\ndfsdf\ndfsdfdfsdf\ndfsdfdfsdf\ndfsdfdfsdf\ndfsdfdfsdf\ndfsdf"
                    }</Text>
                </View>
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

    bubble: {
        width: 300,        
        alignItems: 'center',
        alignSelf: 'center',
        backgroundColor: 'green'
    },
    bubbleText: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'normal',
        lineHeight: 20
    },
})

export default LayoutAnimationView