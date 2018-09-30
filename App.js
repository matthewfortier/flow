import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationActions } from 'react-navigation';
import { Font, AppLoading } from 'expo';

import NavigationService from "./navigator";

import AppNavigator from './components/AppNavigator';
import NavigationBar from './components/NavigationBar';

class CustomNavigator extends React.Component {
  static router = {
    ...AppNavigator.router,
    getStateForAction: (action, lastState) => {
      // check for custom actions and return a different navigation state.
      return AppNavigator.router.getStateForAction(action, lastState);
    },
  };
  componentDidUpdate(lastProps) {
    // Navigation state has changed from lastProps.navigation.state to this.props.navigation.state
  }
  render() {
    const { navigation } = this.props;

    return (
      <View style={styles.container}>
        <AppNavigator navigation={navigation} ref={navigatorRef => {
          NavigationService.setTopLevelNavigator(navigatorRef);
        }} />
        <NavigationBar />
      </View>
    );
  }
}

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
        <CustomNavigator />
      );
    } else {
      return <AppLoading />;
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  navbar: {
    height: 300,
    width: "100%",
    backgroundColor: "skyblue"
  }
});
