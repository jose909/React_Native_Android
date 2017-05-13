import React, {Component} from 'react';
import{
    Text,
    View, 
    StyleSheet
} from 'react-native';

export default class ComponentTexto extends Component{
    render(){
        return(
            <View>
                <Text style={styles.texto}>
                    Hola eso es un Componente externo
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    texto : {
        color: 'white'
    }
})
