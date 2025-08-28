import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './CSS/Page1.css'

export default class Page1 extends Component {
  render() {
    return (
      <div className="page1">
        <h1 className='heading'>Hello Welcome to page1</h1>
        <Link to="/page2">Go to Page2</Link>
        <br></br>
        <br></br>
        <Link to="/">Go to home</Link>
      </div>
    )
  }
}
