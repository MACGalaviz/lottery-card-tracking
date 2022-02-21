import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {connect} from 'react-redux';

class Welcome extends Component {
	constructor(props){
    super(props)
  }

  render() {
  	const { controller } = this.props;
  	return (
  		controller.showApp && <View><Text>{controller.appName}</Text></View>
  	)
  }
}

function mapStateToProps(state){
	const {controller} = state
  return {
  	controller,
  }
}

export default connect(mapStateToProps)(Welcome);