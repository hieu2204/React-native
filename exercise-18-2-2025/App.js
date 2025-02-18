import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text,Button, TextInput, View } from 'react-native';

export default function App() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const validatePhoneNumber = (phone) => {
    const phoneRegex = /^(0[3|5|7|8|9])+([0-9]{8})$/;
    if (phone === ''){
      setErrorMessage('');
    }
    else if (phoneRegex.test(phone)) {
      setErrorMessage('Số điện thoại hợp lệ!');
    }
    else {
      setErrorMessage('Số điện thoại không đúng định dạng vui lòng nhập lại!');
    }
  }
  return (
    <View style={styles.container}>
      <Text>Đăng nhập</Text>
      <View style={{height: 1, backgroundColor: 'black'}}/>
      <Text>Nhập số điện thoại</Text>
      <Text>Dùng số điện thoại để đăng nhập hoặc đăng ký tài khoản OneHousing Pro</Text>
      <TextInput 
        placeholder='Nhập số điện thoại'
        keyboardType='numeric'
        value={phoneNumber}
        onChangeText={(text) =>
        {
          setPhoneNumber(text);
          validatePhoneNumber(text);
        }}
        style={styles.textInput}
      />
      <Text style={styles.errorText}>{errorMessage}</Text>
      <Button 
        title="Tiếp tục"
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 30,
    paddingLeft: 15,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  textInput: {
    borderBottomWidth: 2,
    borderBottomColor: '#ccc',
    padding: 10,
    marginTop: 10,
  },
  errorText: {
    color: 'red',
    paddingTop: 10
  }
});
