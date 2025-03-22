import React from "react";
import {View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import BackButton from "../components/BackButton";

const SuccessScreen = () => {
    return (
        <View style={styles.container}>
            {/* Nút Back */}
            <View style={{backgroundColor: "gay", position: "absolute", top: 40, left: 20}}>
                <BackButton />
            </View>

            {/* Hình ảnh thành công */}
            <Image source={require("../assets/payment.png")} style={styles.image} />

            {/* Tiêu đề */}
            <Text style={styles.title}>Payment Success, Yayy!</Text>

            {/* Nội dung */}
            <Text style={styles.subtitle}>
                We will send order details and invoice to your contact no. and registered email.
            </Text>

            {/* Liên kết xem chi tiết */}
            <TouchableOpacity onPress={() => alert("Details Opened")} style={styles.detailsLink}>
                <Text style={styles.detailsText}>Check Details</Text>
                <FontAwesome name="arrow-right" size={14} color="#5A57F1" />
            </TouchableOpacity>

            {/* Nút tải hóa đơn */}
            <TouchableOpacity style={styles.downloadButton} onPress={() => alert("Downloading Invoice...")}>
                <Text style={styles.downloadText}>Download Invoice</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFFFFF",
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: 20,
    },
    image: {
        width: 200,
        height: 200,
        resizeMode: "contain",
        marginBottom: 20,
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center",
        marginBottom: 10,
    },
    subtitle: {
        textAlign: "center",
        color: "#777",
        marginBottom: 20,
    },
    detailsLink: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 30,
    },
    detailsText: {
        fontSize: 16,
        color: "#5A57F1",
        fontWeight: "bold",
        marginRight: 5,
    },
    downloadButton: {
        backgroundColor: "#5A57F1",
        paddingVertical: 15,
        paddingHorizontal: 40,
        borderRadius: 30,
    },
    downloadText: {
        color: "#FFFFFF",
        fontSize: 16,
        fontWeight: "bold",
    },
});

export default SuccessScreen;
