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

const Panel: React.FC<{}> = ({ children }) => {
    return (
        <View style={{ paddingLeft: 30, paddingRight: 40, paddingTop: 50, backgroundColor: '#3b6c81', marginBottom: -31, flex: 1, flexDirection: 'column', borderTopLeftRadius: 30, borderTopRightRadius: 30 }}>
            {children}
        </View>
    );
}

export default Panel;