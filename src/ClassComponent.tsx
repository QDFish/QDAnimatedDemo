import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { ModelProps } from "./model";


class ClassComponent extends React.Component<ModelProps> {

    componentDidMount(): void {
        console.log('class component did mount')
    }

    componentWillUnmount(): void {
        console.log('class component will unmount')
    }

    componentDidUpdate(prevProps: Readonly<ModelProps>, prevState: Readonly<{}>, snapshot?: any): void {
        console.log('class component did update')
    }

    shouldComponentUpdate(nextProps: Readonly<ModelProps>, nextState: Readonly<{}>, nextContext: any): boolean {
        // console.log('class component should update')
        // if (nextProps.flag == this.props.flag) {
        //     return false
        // }
        return true
    }
  
    render(): React.ReactNode {
        console.log('class component render')
        return (
            <View style={styles.container}>
                <Text style={styles.title}>{`Class Component ${this.props.flag}` }</Text>
            </View>
        )
    }
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

export default ClassComponent