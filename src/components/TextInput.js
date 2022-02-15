import React from 'react';
import LanguageDropdown from './LanguageDropdown';
import { useState } from 'react';
import './TextInput.css'

const TextInput = (props) => {

  const [textInputVal, setTextInputVal] = useState("")

  const placeholder = '\n1.) Copy and paste your text \n\n2.) Put an asterisk (*) in front of all the words you want translated \n\n3.) Select the language of the original text in the dropdown menu \n\n4.) Submit your text by clicking on the enter button'

  const enterButton = (e) => {
    e.preventDefault()
    const textInputSplit = textInputVal.split(" ");
    let asteriskCount = 0;

    for (let i = 0; i < textInputSplit.length; i++) {
      if (textInputSplit[i].startsWith("*")) {
        asteriskCount++;
        break
      }
    }


    if (props.dropdownLanguage === LanguageDropdown.defaultValue) {
      alert("Please indicate the original language of your text")

    } else if (asteriskCount === 0) {
      alert("Please indicate which word(s) you would like translated by placing an asterisk (*) in front of them")
    }
    else {
      props.enterButtonClick()
    }
  };

  const onChange = (event) => {
    props.textOnChange(event)
    setTextInputVal(event.target.value)
  };

  return <div className='text-input-container'>
    <h1 className='text-input-header'>Please Input Your Text:</h1>
    <form>
      <div className='textarea-div'>
        <textarea type="text" className='text-area'
          onChange={onChange} placeholder={placeholder} cols='60' rows='20' />
      </div>
      <LanguageDropdown languageDropdownMenuChange={props.languageDropdownMenuChange} dropdownLanguage={props.dropdownLanguage} />
      <button onClick={enterButton}>Enter</button>
    </form>
  </div>
};

export default TextInput;