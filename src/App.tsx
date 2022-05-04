import React from 'react'
import './styles.css'
import IMAGE from './img.jpg'
import ClickCounter from './ClickCounter'

const App = () => {
    return (
        <>
            <img src={IMAGE} alt="react log" />
            <h1>React typescript templates</h1>
            <h2>Environment - {process.env.NODE_ENV}</h2>
            <h3>Environment - {process.env.name}</h3>
            <ClickCounter />
        </>
    )
}

export default App
