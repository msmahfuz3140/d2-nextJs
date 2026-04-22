'use client';

import { useState } from "react";

const Counter = () => {
    const [count, setCount] = useState(0);
    return (
        <div>
            <h2 className="text-3xl">Counter: {count}</h2>
            <button className="btn" onClick={() => setCount(count + 1)}>
                Increment
            </button>
        </div>
    );
};

export default Counter;