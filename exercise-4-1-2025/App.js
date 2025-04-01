import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App() {
  const [screen, setScreen] = useState('Login');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    checkLoginStatus();
  }, []);

  // Kiểm tra nếu đã đăng nhập thì vào Home
  const checkLoginStatus = async () => {
    const savedUsername = await AsyncStorage.getItem('username');
    const savedPassword = await AsyncStorage.getItem('password');
    if (savedUsername && savedPassword) {
      setUsername(savedUsername);
      setPassword(savedPassword);
      setScreen('Home');
    }
  };

  // Lưu thông tin đăng nhập
  const handleLogin = async () => {
    if (username && password) {
      await AsyncStorage.setItem('username', username);
      await AsyncStorage.setItem('password', password);
      setScreen('Home');
    } else {
      alert('Vui lòng nhập đầy đủ username và password');
    }
  };

  // Đăng xuất (xóa dữ liệu)
  const handleLogout = async () => {
    await AsyncStorage.removeItem('username');
    await AsyncStorage.removeItem('password');
    setUsername('');
    setPassword('');
    setScreen('Login');
  };

  return (
    <View style={styles.container}>
      {screen === 'Login' ? (
        <View>
          <Text style={styles.title}>Đăng Nhập</Text>
          <TextInput
            style={styles.input}
            placeholder="Nhập username"
            value={username}
            onChangeText={setUsername}
          />
          <TextInput
            style={styles.input}
            placeholder="Nhập password"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />
          <Button title="Đăng nhập" onPress={handleLogin} />
        </View>
      ) : (
        <View>
          <Text style={styles.title}>Trang Home</Text>
          <Text style={styles.info}>Username: {username}</Text>
          <Text style={styles.info}>Password: {password}</Text>
          <Button title="Đăng xuất" onPress={handleLogout} />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center' 
  },
  title: { 
    fontSize: 24, 
    fontWeight: 'bold', 
    marginBottom: 20 
  },
  input: { 
    width: 250, 
    height: 40, 
    borderWidth: 1, 
    marginBottom: 10, 
    paddingHorizontal: 10 
  },
  info: { 
    fontSize: 18, 
    marginVertical: 5 
  },
});
