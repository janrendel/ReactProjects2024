import React from "react";
import styles from "./DistanceConverter.module.css";

const unitName = {
    km: "킬로미터",
    mile: "마일"
}

function DistanceInput(props) {
    const handleChange = (event) => {
        props.onDistanceChange(event.target.value);
    }

    return(
        <div class={styles.inputField}>
            <legend>
                {unitName[props.unit]} 입력:
            </legend>
            <input value={props.distance} onChange={handleChange} placeholder={`${unitName[props.unit]} 단위로 입력해주세요.`}/>
        </div>
    );
}
export default DistanceInput;