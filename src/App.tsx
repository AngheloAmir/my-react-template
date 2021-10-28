/*
*/
import React from 'react';

import {
  contextStore,
  createDefaultState,
  RootReducer,
  Action } from './StateAPI';
import useWindowDimensions from './Functions/useWindowDimension';

import MainDesktop from './Views/MainDesktop';
import MainMobile from './Views/MainMobile';

function App() {
  const [state, dispatch] = React.useReducer(RootReducer, createDefaultState());
  const { width } = useWindowDimensions();

  function handleOnClick() {
    dispatch( Action.Test() );
    alert("Window width was: " + width);
  }

  return (
    <React.Fragment>
      <contextStore.Provider value={{state, dispatch}}>

        <h1>Try to resize the browser to see the View changes effect</h1>

        {
          width >= 567 ?
            <MainDesktop onClick={handleOnClick} />
          :
            <MainMobile onClick={handleOnClick} />
        }
      </contextStore.Provider>
    </React.Fragment>
  );
}

export default App;
