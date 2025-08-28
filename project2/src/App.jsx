import { useState } from 'react'
import './App.css'
import { Link } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Welcome to Frontend Class in KLU</h1>
      <h2>Todays topic is Introduction to React</h2>
      <h3>Today's Date is 24-07-2025</h3>
      {/* <Link to="/page1">Go To Page1</Link> */}
      <div className="align">
          <div className="card">
            <img src = "./images/RollsRoyce.jpg" alt = ""/>
            <Link to = "/page1">Go To Page1</Link>  
          </div>
          <br></br>
          <br></br>
          <div className="card">
              <img src="./images/RollsRoyce.jpg" alt=""></img>
              <Link to="/page2">Go to Page2</Link>
          </div>
          <br></br>
          <br></br>
          <div className="card">
              <img src="./images/RollsRoyce.jpg" alt=""></img>
              <Link to="/page3">Go to Page3</Link>
          </div>
          <br></br>
          <br></br>
          <div className="card">
              <img src="./images/RollsRoyce.jpg" alt=""></img>
              <Link to="/page4">Go to Page4</Link>
          </div>
          <br></br>
          <br></br>
          <div className="card">
              <img src="./images/RollsRoyce.jpg" alt=""></img>
              <Link to="/page5">Go to Page5</Link>
          </div>
          <br></br>
          <br></br>
          <div className="card">
              <img src="./images/RollsRoyce.jpg" alt=""></img>
              <Link to="/page6">Go to Page6</Link>
          </div>
      </div>
    </>
  )
}

export default App
