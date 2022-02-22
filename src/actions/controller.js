import { PRESS_CARD } from '../const/actionTypes';

export function pressCard(card){
  return {
    type: PRESS_CARD,
    card
  } 
};