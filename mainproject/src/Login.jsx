import React, { Component } from 'react'
import './css/login.css'
import { Link } from 'react-router-dom'
export default class Login extends Component {
  render() {
    return (
      <div className="login">
            <div className="leftPanel">
                <h2>Welcome to S201 ERP Project</h2>
                <p>Check all the ERp options here</p>
            </div>
            <div className="rightPanel">
                <div className="card">
                    <input type="text" placeholder="Enter the Username"></input>
                    <input type="password" placeholder="Enter the Password"></input>
                    <button>Login</button>
                    <p> Don't have an account?<span><Link to="/signup" >Sign Up</Link></span></p>
                </div>
            </div>
      </div>
    )
  }
}
