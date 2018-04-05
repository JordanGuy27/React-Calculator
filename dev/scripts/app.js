import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor() {
    super(); 
    this.state = {
      display: '0'
    }
  }
    render() {
      return (
        <div>
          <div className='header'>
            <h1>Calculator</h1>
            <h3>Elite Level Online Problem Solving</h3>
          </div>
          <div className='calulator'>
            <div className='display'>
                <p>{this.state.display}</p>
            </div>
            <div className='numberButtons'>
              <button className='digit'>1</button>
              <button className='digit'>2</button>
              <button className='digit'>3</button>
              <button className='digit'>4</button>
              <button className='digit'>5</button>
              <button className='digit'>6</button>
              <button className='digit'>7</button>
              <button className='digit'>8</button>
              <button className='digit'>9</button>
              <button className='digit'>0</button>
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
