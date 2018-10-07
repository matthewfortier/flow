import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import FlowText from '../components/FlowText';

class AccountsScreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <FlowText style={styles.heading}>Accounts</FlowText>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        width: "100%"
    },
    heading: {
        fontSize: 24,
        marginTop: 60,
    },
});

export default AccountsScreen;