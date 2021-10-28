/*
*/
import TestUI from "./UI/TestUI";

interface receiveProps {
    onClick: () => void;
}

const sample = require('../Database/sample.json');
export default function MainMobile( props :receiveProps) {
    return (
        <div>
            <h1>{sample.mobile_message}</h1>
            <br />
            <TestUI onClick={props.onClick}/>
        </div>
    )
}
