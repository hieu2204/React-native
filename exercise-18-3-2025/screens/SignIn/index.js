import React, { useContext } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { AuthContext } from "../../context/AuthContext";
import CustomInput from "../../components/CustomTextinput";
import SocialButton from "../../components/IconButton";

const SignInScreen = () => {
    const { login } = useContext(AuthContext);

    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.title}>Sign In</Text>
            </View>
            {/* Ô nhập email */}
            <CustomInput 
                placeholder="Enter your email here!" 
                keyboardType="email-address" 
            />

            {/* Ô nhập mật khẩu */}
            <CustomInput 
                placeholder="Enter your password here!" 
                keyboardType="default" 
                secureTextEntry={true}
            />

            {/* Quên mật khẩu */}
            <Text style={styles.forgotpass}>Forgot Password?</Text>

            {/* Nút đăng nhập */}
            <Button title="Sign In" onPress={login} />

            {/* Đăng nhập với mạng xã hội */}
            <View style={styles.socialContainer}>
                <SocialButton
                    iconName="facebook"
                    backgroundColor="#1877F2"
                    text="Đăng nhập với Facebook"
                    onPress={() => console.log("Facebook login")}
                />

                <SocialButton
                    iconName="google"
                    backgroundColor="#DB4437"
                    text="Đăng nhập với Google"
                    onPress={() => console.log("Google login")}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        justifyContent: "center",
        backgroundColor: "#fff",
    },
    forgotpass: {
        alignSelf: "flex-end",
        marginVertical: 10,
        color: "#1877F2",
    },
    socialContainer: {
        flexDirection: "row",
        justifyContent: "center", // Căn giữa
        alignItems: "center", // Căn giữa theo chiều dọc
        marginTop: 20,
        gap: 10, // Tạo khoảng cách giữa hai nút
    },
    title: {
        fontWeight: "bold",
        textAlign: "center",
        fontSize: 24,
        marginBottom: 20,
        width: "100%"
    }
});

export default SignInScreen;
