import React, { useState } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { TextInput, Button, IconButton } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

const LoginScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState("imshuvo97@gmail.com");
  const [password, setPassword] = useState("");
  const [secureText, setSecureText] = useState(true);

  return (
    <View style={styles.container}>
      {/* Logo */}
      <Image source={require("../assets/carrot.png")} style={styles.logo} resizeMode="contain" />

      {/* Title */}
      <Text style={styles.title}>Loging</Text>
      <Text style={styles.subtitle}>Enter your emails and password</Text>

      {/* Email Input */}
      <Text style={styles.label}>Email</Text>
      <TextInput
        mode="outlined"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
      />

      {/* Password Input */}
      <Text style={styles.label}>Password</Text>
      <TextInput
        mode="outlined"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={secureText}
        style={styles.input}
        right={
          <TextInput.Icon
            icon={secureText ? "eye-off" : "eye"}
            onPress={() => setSecureText(!secureText)}
          />
        }
      />

      {/* Forgot Password */}
      <TouchableOpacity>
        <Text style={styles.forgotPassword}>Forgot Password?</Text>
      </TouchableOpacity>

      {/* Login Button */}
      <Button mode="contained" onPress={() => alert("Logged In!")} style={styles.loginButton}>
        Log In
      </Button>

      {/* Signup Link */}
      <Text style={styles.signupText}>
        Don't have an account?{" "}
        <TouchableOpacity onPress={() => alert("Go to Signup")}>
          <Text style={styles.signupLink}>Singup</Text>
        </TouchableOpacity>
      </Text>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#F9F9F9",
    alignItems: "center",
  },
  logo: {
    width: 50,
    height: 50,
    marginTop: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 20,
  },
  subtitle: {
    fontSize: 14,
    color: "gray",
    textAlign: "center",
    marginVertical: 10,
  },
  label: {
    alignSelf: "flex-start",
    fontSize: 14,
    fontWeight: "600",
    marginTop: 15,
  },
  input: {
    width: "100%",
    backgroundColor: "#fff",
    marginVertical: 5,
  },
  forgotPassword: {
    alignSelf: "flex-end",
    color: "gray",
    marginTop: 5,
  },
  loginButton: {
    width: "100%",
    marginTop: 20,
    backgroundColor: "#4CAF50",
  },
  signupText: {
    marginTop: 10,
    fontSize: 14,
  },
  signupLink: {
    color: "#4CAF50",
    fontWeight: "bold",
  },
});
