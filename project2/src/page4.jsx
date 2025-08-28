import React, { Component } from 'react'
import './CSS/page4.css'

export default class Page4 extends Component {
    menuClick(){
        const navList = document.getElementById("navList");
        navList.classList.toggle("active");
    }

  render() {
    return (
      <div>
        <header>
            <nav>
                <div className="logo">My Website</div>
                <ul id="navList">
                    <li>Home</li>
                    <li>About</li>
                    <li>Service</li>
                    <li>Contact</li>
                </ul>
                 <div className='menu' onClick={()=>this.menuClick()}>&#9776;</div>
            </nav>
        </header>

        <section>
            <h1>Welcome to Responsive Webpage</h1>
            <p>This is an example</p>
        </section>

        <footer>
            copyright @ 2025 All rights reserved.
        </footer>
      </div>
    )
  }
}
