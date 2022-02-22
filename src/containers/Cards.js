import React, { Component } from 'react';
import { Dimensions, View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { pressCard } from '../actions/controller';
import Card from '../components/Card';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    flexDirection: "row",
    flexWrap: "wrap",
    backgroundColor: '#d8bfd8',
  } 
});

class Cards extends Component {
	constructor(props){
    super(props)
    this.state={ size: 0 }
  }

  componentDidMount(){
    let windowWidth = Dimensions.get('window').width;
    let windowHeight = Dimensions.get('window').height;
    let area = windowWidth * windowHeight
    let offset = area/108
    let size = Math.sqrt(offset/2)
    this.setState({size: size})
  }

  handleOnPressCard = (card) => {
    const { dispatch } = this.props
    dispatch(pressCard(card))
  }

  render() {
    const { size } = this.state ;
    const { controller } = this.props;
    const { cards } = controller

    let items = Object.keys(cards).reduce((result, key)=>{
      result.push(<Card key={result.length} name={key} size={size} img={cards[key]} onPressCard={this.handleOnPressCard} />)
      return result;
    }, [])

  	return (
        <View style={styles.container}>
          { items }
        </View>
  	)
  }
}

function mapStateToProps(state){
  const { controller } = state
  return { controller }
}

export default connect(mapStateToProps)(Cards);