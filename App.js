import React from 'react';
import { StyleSheet, Text, View, ScrollView, Dimensions } from 'react-native';
import { Font, AppLoading } from 'expo';
import { BaseNavigator } from "./navigation/BaseNavigator"
import { Provider } from 'react-redux';
import { store } from './redux/app-redux';

export default class App extends React.Component {
  state = {
    appReady: false,
  };

  async componentDidMount() {
    await Font.loadAsync({
      'Calibre': require('./assets/fonts/calibre-semibold-webfont.ttf'),
    });

    this.setState({ appReady: true });
  }

  render() {
    if (this.state.appReady) {
      return (
        <Provider store={store}>
          <View style={styles.container}>
            <BaseNavigator style={styles.navbar} />
          </View>
        </Provider>
      );
    } else {
      return <AppLoading />;
    }
  }
}

// Store width in variable
var height = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: '#F5F5F5',
  },
  spacer: {
    height: height * 0.15
  },
  modal: {
    height: "60%",
    width: "90%",
    backgroundColor: "#333",
    position: "absolute",
    bottom: "20%",
    left: "5%",
    borderRadius: 20,
    zIndex: 999
  }
});
