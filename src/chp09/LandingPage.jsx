import React,{useState} from "react";

function LandingPage(props) {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const onClickLogin = ()=>{
        setIsLoggedIn(true);
    }
    const onClickLogout = ()=>{
        setIsLoggedIn(false);
    }

    return(
        <div>
            <toolbar isLoggedIn={isLoggedIn} onClickLogin={onClickLogin} onClickLogout={onClickLogout}/>
            <div style={{padding:16}}>
                리엑트 공부 참 재미있어요
            </div>
        </div>
    );
}
export default LandingPage;