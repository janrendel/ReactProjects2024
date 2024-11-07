import React from "react";

function warningBanner(props) {
    if (props.warning){
        return null;
    }
    return <h2>경고!!!</h2>
}
export default warningBanner;