import { combineReducers } from 'redux'
import { controller } from './controller'

const appStore = combineReducers({ controller })

export default appStore