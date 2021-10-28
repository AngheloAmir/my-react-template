/*
    * TYPE
        Scene - A screen is a component that occupies a large part of the screen
        Index - A component that does not display itself
        Fragment of ...

    * DESCRIPTION

    * VISIBLE WHEN
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
        <div>
            {
                width >= 578 ?
                    <MainDesktop onClick={handleOnClick} />
                :
                    <MainMobile onClick={handleOnClick} />
            }
        </div>
    )
}
