import React from 'react';
import LanguageDropdown from './LanguageDropdown';
import { useState, useEffect } from 'react';
import axios from "axios";
import './TextInput.css'

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

    return <div className='text-input-container'>
      <h1>Please Input Your Text</h1>
      <form>
        <textarea type="text" className='text-area'
          // value={value} 
          onChange={onChange} placeholder='type in your words to be translated' cols='60' rows='20'/>
        <LanguageDropdown languageDropdownMenuChange={props.languageDropdownMenuChange} dropdownLanguage={props.dropdownLanguage}/>
        <button onClick={enterButton}>Enter</button>
      </form>
    </div>
  };

export default TextInput;