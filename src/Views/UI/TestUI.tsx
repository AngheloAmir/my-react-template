/*
*/

const data = require('../../Database/sample.json');

interface receiveProps {
    onClick: () => void;
}

export default function TestUI(props :receiveProps) {
    return (
        <div style={{backgroundClip: 'red'}}>
            I am a TEST UI
            <br />
            The data in the database is: { data.data }
            <div style={{backgroundColor: 'green'}}
                onClick={props.onClick}>
                Press ME
            </div>
        </div>
    )
}
