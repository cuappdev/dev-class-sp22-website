/* eslint-disable */
import React, { useState, useEffect } from "react";
import { Animated } from "react-animated-css";
import WOW from 'wowjs';
import logo from './apps_R_us.png'

import "./App.css";
import { android, ios, marketing, design, backend } from "./data";
import ProfileSection from "./profileSection";

function App() {
    useEffect(() => {
        new WOW.WOW({
            live: false
        }).init();
    }, [])

    let subteamMapping = {
        "Backend": backend,
        "Android": android,
        "iOS": ios,
        "Marketing": marketing,
        "Design": design,
    }

    return (
        <>
            <head>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"></link>
            </head>
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p class="High">We promise we won't go bankrupt!</p>
                </header>
                <br />
                {
                    Object.keys(subteamMapping)
                        .map(team =>
                        (
                            <div className="wow zoomInUp"><ProfileSection subteam={team} dataList={subteamMapping[team]} /></div>
                        )
                        )
                }
                <br />
                <p style={{ color: "gray", fontSize: "7px" }}>Copyright APPS R US 2022<br></br>Unauthorized use of the APPS R US logo may result in heavy fines, imprisonment, and death. </p>
            </div>
        </>
    );
}

export default App;
