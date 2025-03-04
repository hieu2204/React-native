import React from "react";
import {View, Text, StyleSheet} from 'react-native';

const HomeScreen = ({route}) => {
        const phoneNumber = route.params?.phoneNumber || 'Không có số điện thoại';
    
        return (
            <View style={styles.container}>
                <Text style={styles.text}>Home Screen</Text>
                <Text style={styles.phoneText}>Số điện thoại: {phoneNumber}</Text>
            </View>
        );
4};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 20,
        fontWeight: '800',
    }
});

export default HomeScreen;