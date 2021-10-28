/*
*/
import React from 'react';

import {
  contextStore,
  createDefaultState,
  RootReducer } from './StateAPI';
import useWindowDimensions from './Functions/useWindowDimension';

import MainDesktop from './Views/MainDesktop';
import MainMobile from './Views/MainMobile';

function App() {
  const [state, dispatch] = React.useReducer(RootReducer, createDefaultState());
  const { width } = useWindowDimensions();

  function handleOnClick() {
    alert('You clicked it! \nWidth was: ' + width);
  }

  return (
    <React.Fragment>
      <contextStore.Provider value={{state, dispatch}}>
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
