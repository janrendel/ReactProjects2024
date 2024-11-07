import React from "react";
import button from "../chp04/Button";

function LoginButton(props) {
        return(
            <button onClick={props.onClick}>로그인</button>
        );
}
export default LoginButton;