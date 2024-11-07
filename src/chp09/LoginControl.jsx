import React,{useState} from "react";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import LoginoutButton from "./LoginoutButton";
import Greeting from "./Greeting";

function loginControl(props) {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLoginClick=() =>{
        setIsLoggedIn(true);
    }
    const handleLogoutClick=() =>{
        setIsLoggedIn(false);
    }

    let btn;
    if(isLoggedIn){
        btn = <LoginoutButton onClick={handleLogoutClick()}/>
    }else{
        btn = <LoginButton onClick={handleLoginClick()}/>
    }

    return(
        <div>
            <Greeting isLoggedIn={isLoggedIn}/>
            {btn}
        </div>
    );
}
export default loginControl;