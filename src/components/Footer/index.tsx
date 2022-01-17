import React from 'react';
import {
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

const Footer: React.FC<{ backgroundColor: string }> = ({ children, backgroundColor }) => {
    return (
        <View style={{ backgroundColor, paddingLeft: 30, paddingRight: 30, paddingBottom: 50, paddingTop: 20, borderTopLeftRadius: 30, borderTopRightRadius: 30 }}>
            {children}
        </View>
    );
}

export default Footer;