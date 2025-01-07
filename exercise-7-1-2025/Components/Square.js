import { Text, StyleSheet } from "react-native";
const CustomText = (props) => {
    return (
        <Text style={[styles.text, props.style]}>
            Square{props.children}
        </Text>
    );
}
const styles = StyleSheet.create({
    text: {
        backgroundColor: 'blue',
        color: 'white',
        width: 100,
        height: 100,
        margin: 100,
        textAlign: 'center',
        textAlignVertical: 'center',
    }
});
export default CustomText;