import React, { Component } from 'react';
import "./CSS/Page6.css";

export default class Page6 extends Component {
  render() {
    return (
        <>
            <div id="header">
                <div className="logo">
                    My Project Logo
                </div>
            </div>
            <div id="section">
                <div className="card">
                        <img src="./images/RollsRoyce.jpg" alt="RollsRoyce"></img>
                        <label>RollsRoyce</label>
                </div>
                <div className="card">
                        <img src="./images/RollsRoyce.jpg" alt="RollsRoyce"></img>
                        <label>RollsRoyce</label>
                </div>
                <div className="card">
                        <img src="./images/RollsRoyce.jpg" alt="RollsRoyce"></img>
                        <label>RollsRoyce</label>   
                </div>
            </div>
            <div id="footer">Everyone!</div>
        </>
    )
  }
}
