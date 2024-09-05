import Reack from "react";

function Clock(props) {
    return (
        <div>
            <h1>Clock Test</h1>
            <div>{new Date().toLocaleTimeString()}</div>
        </div>
    );
}

export default Clock;