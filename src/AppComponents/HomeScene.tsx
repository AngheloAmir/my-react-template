/*
    * TYPE
        Index - A component that does not display itself
        Controller - A component that handles the functionality

    * DESCRIPTION
        It also handle the process (what happen when a button is clicked).

    * VISIBLE WHEN
        The user is at home page

    **This component return statement should not contain any html tags and text/data.
    **only providing the process and data from StateAPI
*/
import React from 'react';

import { contextStore, StateAPI, Action } from '../StateAPI';
import HomeLayout from '../LayoutViews/HomeLayout';
import homejson from '../Database/home.json';

export default function HomeScene() {
    const { state, dispatch } :StateAPI = React.useContext(contextStore); 

    function handleOnPress() {
        alert('The state text was: ' + state.text);
        dispatch( Action.Test() );
    }

    return (
        <React.Fragment>
            <HomeLayout
                onButtonPress={handleOnPress}
                message={homejson.text}
            />
        </React.Fragment>
    );
}
