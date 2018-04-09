import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      display: '0',
      waitingForExecution: false,
      operator: null,
      numberTotal: null
    }
  }

  inputDecimal() {
    if (this.state.waitingForExecution) {
      this.setState({
        display: '.',
        waitingForExecution: false
      })
    } else if (this.state.display.indexOf('.') === -1) {
      this.setState ({
        display: this.state.display + '.',
        waitingForExecution: false
      })
    }
  }

  clearNumbers() {
    this.setState ({
      display: '0'
    })
  }

  digitValue(digit) {
    if (this.state.waitingForExecution) {
      this.setState({
        display: String(digit),
        waitingForExecution: false
      })
    } else {
        this.setState ({
          display:this.state.display === '0' ? String(digit) : this.state.display + digit,
          waitingForExecution: false
        });
      }
  }

  executeEquation(nextOperator) {

    const secondNumber = parseFloat(this.state.display)

    const operationsPerforming = {
      '+': (firstNumber, secondNumber) => firstNumber + secondNumber,
      '-': (firstNumber, secondNumber) => firstNumber - secondNumber,
      '/': (firstNumber, secondNumber) => firstNumber / secondNumber,
      '*': (firstNumber, secondNumber) => firstNumber * secondNumber,
      '=': (firstNumber, secondNumber) => secondNumber,
      '^': (firstNumber, secondNumber) => firstNumber * firstNumber,
      '√': (firstNumber, secondNumber) => Math.sqrt(firstNumber)
    }

    if (this.state.numberTotal == null) {
      this.setState ({
        numberTotal: secondNumber
      })
    } else if (this.state.operator) {
      const value = this.state.numberTotal || 0
      const newValue = operationsPerforming[this.state.operator](value, secondNumber)

      this.setState({
        numberTotal: newValue,
        display: String(newValue)
      })
    }


    this.setState({
      waitingForExecution: true,
      operator: nextOperator
    })
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
                <p>{this.state.numberTotal}{this.state.operator}</p>
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
              <button className='digit' onClick={() => this.inputDecimal()}>.</button>
            </div>
            <div className='operatorButtons'>
              <button className='operator' onClick={() => this.executeEquation('+')}>+</button>
              <button className='operator' onClick={() => this.executeEquation('-')}>-</button>
              <button className='operator' onClick={() => this.executeEquation('/')}>/</button>
              <button className='operator' onClick={() => this.executeEquation('*')}>*</button>
              <button className="operator" onClick={() => this.executeEquation('=')}>=</button>
              <button className='operator' onClick={() => this.executeEquation('^')}>EXP</button>
              <button className='operator' onClick={() => this.executeEquation('√')}>SQ</button>
              <button className='operator' onClick={() => this.clearNumbers()}>CLEAR</button>
              <button className='operator'>DEL</button>
            </div>
          </div>
        </div>
      )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
