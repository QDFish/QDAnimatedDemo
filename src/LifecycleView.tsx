import React, { useState } from "react";
import BaseView from "./BaseView";
import { FuncProps } from "./BaseView";
import { StyleSheet, View } from "react-native";
import ClassComponent from "./ClassComponent";
import FuncComponent from "./FuncComponent";

const LifecycleView = () => {
    
    const [flag, setFlag] = useState<boolean>(true)
    const [reRender, setReRender] = useState<boolean>(true)
    const [isFunc, setIsFunc] = useState<boolean>(true)
    
    const datas: FuncProps[] = [
        {
            name: 'switch',
            func: () => {
                setIsFunc(f => !f)
            }               
        },
        {
            name: 'child-props',
            func: () => {
                setFlag(f => !f)
            }               
        },
        {
            name: 're-render',
            func: () => {
                setReRender(r => !r)
            }               
        }
    ]

    console.log('father render')

    return (
        <BaseView datas={datas}>
            {isFunc ? <FuncComponent flag={flag}/> : <ClassComponent flag={flag}/>}            
        </BaseView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'green'
    }
})

export default LifecycleView