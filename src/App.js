import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import {store} from './stores'
import MainRouter from './MainRouter';
import './assets/css/main.css';
import './assets/css/colour.css';

function App() {
  return (
    <Provider store={store}>
    <BrowserRouter>
      <MainRouter />
    </BrowserRouter>
  </Provider>
  );
}

export default App;
