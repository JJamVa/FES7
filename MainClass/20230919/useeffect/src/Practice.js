import React, { useState, useEffect } from "react";

function Time() {
    const [today, setToday] = useState(new Date());
    const hour = today.getHours();
    const min = today.getMinutes();
    const sec = today.getSeconds();

    useEffect(() => {
        const interval = setInterval(() => {
            setToday(new Date());
        }, 1000);
        return () => clearInterval(interval);
    }, [today]);

    return (
        <div>
            <h1>
                시간 : {hour}시 {min}분 {sec}초
            </h1>
        </div>
    );
}

function Practice() {
    return (
        <div>
            <Time />
        </div>
    );
}

export default Practice;