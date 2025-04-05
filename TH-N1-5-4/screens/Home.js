import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TextInput, FlatList, SafeAreaView } from "react-native";
import Item from "../components/Item";
import { useNavigation } from "@react-navigation/native";

const Home = () => {
    const navigation = useNavigation();
    const [numColumns, setNumColumns] = useState(2); // Use state to control numColumns dynamically

    const products = [
        {
            id: 1,
            name: "Red Apple",
            price: 4.99,
            description: "1kg, Priceg",
            image: require("../assets/pngfuel1.png"),
        },
        {
            id: 2,
            name: "Beef Bone",
            price: 4.99,
            description: "1kg, Priceg",
            image: require("../assets/pngfuel4.png"),
        },
    ];

    const renderItem = ({ item }) => {
        return <Item product={item} 
        onPress={() => navigation.navigate("ProductDetail", { product: item })}
        />;
    };

    const data = [
        { key: 'header', type: 'header' },
        { key: 'search', type: 'search' },
        { key: 'banner', type: 'banner' },
        { key: 'exclusiveOffer', type: 'offer' },
        { key: 'bestSelling', type: 'bestSelling' },
        { key: 'groceries', type: 'groceries' },
    ];

    const renderContent = ({ item }) => {
        switch (item.type) {
            case 'header':
                return (
                    <View style={styles.header}>
                        <View style={{ paddingTop: 70 }}>
                            <Image
                                source={require('../assets/carrot.png')}
                                style={{ width: 30, height: 30 }}
                            />
                        </View>
                        <View style={{ flexDirection: 'row', marginTop: 10 }}>
                            <Text style={{ fontSize: 18, color: 'rgba(76, 79, 77, 1)', fontWeight: '600' }}>Dhaka, Banassre</Text>
                        </View>
                    </View>
                );
            case 'search':
                return (
                    <View style={styles.search}>
                        <TextInput
                            style={styles.input}
                            placeholder="Search Store"
                            placeholderTextColor={'rgba(124, 124, 124, 1)'}
                        />
                    </View>
                );
            case 'banner':
                return (
                    <View style={{ alignSelf: 'center', marginTop: 10 }}>
                        <Image source={require('../assets/banner.png')} style={{ width: 360, height: 114 }} />
                    </View>
                );
            case 'offer':
                return (
                    <View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 }}>
                            <Text style={{ color: 'rgba(24, 23, 37, 1)', left: 20 }}>Exclusive Offer</Text>
                            <Text style={{ color: 'rgba(83, 177, 117, 1)', right: 20 }}>See all</Text>
                        </View>
                        <FlatList
                            data={products}
                            renderItem={renderItem}
                            keyExtractor={(item, index) => `offer-${item.id}-${index}`}
                            numColumns={numColumns}
                            horizontal={false}
                            showsVerticalScrollIndicator={false}
                            contentContainerStyle={styles.productList}
                        />
                    </View>
                );
            case 'bestSelling':
                return (
                    <View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 }}>
                            <Text style={{ color: 'rgba(24, 23, 37, 1)', left: 20 }}>Best Selling</Text>
                            <Text style={{ color: 'rgba(83, 177, 117, 1)', right: 20 }}>See all</Text>
                        </View>
                        <FlatList
                            data={products}
                            renderItem={renderItem}
                            keyExtractor={(item, index) => `best-selling-${item.id}-${index}`}
                            numColumns={numColumns}
                            horizontal={false}
                            showsVerticalScrollIndicator={false}
                            contentContainerStyle={styles.productList}
                        />
                    </View>
                );
            case 'groceries':
                return (
                    <View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 }}>
                            <Text style={{ color: 'rgba(24, 23, 37, 1)', left: 20 }}>Groceries</Text>
                            <Text style={{ color: 'rgba(83, 177, 117, 1)', right: 20 }}>See all</Text>
                        </View>
                    </View>
                );
            default:
                return null;
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={data}
                renderItem={renderContent}
                keyExtractor={(item) => item.key}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.productList}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    search: {
        marginTop: 20,
        backgroundColor: 'rgba(242, 243, 242, 1)',
        flexDirection: 'row',
        alignItems: 'center',
        height: 51,
        borderRadius: 15,
        left: 10,
        width: 350,
        paddingHorizontal: 10
    },
    input: {
        fontSize: 14,
        fontWeight: 600
    },
    header: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    productList: {
        marginTop: 20,
        paddingHorizontal: 10,
    },
});

export default Home;
