import React, { FC, useEffect, useRef } from "react";
import { StyleSheet, View, Text } from "react-native";
import { ModelProps } from "./model";

const FuncComponent: FC<ModelProps> = (props) => {
    const isFirstAppear = useRef<boolean>(true)
    
    useEffect(() => {
        console.log('function component did mount')

        return () => {
            console.log('function component will unmount')
        }
    }, [])

    useEffect(() => {
        if (isFirstAppear.current) {
            isFirstAppear.current = false
        } else {
            console.log('function component did update')        
        }       
    })

    console.log('function component render')

    return (        
        <View style={styles.container}>
            <Text style={styles.title}>{`function Component ${props.flag}` }</Text>
        </View>        
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    title: {
        color: 'black',
        fontSize: 40,
        fontWeight: 'bold',        
    },
})

export default FuncComponent