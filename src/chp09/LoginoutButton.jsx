import React from "react";
import button from "../chp04/Button";

function LoginoutButton(props) {
        return(
            <button onClick={props.onClick}>로그아웃</button>
        );
}
export default LoginoutButton;