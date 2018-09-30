import React from 'react';
import { Text, StyleSheet } from 'react-native';

export default props => <Text {...props} style={[{ fontFamily: 'Calibre' }, props.style]}>{props.children}</Text>