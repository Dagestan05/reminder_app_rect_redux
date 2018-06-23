import React from 'react';
import ReactDOM from 'react-dom';
//Components
import App from './components/App';
//Redux
import { Provider } from 'react-redux';
import {createStore} from 'redux';


import remindersReducer from './reducers/index';

const store = createStore(remindersReducer);


ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>, 
  document.getElementById('root')
)
