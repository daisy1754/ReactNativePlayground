import React from 'react';
import ReactNative, { StyleSheet, Text, TouchableNativeFeedback, TouchableHighlight, View, UIManager} from 'react-native';

export default class App extends React.Component {

  onOpenMenu = () => {
    UIManager.showPopupMenu(
      ReactNative.findNodeHandle(this._button),
      ['Option 1', 'Option 2'],
      () => console.log('something went wrong with the popup menu'),
      (e, i) => console.log(`${e} : ${i}`)
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <TouchableNativeFeedback
          ref={e => {this._button = e;}}
          onPress={this.onOpenMenu}
          background={TouchableNativeFeedback.Ripple('#d0d0d0')}>
          <Text>Click me!</Text>
        </TouchableNativeFeedback>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
