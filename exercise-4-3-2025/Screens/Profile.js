import React from "react";
import {View, Text, StyleSheet} from 'react-native';

const ProfileScreen = ({route}) => {
    return (
        <View style={styles.container}>
            <Text>ProfileScreen Screen</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 20,
        fontWeight: '800',
    }
});

export default ProfileScreen;