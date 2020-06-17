import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {connect} from 'react-redux';

export class homeHeader extends Component {
  render() {
    return (
      <View>
        <Text>add recipe</Text>
        <Text>set categorie filter</Text>
        <Text>search recipe</Text>
        <Text>Favorites</Text>
      </View>
    );
  }
}

const mapStateToProps = () => {};

const mapDispatchToProps = () => {};

export default connect(mapStateToProps, mapDispatchToProps)(homeHeader);
