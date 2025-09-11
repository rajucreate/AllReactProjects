import React, { Component } from 'react'

export default class App extends Component {

  constructor(p){
    super(p);
    this.state={
      expression: "",
      result: ""
    };
  }

  calculate = () =>{
    try{
      const result = ecal(this.state.expression);
      this.setState({ result });
    }
    catch(err){ 
      this.setState({result:"Enter valid expression"});
    }
  }


  render() {
    return (
      <>
        <header>
          <h1>Simple Calculator</h1>
        </header>
        <section>
          <div className="calculator">
            <input 
              type="text" 
              placeholder="Enter expression" 
              value={this.state.expression}
              onChange={this.handleChange}
            />
            <button onClick="this.calculate">Calculate</button>
            <div className="result">Result: {this.state.result} </div>
          </div>
        </section>
        
        <footer>
          <h1>Have Fun !!!</h1>
        </footer>
      </>
    )
  }
}
