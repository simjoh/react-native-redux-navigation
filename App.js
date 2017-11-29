import React, { Component } from 'react';
import { AppRegistry,View} from 'react-native';
import { Provider } from 'react-redux';
import Setup from './js/setup';

export default class RNCognito extends Component {
  render() {
    return (
        <View style={{flex:1}}>
            <Setup />
        </View>
    );
  }
}
 
AppRegistry.registerComponent('RNCognito', () => RNCognito);
