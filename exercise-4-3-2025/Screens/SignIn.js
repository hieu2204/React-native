import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { useAuth } from "../context/AuthUser";

const SignInScreen = () => {
    const [phone, setPhone] = useState("");
    const { signIn } = useAuth();

    const handleSignIn = () => {
        if (phone.length >= 10) {
            signIn(phone); // Lưu số điện thoại vào context và điều hướng
        } else {
            alert("Vui lòng nhập số điện thoại hợp lệ!");
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Nhập số điện thoại</Text>
            <TextInput
                style={styles.input}
                placeholder="Số điện thoại"
                keyboardType="phone-pad"
                value={phone}
                onChangeText={setPhone}
            />
            <Button title="Đăng nhập" onPress={handleSignIn} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 20,
    },
    input: {
        width: "100%",
        height: 50,
        borderColor: "gray",
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        marginBottom: 20,
    },
});

export default SignInScreen;
