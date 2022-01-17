import React from 'react';
import {
    View,
    StyleSheet,
    TouchableOpacity,
    Text
} from 'react-native';

const styles = StyleSheet.create({
    badge: {
        backgroundColor: 'white',
        padding: 15,
        borderRadius: 15,
        textAlign: 'center',
        margin: 5,
        shadowColor: "#000000",
        shadowOpacity: 0.2,
        shadowRadius: 2,
        shadowOffset: {
            height: 3,
            width: 1
        }
    }
})

const Badge: React.FC<{ onPress: () => void }> = ({ children, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.badge}>
                <Text style={{ fontSize: 12, textAlign: 'center', color: '#000', fontWeight: 'bold' }}>
                    {children}
                </Text>
            </View>
        </TouchableOpacity>

    );
}

export default Badge;