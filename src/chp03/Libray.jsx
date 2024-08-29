import React from "react";
import Book from "./Book";

function Libray(props) {
    return(
        <div>
            <book name="처음 만난 파이썬" numOfPage={300}/>
            <book name="처음 만난 AWS" numOfPage={400}/>
            <book name="처음 만난 리액트" numOfPage={500}/>
        </div>
    )
}

export default Libray;