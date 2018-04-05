import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor() {
    super(); 
    this.state = {
      display: '0'
    }
  }

  digitValue(digit) {
  
    this.setState ({
      display: digit
    });
  }

    render() {
      return (
        <div>
          <div className='header'>
            <h1>Calculator</h1>
            <h3>Elite Level Online Problem Solving</h3>
          </div>
          <div className='calculator'>
            <div className='display'>
                <p>{this.state.display}</p>
            </div>
            <div className='numberButtons'>
              <button className='digit' onClick= {() => this.digitValue(1)}>1</button>
              <button className='digit' onClick= {() => this.digitValue(2)}>2</button>
              <button className='digit' onClick= {() => this.digitValue(3)}>3</button>
              <button className='digit' onClick= {() => this.digitValue(4)}>4</button>
              <button className='digit' onClick= {() => this.digitValue(5)}>5</button>
              <button className='digit' onClick= {() => this.digitValue(6)}>6</button>
              <button className='digit' onClick= {() => this.digitValue(7)}>7</button>
              <button className='digit' onClick= {() => this.digitValue(8)}>8</button>
              <button className='digit' onClick= {() => this.digitValue(9)}>9</button>
              <button className='digit' onClick= {() => this.digitValue(0)}>0</button>
              <button className='digit decimal'>.</button>
            </div>
            <div className='operatorButtons'>
              <button className='operator'>+</button>
              <button className='operator'>_</button>
              <button className='operator'>/</button>
              <button className='operator'>*</button>
              <button className='operator'>EXP</button>
              <button className='operator'>SQ</button>
              <button className='operator'>DEL</button>
            </div>
          </div>
        </div>
      )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
