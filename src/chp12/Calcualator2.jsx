import React, {useState} from "react";
import TemperatureInput from "./TemperatureInput";

function Calcualator(props) {


    return(
        <div>
            <TemperatureInput scale="c"/>
            <TemperatureInput scale="f"/>
        </div>
    );
}
export default Calcualator;