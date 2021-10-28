/*
*/
import TestUI from "./UI/TestUI";

interface receiveProps {
    onClick: () => void;
}

export default function MainDesktop( props :receiveProps) {
    return (
        <div>
            <h1>You are at the desktop version</h1>
            <br />
            <TestUI onClick={props.onClick}/>
        </div>
    )
}
