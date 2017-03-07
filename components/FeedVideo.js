import React, { Component } from 'react';
import { AppRegistry, Text, View, Button, Image } from 'react-native';

export default class FeedVideo extends Component {
  constructor(props) {
    super(props);
    this.state = {muted: true};
  }

  toggleMute() {
    this.setState({muted: !this.state.muted});
  }

  render() {
    let display = this.state.muted ? 'Muted' : 'Sound on';
    let formatTags = this.props.tags.map(tag => '#' + tag);
    return (
      <View>
        <Image source={this.props.pic} style={{width: 193, height: 110}}/>
        <Text>{display}</Text>
        <Text>{this.props.label + ' ' + formatTags.join()}</Text>
        <Button
          onPress={this.toggleMute.bind(this)}
          title="Toggle sound"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
      </View>
    );
  }
}