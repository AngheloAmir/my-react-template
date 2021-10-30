/*
*/
import React from 'react';

import {
  contextStore,
  createDefaultState,
  RootReducer} from './StateAPI';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


import Main from './AppComponents/HomeScene';

function App() {
  const [state, dispatch] = React.useReducer(RootReducer, createDefaultState());

  return (
    <React.Fragment>
      <contextStore.Provider value={{state, dispatch}}>
        <Router>
          <Switch>
            <Route path="/"> <Main /> </Route>

          </Switch>
        </Router>
      </contextStore.Provider>
    </React.Fragment>
  );
}

export default App;
