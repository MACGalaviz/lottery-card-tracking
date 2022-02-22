import { cards } from '../const/cards.js'
import { PRESS_CARD } from '../const/actionTypes';

export function controller(state={
	appName: "Lottery Card Tracking",
  showApp: true,
  cards: cards,
  called: [],
}, action) {
  switch(action.type){
    case PRESS_CARD:
      let newArray = [...state.called]
      let exist = newArray.indexOf(action.card)
      exist === -1 ? newArray.push(action.card) : newArray.splice(exist, 1)
      return Object.assign({}, state, {
        called: newArray
      })
    default:
      return state;
  }
};