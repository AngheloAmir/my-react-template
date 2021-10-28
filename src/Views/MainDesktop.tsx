/*
*/
import TestUI from "./UI/TestUI";

interface receiveProps {
    onClick: () => void;
}

const sample = require('../Database/sample.json');
export default function MainDesktop( props :receiveProps) {
    return (
        <div>
            <h1>{sample.desktop_message}</h1>
            <br />
            <TestUI onClick={props.onClick}/>
        </div>
    )
}
