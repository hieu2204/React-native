import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const SignInScreen = ({ navigation }) => {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const validatePhoneNumber = (phone) => {
        const phoneRegex = /^(0[3|5|7|8|9])+([0-9]{8})$/;
        if (phone === '') {
            setErrorMessage('');
        } else if (phoneRegex.test(phone)) {
            setErrorMessage('Số điện thoại hợp lệ!');
        } else {
            setErrorMessage('Số điện thoại không đúng định dạng, vui lòng nhập lại!');
        }
    };

    const handleContinue = () => {
        if (!errorMessage || errorMessage === 'Số điện thoại hợp lệ!') {
            navigation.navigate('Home', { phoneNumber }); // 🔥 Chuyển qua HomeScreen kèm số điện thoại
        }
    };

    return (
        <View style={styles.container}>
            <Text>Đăng nhập</Text>
            <TextInput
                placeholder='Nhập số điện thoại'
                keyboardType='numeric'
                value={phoneNumber}
                onChangeText={(text) => {
                    setPhoneNumber(text);
                    validatePhoneNumber(text);
                }}
                style={styles.textInput}
            />
            <Text style={styles.errorText}>{errorMessage}</Text>
            <Button title="Tiếp tục" onPress={handleContinue} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    textInput: {
        width: '80%',
        borderWidth: 1,
        padding: 10,
        marginTop: 10,
        borderRadius: 5,
    },
    errorText: {
        color: 'red',
        marginTop: 5,
    },
});

export default SignInScreen;
