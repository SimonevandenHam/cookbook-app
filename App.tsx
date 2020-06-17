import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {Provider} from 'react-redux';
import {createStore} from 'redux';

import rootReducer from '../Store/rootReducer';

const store = createStore(rootReducer);

export default class ShatApp extends Component {
  render() {
    return (
      <Provider store={store}>
        <View>
          <Text>hiiiiii?</Text>
        </View>
      </Provider>
    );
  }
}
