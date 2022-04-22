/* eslint-disable */
import React, { useState } from "react";
import logo from './logo.png'

import "./App.css";
import { android, ios, marketing, design, backend } from "./data";
import ProfileSection from "./profileSection";

function App() {
    let subteamMapping = {
        "Backend": backend,
        "Android": android,
        "iOS": ios,
        "Marketing": marketing,
        "Design": design,
    }

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>Welcome to AppDev :)</p>
            </header>
            {
                Object.keys(subteamMapping)
                    .map(team => <ProfileSection subteam={team} dataList={subteamMapping[team]} />)
            }
            <br />
        </div>
    );
}

export default App;
