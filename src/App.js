import React from 'react';
import './App.css';
import { Provider } from 'react-redux'
import Counter from './Component/Counter'
import Store from './Store.js'

function App() {
  return (
      <Provider store={Store}>
        <Counter/>
      </Provider>
    
  );
}

export default App;
