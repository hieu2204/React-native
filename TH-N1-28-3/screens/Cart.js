import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

const CartScreen = () => {
    return (
        <ScrollView style={styles.container}>
            {/* Header - nếu muốn hiển thị tên màn hình */}
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Shopping Cart</Text>
            </View>

            {/* Phần hình ảnh sản phẩm */}
            <View style={styles.imageContainer}>
                {/* Hình ảnh lớn */}
                <View style={{ position: "relative" }}>
                    <Image
                        source={require("../assets/Image.png")}
                        style={styles.bigImage}
                        resizeMode="cover"
                    />
                    {/* Nhãn giảm giá 10% */}
                    <View style={styles.discountBadge}>
                        <Text style={styles.discountText}>10% OFF</Text>
                    </View>
                </View>
            </View>

            {/* Thông tin chính của sản phẩm */}
            <View style={styles.productInfo}>
                <View style={styles.productHeader}>
                    <Text style={styles.productTitle}>BURGER</Text>
                    <Text style={styles.productPrice}>$28</Text>
                </View>

                {/* Rating & Reviews */}
                <View style={styles.ratingContainer}>
                    <View style={{ flexDirection: "row" }}>
                        <FontAwesome5 name="star" size={14} color="#FFD700" />
                        <Text style={styles.ratingText}>4.9 (3k+ Rating)</Text>
                    </View>

                    {/* Số lượng sản phẩm */}
                    <View style={styles.quantityContainer}>
                        <TouchableOpacity style={styles.quantityBtn}>
                            <FontAwesome5 name="plus" size={16} color="#333" />
                        </TouchableOpacity>
                        <Text style={styles.quantityText}>02</Text>
                        <TouchableOpacity style={styles.quantityBtn}>
                            <FontAwesome5 name="minus" size={16} color="#333" />
                        </TouchableOpacity>
                    </View>
                </View>



                {/* Địa chỉ giao hàng */}
                <View style={styles.addressContainer}>
                    {/* Nhóm icon map và text */}
                    <View style={styles.addressLeft}>
                        <FontAwesome5
                            name="map-marker-alt"
                            size={28}
                            color="#333"
                            style={styles.addressIcon}
                        />
                        <View style={styles.addressTextContainer}>
                            <Text style={styles.addressLabel}>Delivery Address</Text>
                            <Text style={styles.addressText}>Dhaka, Bangladesh</Text>
                        </View>
                    </View>
                    {/* Hình ảnh ở cuối cùng */}
                    <View style={{backgroundColor: "rgba(169, 166, 255, 1)", borderRadius: 5, paddingTop: 14, paddingBottom: 14, paddingLeft: 20, paddingRight: 20}}>
                    <Image
                        source={require("../assets/Frame.png")}
                        style={styles.frameImage}
                    />
                    </View>
                </View>
                {/* Phương thức thanh toán */}
                <View style={styles.paymentMethod}>
                    <View style={{ flexDirection: "row", alignItems: "center" }}>
                        <FontAwesome5 name="credit-card" size={18} color="#333" />
                        <Text style={styles.paymentText}>  Payment Method</Text>
                    </View>
                    <TouchableOpacity>
                        <Text style={styles.changeText}>Change</Text>
                    </TouchableOpacity>
                </View>
                <Text style={styles.summaryTitle}>Checkout Summary</Text>
                <View style={styles.summaryRow}>
                    <Text style={styles.summaryLabel}>Subtotal (2)</Text>
                    <Text style={styles.summaryValue}>$56</Text>
                </View>
                <View style={styles.summaryRow}>
                    <Text style={styles.summaryLabel}>Delivery Fee</Text>
                    <Text style={styles.summaryValue}>$6.20</Text>
                </View>
                <View style={styles.summaryRow}>
                    <Text style={styles.summaryLabel}>Payable Total</Text>
                    <Text style={[styles.summaryValue, { color: "blue", fontWeight: "bold" }]}>
                        $62.2
                    </Text>
                </View>
            </View>

            {/* Thông tin tóm tắt thanh toán */}
           

            {/* Nút xác nhận đơn hàng */}
            <TouchableOpacity style={styles.confirmButton}>
                <Text style={styles.confirmButtonText}>Confirm Order</Text>
            </TouchableOpacity>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFF",
    },
    header: {
        padding: 15,
        borderBottomWidth: 0.5,
        borderColor: "#ccc",
        alignItems: "center",
    },
    headerTitle: {
        fontSize: 18,
        fontWeight: "bold",
    },

    // Hình ảnh
    imageContainer: {
        marginTop: 10,
        paddingHorizontal: 20,
    },
    bigImage: {
        width: "100%",
        height: 200,
        borderRadius: 10,
    },
    discountBadge: {
        position: "absolute",
        top: 10,
        left: 10,
        backgroundColor: "#007BFF",
        paddingVertical: 4,
        paddingHorizontal: 8,
        borderRadius: 5,
    },
    discountText: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 12,
    },




    thumbImage: {
        width: 60,
        height: 60,
        marginHorizontal: 5,
        borderRadius: 10,
    },

    // Thông tin sản phẩm
    productInfo: {
        backgroundColor: "#f5f5f5",
        margin: 20,
        borderRadius: 10,
        padding: 15,
    },
    productHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    productTitle: {
        fontSize: 20,
        fontWeight: "bold",
    },
    productPrice: {
        fontSize: 20,
        fontWeight: "bold",
        color: "blue",
    },
    ratingContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 5,
        justifyContent: "space-between"
    },
    ratingText: {
        marginLeft: 5,
        fontSize: 14,
        color: "#555",
    },
    quantityContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 10,
    },
    quantityBtn: {
        backgroundColor: "#ddd",
        padding: 8,
        borderRadius: 5,
    },
    quantityText: {
        marginHorizontal: 15,
        fontSize: 16,
        fontWeight: "bold",
    },
    addressContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 10,
    },
    addressLeft: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "rgba(192, 234, 219, 1)",
        borderRadius: 5,
        paddingTop: 14,
        paddingBottom: 14,
        paddingLeft: 30,
        paddingRight: 30,
        marginRight: 10
    },
    addressIcon: {
        marginRight: 20,
    },
    addressTextContainer: {
        flexDirection: "column",
    },
    addressLabel: {
        fontWeight: "bold",
        fontSize: 14,
    },
    addressText: {
        fontSize: 14,
        color: "#555",
    },
    frameImage: {
        width: 30,
        height: 30,
    },
    paymentMethod: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 15,
        marginBottom: 20,
        justifyContent: "space-between",
    },
    paymentText: {
        marginLeft: 5,
        fontSize: 14,
        color: "#555",
    },
    changeText: {
        color: "blue",
        textDecorationLine: "underline",
    },

    // Checkout Summary
    checkoutSummary: {
        marginHorizontal: 20,
        backgroundColor: "#f5f5f5",
        borderRadius: 10,
        padding: 15,
        marginTop: 10,
    },
    summaryTitle: {
        fontSize: 16,
        fontWeight: "bold",
        marginBottom: 10,
    },
    summaryRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginVertical: 3,
    },
    summaryLabel: {
        fontSize: 14,
        color: "#555",
    },
    summaryValue: {
        fontSize: 14,
        color: "#333",
    },

    // Nút xác nhận đơn hàng
    confirmButton: {
        backgroundColor: "rgba(74, 67, 236, 1)",
        margin: 20,
        padding: 15,
        borderRadius: 10,
        alignItems: "center",
    },
    confirmButtonText: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 16,
    },
});

export default CartScreen;
