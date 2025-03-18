import React from "react";
import { TextInput, StyleSheet, View } from "react-native";

const CustomInput = ({ placeholder, keyboardType }) => {
    return (
        <View style={styles.container}>
            <TextInput 
                style={styles.input}
                placeholder={placeholder}
                keyboardType={keyboardType}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginBottom: 10,
    },
    input: {
        fontSize: 16,
        fontWeight: "600", 
        fontFamily: "Roboto",
        borderColor: "black", 
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10, 
        height: 40,
    }
});

export default CustomInput;
