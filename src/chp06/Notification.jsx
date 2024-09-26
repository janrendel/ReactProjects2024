import React from "react";
import "./Notification.css"
// const styles = {
//     wrapper: {
//         margin: 8,
//         padding: 8,
//         display: "flex",
//         flexDirection: "row",
//         border: "1px solid grey",
//         borderRadius: 16,
//     },
//     messageText: {
//         color: "magenta",
//         fontsize: 16,
//     },
// };

class Notification extends React.Component{
    constructor(props) {
        super(props);
        // Component가 생성될 때 props를 전달 받을 수 있는 매계변수를 갖는 생성자가 호출된다.
        this.state = {

        };
    }

    componentDidMount() {
        console.log(`${this.props.id} : componentDidMount() called`);
    }

    componentDidUpdate(){
        console.log(`${this.props.id} :componentDidUpdate() called`);
    };
    componentWillUnmount(){
        console.log(`${this.props.id} :componentDidUpdate() called`);
    }

    render() {
        return(
            <div className="wrapper">
                <span className="messageText">
                    {this.props.message}
                </span>
            </div>
        );
    }
}

export default Notification;