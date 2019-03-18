/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };
    return (
      <View style={styles.container}>
        <Greeting name="choi"></Greeting>
        <Greeting name="jiho"></Greeting>
        <Blink text="i love to blink"></Blink>
        <Blink text="yes blink is so great"></Blink>
        <Image source={pic} style={{width: 193, height:110}} />
      </View>
    );
  }
}

class Blink extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isShowingText: true
    }

    setInterval(() => {
      this.setState((prevState) => (
        {isShowingText: !prevState.isShowingText}
      ))
    }, 1000)
  }

  render() {
    if (!this.state.isShowingText) {
      return null
    }

    return (
      <Text>{this.props.text}</Text>
    )
  }

}

class Greeting extends Component {
  render() {
    return (
      <View style={{alignItems: 'center'}}>
        <Text>Hello {this.props.name} </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
