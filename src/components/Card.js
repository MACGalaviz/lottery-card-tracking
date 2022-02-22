import React, {Component} from 'react';
import { Image, TouchableOpacity } from 'react-native';
import {connect} from 'react-redux';

class Card extends Component {
	constructor(props){
    super(props)
  }

  render() {
  	const { size, name, img, onPressCard, called } = this.props;
	let currentStyle = called.indexOf(name) === -1  ? { maxWidth: size+4, maxHeight: size+4, margin: 4, borderRadius: 20 } 
													: { maxWidth: size+4, maxHeight: size+4, margin: 4, borderRadius: 20, borderWidth: 3, borderColor: "red" }
  	return (
		<TouchableOpacity onPress={()=> { onPressCard(name) }} >		
			<Image style={currentStyle} source={img} />
		</TouchableOpacity>
  	)
  }
}

function mapStateToProps(state){
	const { controller } = state
	return { called: controller.called }
}

export default connect(mapStateToProps)(Card);