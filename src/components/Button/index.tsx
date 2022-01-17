import React from 'react';
import {
    Text,
    TouchableOpacity,
    View,
    StyleSheet
} from 'react-native';

const styles = StyleSheet.create({
    button: {
        paddingVertical: 18,
        borderRadius: 30,
        width: '100%',
        shadowColor: "#000000",
        shadowOpacity: 0.2,
        shadowRadius: 2,
        shadowOffset: {
            height: 3,
            width: 1
        }
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 18,
    },
})

const Button: React.FC<{
    color: string,
    backgroundColor: string,
    onPress: () => void;
}> = ({ children, backgroundColor, color, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={{ ...styles.button, backgroundColor }}>
                <Text style={{ ...styles.buttonText, color }}>{children}</Text>
            </View>
        </TouchableOpacity>
    );
}


export default Button;