import React from 'react';
import LanguageDropdown from './LanguageDropdown';
import { useState, useEffect } from 'react';
import axios from "axios";
import './TextInput.css'

const TextInput = (props) => {

  const placeholder='\n1.) Copy and paste your text \n\n2.) Put an asterisk (*) infront of all the words you want translated \n\n3.) Select the language of the original text in the dropdown menu'

  const enterButton = (e) => {

    // if (){
    //   alert("Please indicate with an * which words you would like translated")
  if (props.dropdownLanguage === "Select Language"){
      e.preventDefault()
      alert("Please indicate the original language of your text")

    } else {
      props.enterButtonClick()
    }
    
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
      <h1 className='text-input-header'>Please Input Your Text:</h1>
      <form>
        <div className='textarea-div'>
        <textarea type="text" className='text-area'
          // value={value} 
          onChange={onChange} placeholder={placeholder} cols='60' rows='20'/>
          </div>
        <LanguageDropdown languageDropdownMenuChange={props.languageDropdownMenuChange} dropdownLanguage={props.dropdownLanguage}/>
        <button onClick={enterButton}>Enter</button>
      </form>
    </div>
  };

export default TextInput;