import React, { useState, useEffect } from "react";
export default function CountButton() {
    let [count, setCount] = useState(0);

    function handleClick() {
        setCount(count + 1);
    }

    useEffect(() => {
        if (count > 10) {
            setCount(0);
        }
    }, [count]);

    return (
        <>
            <button onClick={handleClick}>+1</button>
            <div>{count}</div>
        </>
    );
}