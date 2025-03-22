import React from "react";
import { TouchableOpacity } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";
import { View, StyleSheet } from "react-native";

const BackButton = ({color = "black", size = 24, style}) => {
    const navigation = useNavigation();
    return (
        <View style={styles.backbutton}>
        <TouchableOpacity onPress={() => navigation.navigate("successscreen")} style={{ padding: 10 }}>
            <FontAwesome name="angle-left" size={24} color="black"/>
        </TouchableOpacity>
        </View>
        
    );
};
const styles = StyleSheet.create({
    backbutton: {
        marginTop: 60,
        marginLeft: 20,
        backgroundColor: "rgb(216, 216, 219)",
        width: 45,
        height: 44,
        borderRadius: 9,
        alignItems: 'center'
    }
});
export default BackButton;