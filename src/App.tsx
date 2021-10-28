/*
*/
import React from 'react';

import {
  contextStore,
  createDefaultState,
  RootReducer} from './StateAPI';

import Main from './Components/Main';

function App() {
  const [state, dispatch] = React.useReducer(RootReducer, createDefaultState());

  return (
    <React.Fragment>
      <contextStore.Provider value={{state, dispatch}}>
        <Main />
      </contextStore.Provider>
    </React.Fragment>
  );
}

export default App;
