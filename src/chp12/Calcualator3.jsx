import React, {useState} from "react";
import TemperatureInput from "./TemperatureInput";
import BoilingBerdict from "./BoilingBerdict";
import Boilingverdict from "./Boilingverdict";

// 화씨를 섭씨로 변경해서 반환
function toCelsius(fahreheit) {
    return (fahreheit-32) * 5 / 9;
}

// 섭씨를 화씨로 변겨해서 반환
function toFahreheit(celsiue) {
    return celsiue * 9 / 5 + 32;
}

function tryConvert(tempoerature, convert) {
    const input = parseFloat(tempoerature);
    if(Number.isNaN(input)){
        return "";
    }

    const output = convert(input);
    const rounded = Math.round(output * 1000)/1000;
    return rounded.toString();
}

function Calcualator3(props) {
    const [temperature, setTemperature] = useState('');
    const [scale, setScale] = useState('c');

    const handleCelsiusChange = (temperature) => {
        setTemperature(temperature);
        setScale("c");
    }

    const handleFahreheitChange = (temperature) => {
        setTemperature(temperature);
        setScale("f");
    }

    const celsiue = scale === "f" ? tryConvert(temperature,toCelsius) : temperature;
    const fahreheit = scale === "c" ? tryConvert(temperature,toFahreheit) : temperature;


    return(
        <div>
            <TemperatureInput scale="c" temperature={celsiue} onTemperatureChange={handleCelsiusChange}/>
            <TemperatureInput scale="f" temperature={fahreheit} onTemperatureChange={handleFahreheitChange}/>
            <Boilingverdict celsius={parseFloat(temperature)} />
        </div>
    );
}
export default Calcualator3;