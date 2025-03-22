import React from "react";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const CustomButton = ({ title, color = "#3498db", icon, textColor = "#fff", onPress }) => {
    return (
        <TouchableOpacity style={[styles.button, { backgroundColor: color }]} onPress={onPress}>
            {icon && <FontAwesome name={icon} size={20} color={textColor} style={styles.icon} />}
            <Text style={[styles.text, { color: textColor }]}>{title}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        flexDirection: "row",
        alignItems: "center",
        borderRadius: 8,
        padding: 12,
        justifyContent: "center",
        marginVertical: 5,
        height: 69,
        width: 170,
    },
    icon: {
        marginRight: 8,
    },
    text: {
        fontSize: 16,
        fontWeight: "bold",
    },
});
export default CustomButton;