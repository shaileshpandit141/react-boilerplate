import React from 'react';
import './App.css';


// Default Custom React Home Page.
function DefaultReactHome() {
    return (
        <div className="App">
            <h2>
                Welcome! to React Boilerplate.
            </h2>
        </div>
    )
}


export default function App() {
    return (
        <DefaultReactHome />
    );
}

