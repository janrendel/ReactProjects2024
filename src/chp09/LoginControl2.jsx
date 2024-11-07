import React,{useState} from "react";
import LoginButton from "./LoginButton";
import LoginoutButton from "./LoginoutButton";
import Greeting from "./Greeting";
import WarningBanner from "./WarningBanner";

function loginControl2(props) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLoginClick=() =>{
        setIsLoggedIn(true);
    }
    const handleLogoutClick=() =>{
        setIsLoggedIn(false);
    }

    return(
        <div>
            <WarningBanner warning={true} />
            <Greeting isLoggedIn={isLoggedIn}/>
            {
                isLoggedIn?
                <LoginoutButton onClick={handleLogoutClick}/> :
                <LoginButton onClick={handleLoginClick} />
            }
        </div>
    );
}
export default loginControl2;