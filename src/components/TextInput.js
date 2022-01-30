import React from 'react';
import { useState, useEffect } from 'react';
import axios from "axios";

const TextInput = (props) => {

  const enterButton = () => {
    props.enterButterClick()
  };
    return <div>
      <h1>Please Input Your Text</h1>
      <form>
        <label>
          Text: <input type="text" className='input-box'/>
        </label>
        <button onClick={enterButton}>Enter</button>
      </form>
    </div>
  };

export default TextInput;