import React, { Component } from 'react';
import './App.css';
import Main from './component/Main';
import {createStore} from 'redux';
import rootReducer from './reducer';
import {Provider} from 'react-redux';

class App extends Component {
  render() {
    const store = createStore(rootReducer);
    return (
      <Provider store={store}>
        <Main/>
      </Provider>
    );
  }
}

export default App;
