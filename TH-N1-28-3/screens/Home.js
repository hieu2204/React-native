import React from "react";
import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity, ScrollView } from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

const HomeScreen = () => {
    return (
        <ScrollView style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <Image source={require("../assets/Avatar.png")} style={styles.avatar} />
                <View>
                    <Text style={styles.locationLabel}>Your Location</Text>
                    <Text style={styles.location}>Savar, Dhaka</Text>
                </View>
                <FontAwesome5 name="bell" size={20} color="black" style={styles.notificationIcon} />
            </View>
            
            {/* Search Bar */}
            <View style={styles.searchWrapper}>
                <View style={styles.searchContainer}>
                    <FontAwesome5 name="search" size={18} color="gray" style={styles.searchIcon} />
                    <TextInput
                        placeholder="Search your food"
                        placeholderTextColor="gray"
                        style={styles.input}
                    />
                    <FontAwesome5 name="sliders-h" size={18} color="gray" style={styles.filterIcon} />
                </View>
            </View>
            
            {/* Categories */}
            <View style={styles.categories}>
                <TouchableOpacity style={[styles.category, styles.activeCategory]}>
                    <FontAwesome5 name="pizza-slice" size={20} color="white" />
                    <Text style={styles.categoryTextActive}>PIZZA</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.category}>
                    <FontAwesome5 name="hamburger" size={20} color="black" />
                    <Text style={styles.categoryText}>BURGER</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.category}>
                    <FontAwesome5 name="cocktail" size={20} color="black" />
                    <Text style={styles.categoryText}>DRINK</Text>
                </TouchableOpacity>
            </View>
            
            {/* Featured Item */}
            <View style={styles.featuredItem}>
                <Image source={require("../assets/burger.png")} style={styles.featuredImage} />
                <View style={styles.discountBadge}>
                    <Text style={styles.discountText}>10% OFF</Text>
                </View>
            </View>
            <FontAwesome5 name="ellipsis-h" size={20} color="black" style={{ alignSelf: "center", marginTop: 10 }} />
            <View style={{flexDirection: "row", justifyContent: "space-between"}}>
                <Text style={{left: 20, marginBottom: 20}}>Popular Items</Text>
                <Text style={{right: 20}}>View All</Text>
            </View>
            <View style={{alignSelf: "center"}}>
                <Image source={require("../assets/ItemBurger.png")}/>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: "#F8F8F8" },
    header: {
        flexDirection: "row", 
        alignItems: "center", 
        padding: 20, 
        marginTop: 30,
        height: 150,
        justifyContent: "space-between", 
        backgroundColor: "rgba(254, 255, 191, 1)",
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30
    },
    avatar: { width: 49, height: 49, borderRadius: 30 },
    locationLabel: { color: "gray", fontSize: 12 },
    location: { fontSize: 16, fontWeight: "bold" },
    notificationIcon: { marginRight: 10 },
    searchWrapper: {
        marginTop: -20, 
        paddingHorizontal: 20,
    },
    searchContainer: {
        flexDirection: "row", 
        backgroundColor: "rgba(74, 67, 236, 1)", 
        borderRadius: 25, 
        padding: 10, 
        alignItems: "center", 
        elevation: 5
    },
    searchIcon: { marginHorizontal: 10 },
    input: { flex: 1, fontSize: 16, color: "black" },
    filterIcon: { marginHorizontal: 10 },
    categories: { flexDirection: "row", justifyContent: "space-around", marginBottom: 20, marginTop: 40 },
    category: { padding: 10, borderRadius: 10, alignItems: "center" },
    activeCategory: { backgroundColor: "#00C853" },
    categoryText: { color: "black" },
    categoryTextActive: { color: "white" },
    featuredItem: { backgroundColor: "#222", padding: 20, borderRadius: 15, marginHorizontal: 20, alignItems: "center" },
    featuredImage: { width: "100%", height: 150, borderRadius: 10 },
    discountBadge: { backgroundColor: "blue", padding: 5, borderRadius: 5, position: "absolute", top: 10, right: 10 },
    discountText: { color: "white", fontWeight: "bold" },
    featuredTitle: { color: "white", fontSize: 18, fontWeight: "bold", marginTop: 10 },
    featuredSubtitle: { color: "white", fontSize: 14 },
    ratingContainer: { flexDirection: "row", alignItems: "center", marginTop: 5 },
    ratingText: { color: "white", marginLeft: 5 },
});

export default HomeScreen;