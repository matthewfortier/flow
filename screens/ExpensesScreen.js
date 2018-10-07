import React from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import FlowText from '../components/FlowText';
import { connect } from 'react-redux';
import { addExpense } from '../redux/app-redux'

const mapStateToProps = (state) => {
    return {
        expenses: state.expenses
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        addExpense: (expense) => { dispatch(addExpense(expense)); }
    };
}

class ExpensesScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: "",
            date: "",
            amount: "",
        }
    }

    _addExpense() {
        this.props.addExpense({
            name: this.state.name,
            date: this.state.date,
            amount: this.state.amount
        })

        this.state.name = "";
        this.state.date = "";
        this.state.amount = "";
    }

    render() {
        return (
            <View style={styles.container}>
                <FlowText style={styles.heading}>Expenses</FlowText>
                <Text>Name</Text>
                <TextInput
                    style={styles.input}
                    value={this.state.name}
                    onChangeText={(text) => { this.setState({ name: text }) }} />
                <Text>Date</Text>
                <TextInput
                    style={styles.input}
                    value={this.state.date}
                    onChangeText={(text) => { this.setState({ date: text }) }} />
                <Text>Amount</Text>
                <TextInput
                    style={styles.input}
                    value={this.state.amount}
                    onChangeText={(text) => { this.setState({ amount: text }) }} />
                <Button title="Add Expense" onPress={() => { this._addExpense() }} />
                <Text>{JSON.stringify(this.props.expenses)}</Text>
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
    input: {
        width: "100%",
        height: 30,
        borderRadius: 4,
        borderWidth: 0.5,
        borderColor: '#d6d7da',
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpensesScreen);