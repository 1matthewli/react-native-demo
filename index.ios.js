/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import BlinkApp from './components/blink.js';
import FeedVideo from './components/FeedVideo.js';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView
} from 'react-native';

export default class AwesomeProject extends Component {
  videoInfo = [['lol','another one','ye'], ['lo2l','anoth123er one','123ye'], ['lo2l','anoth123er one','123ye'], ['noooooooo']];

  render() {

    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };
    return (
      <ScrollView>
        <View style={{flex: 1, backgroundColor: 'powderblue'}}>
          <Text style={styles.welcome}>
            Welcome to React Natives!
          </Text>
          <Text style={styles.instructions}>
           To get started, edit index.ios.js
          </Text>
        </View>

        <View style={{flex: 4, backgroundColor: 'skyblue'}}>
          {this.videoInfo.map((tags,i) => 
            <FeedVideo 
              pic={pic}
              key={i} 
              label={'Post ' + (i+1) + ':'} 
              tags={tags}
            />
          )}
        </View>

        <View style={{flex: 3, backgroundColor: 'steelblue'}}>
          <Text style={styles.instructions}>
            Press Cmd+R to reload,{'\n'}
            Cmd+D or shake for dev menu
          </Text>
          <BlinkApp/>
        </View>
      </ScrollView>

    );
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

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
