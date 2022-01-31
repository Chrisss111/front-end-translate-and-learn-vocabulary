import React from 'react';
import LanguageDropdown from './LanguageDropdown';
import { useState, useEffect } from 'react';
import axios from "axios";

const TextInput = (props) => {

  const enterButton = () => {
    props.enterButtonClick()
  };

  const [value, setValue] = useState('');

  const onChange = (event) => {
    setValue(event.target.value);
    console.log(value)
  };

    return <div>
      <h1>Please Input Your Text</h1>
      <form>
        <label> 
          Text: <input type="text" className='input-box'value={value} onChange={onChange}/>
        </label>
        <LanguageDropdown></LanguageDropdown>
        <button onClick={enterButton}>Enter</button>
      </form>
    </div>
  };

export default TextInput;