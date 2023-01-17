import React, { useState } from 'react';
import calculate from '../logic/calculate';
import './Calculator.css';

const Calculator = () => {
  const [display, newDisplay] = useState({ total: 0, next: null, operation: null });

  const buttonClicked = (event) => {
    const btnName = event.target.innerText;
    const answer = calculate(display, btnName);
    newDisplay(answer);
  };

  const { total, next, operation } = display;

  return (
    <div className="calPage">
      <div className="calculator">
        <div className="calculator__wrap">
          <div className="calculator__display">
            {total}
            {operation}
            {next}
          </div>
          <div className="calculatorUI">
            <button type="button" onClick={buttonClicked} value="clear">AC</button>
            <button type="button" onClick={buttonClicked} value="pos-neg">+/-</button>
            <button type="button" onClick={buttonClicked} value="%">%</button>
            <button type="button" onClick={buttonClicked} value="/" className="btn--opaque">÷</button>
            <button type="button" onClick={buttonClicked} value="7">7</button>
            <button type="button" onClick={buttonClicked} value="8">8</button>
            <button type="button" onClick={buttonClicked} value="9">9</button>
            <button type="button" onClick={buttonClicked} value="x" className="btn--opaque">x</button>
            <button type="button" onClick={buttonClicked} value="4">4</button>
            <button type="button" onClick={buttonClicked} value="5">5</button>
            <button type="button" onClick={buttonClicked} value="6">6</button>
            <button type="button" onClick={buttonClicked} value="-" className="btn--opaque">-</button>
            <button type="button" onClick={buttonClicked} value="1">1</button>
            <button type="button" onClick={buttonClicked} value="2">2</button>
            <button type="button" onClick={buttonClicked} value="3">3</button>
            <button type="button" onClick={buttonClicked} value="+" className="btn--opaque">+</button>
            <button type="button" onClick={buttonClicked} value="0" className="btn--large">0</button>
            <button type="button" onClick={buttonClicked} value=".">.</button>
            <button type="button" onClick={buttonClicked} value="=" className="btn--opaque">=</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
