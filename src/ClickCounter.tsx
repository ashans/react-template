import React, { useState } from 'react'

const ClickCounter = () => {
    const [count, setCount] = useState(0)
    return (
        <div>
            <button onClick={() => setCount((val) => val + 1)}>
                Increment
            </button>
            <span>{count}</span>
        </div>
    )
}

export default ClickCounter
