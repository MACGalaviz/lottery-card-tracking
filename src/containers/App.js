import React from 'react';
import thunkMiddleware from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import appStore from '../reducers';
import Cards from './Cards';

const middleWare = applyMiddleware(thunkMiddleware)

let store = createStore(
  appStore,
  middleWare,
)


const App = () => (
  <Provider store={store}>
    <Cards />
  </Provider>
)

export default App;
