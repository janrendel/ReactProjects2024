import React from "react";
import BoilingBerdict from "./BoilingBerdict";

const scaleName = {
    c: "섭씨",
    f: "화씨"
}

function TemperatureInput(props) {


    const handleChange = (event) => {
        props.onTemperatureChange(event.target.value);
    }

    return (
        <fieldset>
            <legend>섭씨 온도를 입력하세요(단위:{scaleName[props.scale]}):</legend>
            <input type="text" value={props.temperature} onChange={handleChange}/>

        </fieldset>
    );
}

export default TemperatureInput;