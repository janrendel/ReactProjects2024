import React from "react";
import {type} from "@testing-library/user-event/dist/type";

function InputTest() {
    function handleChang(event) {
        console.log("입력된 값: ", event.target.value)
    }

    return(
        <input type="text" onChange={handleChang} placeholder="임의의 문자열을 입력해주세요."/>

    );
}
export default InputTest