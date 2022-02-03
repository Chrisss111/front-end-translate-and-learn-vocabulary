import React from 'react';
import LanguageDropdown from './LanguageDropdown';
import { useState, useEffect } from 'react';
import axios from "axios";

const TextInput = (props) => {

  const enterButton = () => {
    props.enterButtonClick()
  };

  // const [value, setValue] = useState('');

  // console.log(value);

  const onChange = (event) => {
    // setValue(event.target.value);

    props.textOnChange(event)
    // const target = event.target;
    // const name = target.value;
    // console.log(name);
  };

    return <div>
      <h1>Please Input Your Text</h1>
      <form>
        <label> 
          Text: <textarea type="text" className='text-area'
          // value={value} 
          onChange={onChange}/>
        </label>
        {/* <LanguageDropdown></LanguageDropdown> */}
        <button onClick={enterButton}>Enter</button>
      </form>
    </div>
  };

export default TextInput;