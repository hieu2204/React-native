import React from "react";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { View, Text, TextInput, StyleSheet } from "react-native";

const InputField = ({ label, placeholder, icon1, icon2, style }) => {
    return (
        <View style={[styles.container, style]}> 
            <Text style={styles.label}>{label}</Text>
            <View style={styles.inputContainer}>
                <TextInput 
                    placeholder={placeholder} 
                    style={styles.input}  
                />
                {icon1 && <FontAwesome name={icon1} size={20} style={styles.icon} />}
                {icon2 && <FontAwesome name={icon2} size={20} style={styles.icon} />}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: "100%",  
        marginBottom: 15,
    },
    label: {
        fontSize: 14,
        fontWeight: "bold",
        marginBottom: 5,
    },
    inputContainer: {
        flexDirection: "row",
        alignItems: "center",
        borderWidth: 1,
        borderRadius: 16,
        paddingHorizontal: 15,
        height: 50,
        backgroundColor: "#fff",
    },
    input: {
        flex: 1,
        fontSize: 16,
    },
    icon: {
        marginLeft: 10,
    }
});

export default InputField;