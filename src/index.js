import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import './chp05/Comment.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import NotificationList from "./chp06/NotificationList";
//import ConfirmDialog from "./chp04/ConfirmDialog";
//import Clock from "./chp04/Clock";
//import Comment from "./chp05/Comment";

const root = ReactDOM.createRoot(document.getElementById('root'));
 root.render(
        <React.StrictMode>
            <NotificationList />
        </React.StrictMode>
        );
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();