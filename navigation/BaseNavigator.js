import React from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity, Dimensions } from "react-native";
import { createBottomTabNavigator, BottomTabBar } from 'react-navigation-tabs';
import Icon from '@expo/vector-icons/FontAwesome';
import TouchableBounce from 'react-native/Libraries/Components/Touchable/TouchableBounce';

import BreakdownScreen from "../screens/BreakdownScreen";
import ExpensesScreen from "../screens/ExpensesScreen";
import AccountsScreen from "../screens/AccountsScreen";
import CalendarScreen from "../screens/CalendarScreen";

const TabBarComponent = (props) => (<BottomTabBar {...props} />);

const BaseNavigator = createBottomTabNavigator({
    Breakdown: {
        screen: BreakdownScreen,
        navigationOptions: () => ({
            title: "Breakdown",
            tabBarIcon: ({ tintColor }) => (
                <Icon
                    name="pie-chart"
                    color={tintColor}
                    size={24}
                />
            ),
            tabBarButtonComponent: TouchableBounce,
        })
    },
    Expenses: {
        screen: ExpensesScreen,
        navigationOptions: () => ({
            title: "Expenses",
            tabBarIcon: ({ tintColor }) => (
                <Icon
                    name="usd"
                    color={tintColor}
                    size={24}
                />
            ),
            tabBarButtonComponent: TouchableBounce,
        })
    },
    Accounts: {
        screen: AccountsScreen,
        navigationOptions: () => ({
            tabBarIcon: ({ tintColor }) => (
                <Icon
                    name="credit-card-alt"
                    color={tintColor}
                    size={24}
                />
            ),
            tabBarButtonComponent: TouchableBounce,
        })
    },
    Calendar: {
        screen: CalendarScreen,
        navigationOptions: () => ({
            tabBarIcon: ({ tintColor }) => (
                <Icon
                    name="calendar"
                    color={tintColor}
                    size={24}
                />
            ),
            tabBarButtonComponent: TouchableBounce,
        })
    }
}, {
        swipeEnabled: true,
        tabBarOptions: {
            showLabel: false,
            activeTintColor: '#4D84FD',
            inactiveTintColor: '#676D79'
        },
        tabBarComponent: props =>
            <TabBarComponent
                {...props}
                style={styles.navbar}
            />,
    });

// Store width in variable
var height = Dimensions.get('window').height;

const styles = StyleSheet.create({
    navbar: {
        height: "15%",
        width: "100%",
        backgroundColor: "#FFFFFF",
        borderTopColor: "#FFFFFF",
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 20,
        position: "absolute",
        left: 0, right: 0, bottom: 0,
        shadowColor: '#000000',
        shadowOffset: {
            width: 0,
            height: 8
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
        resizeMode: "contain",
        tintColor: "#676D79"
    },
    active: {
        height: 20,
        width: 20,
        resizeMode: "contain",
        tintColor: "#FFC501"
    },
    plus: {
        fontWeight: "500",
        color: "#FFFFFF",
        fontSize: 40,
        lineHeight: 75
    }
});

const defaultGetStateForAction = BaseNavigator.router.getStateForAction;

// BaseNavigator.router.getStateForAction = (action, state) => {
//     if (action.type === NavigationActions.NAVIGATE && action.routeName === 'Adding') {
//         return null;
//     }
//
//     return defaultGetStateForAction(action, state);
// };

export { BaseNavigator };