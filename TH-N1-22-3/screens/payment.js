import React from "react";
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import InputField from "../components/InputField";
import BackButton from "../components/BackButton";
import { useNavigation } from "@react-navigation/native";
import {View, Text, StyleSheet} from "react-native";
import CustomButton from "../components/Button";

const Payment = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            {/* header */}
            <View style={styles.headerTab}>
                <BackButton />
                <View style={styles.header}>
                    {/* left */}
                    <View style={styles.headerleft}>
                        <Text style={{fontWeight: "bold", fontSize: 22}}>Checkout</Text>
                        <FontAwesome name="credit-card"  size={20} style={{marginLeft: 8}} />
                    </View>
                    {/* right */}
                    <View style={styles.headerRight}>
                        <Text style={{fontSize: 20}}>1527</Text>
                        <Text>Including GST (18%)</Text>
                    </View>
                </View>
                <View style={styles.button}>
                <CustomButton title="Credit-Cart" color="rgba(37, 212, 130, 1)" icon="credit-card"/>
                <CustomButton title="Apple Pay" color="rgba(248, 248, 251, 1)" icon="apple" textColor="black"/>
                </View>
                
            </View>
            <View style={styles.inputtext}>
            <InputField label="Card number" placeholder="5261 4141 0151 8472" icon1="cc-mastercard" icon2="credit-card" />
            <InputField label="Cardholder name" placeholder="Christie Doe" />
    
            <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
            <InputField label="Expiry date" placeholder="06 / 2024" style={{ flex: 1, marginRight: 10 }} />
            <InputField label="CVV / CVC" placeholder="915" style={{ flex: 1 }} />
        </View>
                
            </View>
            <Text style={{textAlign: 'center', width: 233, alignSelf: 'center'}}>We will send you an order details to your email after the successfull payment</Text>
            <View style={{alignItems: 'center'}}>
                <CustomButton icon="lock" title="Pay for the order" onPress={() => navigation.navigate("successscreen")} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#FFFFFF",
        flex: 1
    },
    headerTab: {
        height: 300
    },
    header: {
        backgroundColor: "#FFFFFF",
        flexDirection: "row",
        justifyContent: 'space-between',
    },
    headerleft: {
        flexDirection: "row",
        alignItems: "center",
        paddingLeft: 20
    },
    headerRight: {
        paddingRight: 20,
    },
    button: {
        flexDirection: "row",
        justifyContent: "center",
        paddingTop: 30,
    },
    inputtext: {
        paddingHorizontal: 20,
        paddingLeft: 20,
        paddingRight: 20,
    }
});

export default Payment;