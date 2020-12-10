import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Wrap from './components/wrap.component';
//import { route } from '../backend/routes/users';
import { Provider } from 'react-redux';
import store from './redux/store'

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Wrap></Wrap>
        </div>
        {/* <Route path="/user"component={CreateUser}/> */}
      </Router>
    </Provider>
  );
}

export default App;
