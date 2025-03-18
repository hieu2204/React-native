import React from "react";
import { TouchableOpacity, Text, StyleSheet, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome"; // Chọn FontAwesome hoặc thư viện bạn dùng

const SocialButton = ({ iconName, backgroundColor, text, onPress }) => {
    return (
        <TouchableOpacity 
            style={[styles.button, { backgroundColor }]}
            onPress={onPress}
        >
            <View style={styles.iconContainer}>
                <Icon name={iconName} size={20} color="white" />
            </View>
            <Text style={styles.text}>{text}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 10,
        borderRadius: 5,
        marginVertical: 5,
        justifyContent: "center",
    },
    iconContainer: {
        marginRight: 10,
    },
    text: {
        color: "white",
        fontSize: 14,
        fontWeight: "bold",
    }
});

export default SocialButton;
