import React, { useState, useEffect } from "react";
export default function CountButton2() {
    let [count, setCount] = useState(0);

    function handleClick() {
        setCount(count + 2);
    }

    useEffect(() => {
        if (count > 10) {
            setCount(0);
        }
    }, [count]);

    return (
        <>
            <button onClick={handleClick}>+2</button>
            <div>{count}</div>
        </>
    );
}