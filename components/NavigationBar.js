import React from "react";
import { View, Image, Text, StyleSheet, TouchableHighlight } from "react-native";
import FontAwesome, { Icons } from 'react-native-fontawesome';
import NavigationService from '../navigator'

class navBar extends React.Component {
    render() {
        return (
            <View style={styles.navbar} >
                <TouchableHighlight underlayColor="#BAC1CD" style={styles.highlight} onPress={() => NavigationService.navigate("Home")}>
                    <Image source={require('../assets/chart-pie-solid.png')} style={styles.icon} />
                </TouchableHighlight>
                <TouchableHighlight underlayColor="#BAC1CD" style={styles.highlight} onPress={() => NavigationService.navigate("Expenses")}>
                    <Image source={require('../assets/dollar-sign-solid.png')} style={styles.icon} />
                </TouchableHighlight>
                <View elevation={5} style={styles.add}>
                    <Image source={require('../assets/add.png')} style={{ width: 40, height: 40, tintColor: "#FFF" }} />
                </View>
                <TouchableHighlight underlayColor="#BAC1CD" style={styles.highlight}>
                    <Image source={require('../assets/credit-card-regular.png')} style={styles.icon} />
                </TouchableHighlight>
                <TouchableHighlight underlayColor="#BAC1CD" style={styles.highlight}>
                    <Image source={require('../assets/calendar-solid.png')} style={styles.icon} />
                </TouchableHighlight>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    navbar: {
        height: 100,
        width: "100%",
        backgroundColor: "#EAEBEF",
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 20
    },
    add: {
        backgroundColor: "#303853",
        height: 60,
        width: 60,
        borderRadius: 50,
        justifyContent: "center",
        alignItems: "center",
        shadowColor: '#000000',
        shadowOffset: {
            width: 0,
            height: 10
        },
        shadowRadius: 6,
        shadowOpacity: 0.3
    },
    highlight: {
        height: 60,
        width: 60,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 50,
    },
    icon: {
        height: 20,
        width: 20,
        resizeMode: "contain"
    },
    plus: {
        fontWeight: "500",
        color: "#FFFFFF",
        fontSize: 40,
        lineHeight: 75
    }
});

export default navBar;