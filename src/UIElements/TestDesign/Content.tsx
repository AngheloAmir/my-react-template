/*
    A test UI component.
    All components in the UIElements folder should be REUSABLE!
*/
import React from 'react';

export default function Content( {onButtonPress, message} :any) {
    return (
        <React.Fragment>
            A content will be displayed here. This page is responsive.
            <br />
            <button onClick={onButtonPress}>Click Me</button>
            <h3>The message was: </h3> {message}
        </React.Fragment>
    )
}