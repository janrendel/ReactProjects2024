import React,{useState} from "react";

// 커스텀(사용자 정의) 훅
function useCounter(initialvalue) {
    const [count, setCount] = useState(initialvalue);

    const increaseCount = () => {
        setCount((count) => count +1);
    }
    const decreaseCount = () => {
        setCount((count) => Math.max(count - 1, 0));
    }

    return [count, increaseCount, decreaseCount];
}


export default useCounter;