/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import BlinkApp from './components/blink.js';
import FeedVideo from './components/FeedVideo.js';
import VideoList from './components/VideoList.js'

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  SegmentedControlIOS
} from 'react-native';

export default class AwesomeProject extends Component {
  constructor(props) {
    super(props);
    this.state = {selectedIndex: 0};
  }

  videoInfo = [['lol','another one','ye'], ['lo2l','anoth123er one','123ye'], ['lo2l','anoth123er one','123ye'], ['noooooooo']];

  render() {

    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };
    return (
      <ScrollView>
        <View style={{flex: 1, backgroundColor: 'white'}}>
          <Text style={styles.welcome}>
            Welcome to React Native!
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
              styles={styles.video}
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
        <VideoList/>
        <SegmentedControlIOS
          values={['One', 'Two']}
          selectedIndex={this.state.selectedIndex}
          onChange={(event) => {
            this.setState({selectedIndex: event.nativeEvent.selectedSegmentIndex});
          }}
        />
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
  video: {
    padding: 10,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 20,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
