/*
*/
import TestUI from "./UI/TestUI";

interface receiveProps {
    onClick: () => void;
}

export default function MainMobile( props :receiveProps) {
    return (
        <div>
            <h1>You are at the MOBILE version</h1>
            <br />
            <TestUI onClick={props.onClick}/>
        </div>
    )
}
