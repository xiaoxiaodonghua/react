import React from 'react';
import Routes from './routes/route.js';
import { Provider } from 'react-redux';
import store from './store/index.js';
import './app.css';

function App() {
    return (
      <div className="App">
          <Provider store = {store}>
            <Routes/>
          </Provider>
      </div>
    );
}

export default App;