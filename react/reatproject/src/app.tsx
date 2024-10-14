import React from 'react';
import reactDOM from 'react-dom/client'
import './index';
import App from './App';



function greeting(){
    const name ="ahmed";
    return (
        <div>
            <h1> hello, {name}</h1>
        </div>
    );

}