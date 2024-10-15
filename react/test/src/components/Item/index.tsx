import React from "react";
import './index.css';

export default function Item() {
    return (
        <li>
            <label>
                <input type="checkbox"/>
                <span>item1</span>
            </label>
            <button className="btn btn-danger" style={{display: 'none'}}>Delete</button>
        </li>


    );


}

