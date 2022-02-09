import React from 'react';
import LanguageDropdown from './LanguageDropdown';
import { useState, useEffect } from 'react';
import axios from "axios";
import './TextInput.css'

const TextInput = (props) => {

  const [textInputVal, setTextInputVal] = useState("")

  const placeholder='\n1.) Copy and paste your text \n\n2.) Put an asterisk (*) in front of all the words you want translated \n\n3.) Select the language of the original text in the dropdown menu'

  const enterButton = (e) => {

    const textInputSplit = textInputVal.split(" ");
    let asteriskCount = 0;

    for (let i=0; i<textInputSplit.length; i++){
      if (textInputSplit[i].startsWith("*")){
        asteriskCount ++;
        break 
      }
    }
    // if (){
    //   alert("Please indicate with an * which words you would like translated")
  if (props.dropdownLanguage === "Select Language"){
      e.preventDefault()
      alert("Please indicate the original language of your text")

    } else if(asteriskCount===0){
      e.preventDefault()
      alert("Please indicate which word(s) you would like translated by placing an asterisk (*) in front of them")
    }
    else {
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
    setTextInputVal(event.target.value)
    console.log("in textinput component:")
    console.log(event.target.value);
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