/* eslint-disable */
import React, { useState } from "react";
import logo from './apps_R_us.png'

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
                <p class="High">We promise we won't go bankrupt!</p>
            </header>
            {
                Object.keys(subteamMapping)
                    .map(team => <ProfileSection subteam={team} dataList={subteamMapping[team]} />)
            }
            <br />
            <p style={{color:"gray", fontSize:"7px"}}>Copyright APPS R US 2022<br></br>Unauthorized use of the APPS R US logo may result in heavy fines, imprisonment, and death. </p>
        </div>
    );
}

export default App;
