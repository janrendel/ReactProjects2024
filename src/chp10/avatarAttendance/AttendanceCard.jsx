import React from "react";
import './AttendanceCard.css'
import img from './img.jpg'

const students =[
    {id:1, name:"윤이나", grade:2, major: "인공지능소프트웨어",avatar: "https://randomuser.me/api/portraits/women/1.jpg"},
    {id:2, name:"박현경", grade:3, major: "전기",avatar: "https://randomuser.me/api/portraits/men/2.jpg"},
    {id:3, name:"임희정", grade:3, major: "그린에너지",avatar: "https://randomuser.me/api/portraits/women/3.jpg"},
    {id:4, name:"유현주", grade:4, major: "시각디자인",avatar: "https://randomuser.me/api/portraits/women/4.jpg"},
    {id:5, name:"마다솜", grade:1, major: "인공지능소프트웨어",avatar: "https://randomuser.me/api/portraits/women/5.jpg"},
    {id:6, name:"박지영", grade:4, major: "경영",avatar: "https://randomuser.me/api/portraits/men/6.jpg"},
    {id:7, name:"정지원", grade:3, major: "체육",avatar: "https://randomuser.me/api/portraits/women/7.jpg"},
    {id:8, name:"이예원", grade:3, major: "물리",avatar: "https://randomuser.me/api/portraits/men/8.jpg"},
    {id:9, name:"이가을", grade:2, major: "물리",avatar: "https://randomuser.me/api/portraits/women/9.jpg"}
];
function AttedanceCard() {
    return(
        <div className={"attendance-container"}>
            <h2 className={"attendance-title"}>학생 사진 출석부</h2>
            <div className={"card-container"}>
                {
                    students.map((student=>
                    <div className={"student-card"}>
                        <img src={student.avatar} alt={student.name} className={"student-avatar"}/>
                        <div className={"student-info"}>
                            <h3>{student.name}</h3>
                            <p>{student.grade}학년 | {student.major}</p>
                        </div>
                    </div>
                    ))
                }
            </div>
        </div>
    );
}


export default AttedanceCard;