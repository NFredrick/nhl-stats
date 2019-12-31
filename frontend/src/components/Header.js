import React from 'react';
import './Header.css'

export default function Header() {

    return (
        <div>
            <h1>NHL Statistics</h1>
            <ul>
                <li><a href="/home">Home</a></li>
                <li><a href="/standings">Standings</a></li>
                <li><a href="/stats">Stats</a></li>
                <li><a href="/teams">Teams</a></li>
            </ul>
        </div> 
    );
}
