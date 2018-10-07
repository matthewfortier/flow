import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import FlowText from '../components/FlowText';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        flow: state.flow
    };
}

const mapDispatchToProps = (dispatch) => {
    return {};
}

class BreakdownScreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <FlowText style={styles.heading}>Welcome back Matthew! Here is your breakdown.</FlowText>
                <FlowText style={styles.flow}>${this.props.flow}</FlowText>
                <View style={styles.delta}>
                    <FlowText style={styles.deltaLabel}>Income:</FlowText>
                    <FlowText style={styles.deltaAmount}>$3670</FlowText>
                </View>
                <View style={styles.delta}>
                    <FlowText style={styles.deltaLabel}>Expenses:</FlowText>
                    <FlowText style={styles.deltaAmount}>$3368</FlowText>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20
    },
    heading: {
        fontSize: 24,
        marginTop: 60,
    },
    flow: {
        marginTop: 30,
        fontSize: 36
    },
    delta: {
        flexDirection: "row"
    },
    deltaLabel: {
        fontSize: 18,
        color: "#BAC1CD",
        paddingRight: 5
    },
    deltaAmount: {
        fontSize: 18,
        color: "#676D79"
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(BreakdownScreen);