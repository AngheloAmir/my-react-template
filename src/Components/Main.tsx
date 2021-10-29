/*
    * TYPE
        Fragment of App.tsx

    * DESCRIPTION
         Handles what will be shown, the desktop or mobile version and handles the process for both Views.
   
    * VISIBLE WHEN
    
    * NOTE
      Files in the Components folder should provide only the process (i.e what happen when a button is pressed), therefore the file
      itself should not contain html tags.
*/
import React from 'react';

import { contextStore, StateAPI, Action } from '../StateAPI';
import MainDesktop from '../Views/MainDesktop';
import MainMobile from '../Views/MainMobile';

import useWindowDimensions from '../Functions/useWindowDimension';

export default function MainView() {
    const { dispatch } :StateAPI = React.useContext(contextStore); 
    const { width } = useWindowDimensions();

    function handleOnClick() {
        dispatch( Action.Test() );
        alert("Hello");
    }

    return (
        <React.Fragment>
            {
                width >= 578 ?
                    <MainDesktop onClick={handleOnClick} />
                :
                    <MainMobile onClick={handleOnClick} />
            }
        </React.Fragment>
    )
}
