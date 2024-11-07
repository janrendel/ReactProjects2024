import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import './chp05/Comment.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import NotificationList from "./chp06/NotificationList";
import Accommodate from "./chp07/Accommodate";
import Toggle from "./chp08/Toggle";
import MyButton from "./chp08/MyButton";
import Toggle2 from "./chp08/Toggle2";
import Connter from "./chp08/Connter";
import ClickButton from "./chp08/ClickButton";
import InputTest from "./chp08/InputTest";
import ConfirmButton from "./chp08/ConfirmButton";
import ConfirmButton2 from "./chp08/ConfirmButton2";
import ConfirmButton3 from "./chp08/ConfirmButton3";
import Greeting from "./chp09/Greeting";
//import ConfirmDialog from "./chp04/ConfirmDialog";
//import Clock from "./chp04/Clock";
//import Comment from "./chp05/Comment";

const root = ReactDOM.createRoot(document.getElementById('root'));
 root.render(
        <React.StrictMode>
            <loginControl/>
        </React.StrictMode>
        );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();