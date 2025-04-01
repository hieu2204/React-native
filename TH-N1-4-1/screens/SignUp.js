import React, { useState } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { TextInput, Button } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

const SignUpScreen = () => {
  const navigation = useNavigation();
  const [username, setUsername] = useState("Afsar Hossen Shuvo");
  const [email, setEmail] = useState("imshuvo97@gmail.com");
  const [password, setPassword] = useState("");
  const [secureText, setSecureText] = useState(true);
  const [emailValid, setEmailValid] = useState(true);

  const validateEmail = (text) => {
    setEmail(text);
    setEmailValid(text.includes("@"));
  };

  return (
    <View style={styles.container}>
      {/* Logo */}
      <Image source={require("../assets/carrot.png")} style={styles.logo} resizeMode="contain" />

      {/* Title */}
      <Text style={styles.title}>Sign Up</Text>
      <Text style={styles.subtitle}>Enter your credentials to continue</Text>

      {/* Username */}
      <Text style={styles.label}>Username</Text>
      <TextInput mode="outlined" value={username} onChangeText={setUsername} style={styles.input} />

      {/* Email */}
      <Text style={styles.label}>Email</Text>
      <TextInput
        mode="outlined"
        value={email}
        onChangeText={validateEmail}
        style={styles.input}
        right={emailValid ? <TextInput.Icon icon="check" color="green" /> : null}
      />

      {/* Password */}
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

      {/* Terms and Privacy Policy */}
      <Text style={styles.termsText}>
        By continuing you agree to our{" "}
        <Text style={styles.linkText}>Terms of Service</Text> and{" "}
        <Text style={styles.linkText}>Privacy Policy</Text>.
      </Text>

      {/* Sign Up Button */}
      <Button mode="contained" onPress={() => alert("Account Created!")} style={styles.signUpButton}>
        Sing Up
      </Button>

      {/* Already have an account */}
      <Text style={styles.loginText}>
        Already have an account?{" "}
        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <Text style={styles.loginLink}>Singup</Text>
        </TouchableOpacity>
      </Text>
    </View>
  );
};

export default SignUpScreen;

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
  termsText: {
    fontSize: 12,
    color: "gray",
    textAlign: "center",
    marginVertical: 10,
  },
  linkText: {
    color: "#4CAF50",
    fontWeight: "bold",
  },
  signUpButton: {
    width: "100%",
    marginTop: 20,
    backgroundColor: "#4CAF50",
  },
  loginText: {
    marginTop: 10,
    fontSize: 14,
  },
  loginLink: {
    color: "#4CAF50",
    fontWeight: "bold",
  },
});
