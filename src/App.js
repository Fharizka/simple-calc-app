import React, { useState } from "react";
import './css/style.css';

function App() {
  const[num1, setNum1] = useState(0);
  const[num2, setNum2] = useState(0);
  const[num3, setNum3] = useState(0);
  const[total, setTotal] = useState(0);
  const[checkBox, setCheckBox] = useState(false);
  const[checkBox2, setCheckBox2] = useState(false);
  const[checkBox3, setCheckBox3] = useState(false);

  

  function plusOperation() {
    if (num1 && num2 && num3 !==0) {
      setTotal(num1 + num2 + num3)
    } else if (num1 !== 0 && num2 !== 0) {
      setTotal (num1 + num2)
    } else if (num2 !== 0 && num3 !== 0) {
      setTotal (num2 + num3)
    } else if (num1 !== 0 && num3 !== 0) {
      setTotal (num1 + num3)
    } else {
      alert("you need to input 2 value")
    }
  }

  function minusOperation() {
    if (num1 && num2 && num3 !==0) {
      setTotal(num1 - num2 - num3)
    } else if (num1 !== 0 && num2 !== 0) {
      setTotal (num1 - num2)
    } else if (num2 !== 0 && num3 !== 0) {
      setTotal (num2 - num3)
    } else if (num1 !== 0 && num3 !== 0) {
      setTotal (num1 - num3)
    } else {
      alert("you need to input 2 value, and value must not 0")
    }
  }

  function timesOperation() {
    if (num1 && num2 && num3 !==0) {
      setTotal(num1 * num2 * num3)
    } else if (num1 !== 0 && num2 !== 0) {
      setTotal (num1 * num2)
    } else if (num2 !== 0 && num3 !== 0) {
      setTotal (num2 * num3)
    } else if (num1 !== 0 && num3 !== 0) {
      setTotal (num1 * num3)
    } else {
      alert("you need to input 2 value, and value must not 0")
    }
  }

  function devidedOperation() {
    if (num1 && num2 && num3 !==0) {
      setTotal(num1 / num2 / num3)
    } else if (num1 !== 0 && num2 !== 0) {
      setTotal (num1 / num2)
    } else if (num2 !== 0 && num3 !== 0) {
      setTotal (num2 / num3)
    } else if (num1 !== 0 && num3 !== 0) {
      setTotal (num1 / num3)
    } else {
      alert("you need to input 2 value, and value must not 0")
    }
  }

  function check1(e) {
    setNum1(+e.target.value)
    if (+e.target.value !== 0) {
      setCheckBox(true)
    } else {
      setCheckBox(false)
    }
  }

  function check2(e) {
    setNum2(+e.target.value)
    if (+e.target.value !== 0) {
      setCheckBox2(true)
    } else {
      setCheckBox2(false)
    }
  }

  function check3(e) {
    setNum3(+e.target.value)
    if (+e.target.value !== 0) {
      setCheckBox3(true)
    } else {
      setCheckBox3(false)
    }
  }


  return(
    <>
      <div className="calculator">
        
        <h1>Nusantech - Syifa</h1>
        <div className="input">
        <input id="isiAngka" type="number" className="numInput" onChange={e => check1(e)} />
        <input id="checkBox" type="checkbox" class="checkBox" checked={checkBox} />
        
        <br />
        <input type="number" className="numInput" onChange={e => check2(e)}></input>
        <input type="checkbox" className="checkBox"checked={checkBox2}/>
        <br />
        <input type="number" className="numInput" onChange={e => check3(e)}></input>
        <input type="checkbox" className="checkBox"checked={checkBox3} />
        </div><br />

        <div class="keys">
            <button id="plusButton" value="+" className="operator" onClick={plusOperation}> + </button>
            <button id="minus" value="-" className="operator" onClick={minusOperation}> - </button>
            <button id="times" value="*" className="operator" onClick={timesOperation}> x </button>
            <button id="devide" value="/" className="operator" onClick={devidedOperation}> / </button>
        </div>

        <hr />
        <p>Result : {total} </p>

      </div>
    </>
  )

}

export default App