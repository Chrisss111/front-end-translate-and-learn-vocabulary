import React from 'react';
import { useState, useEffect } from 'react';

const LanguageDropdown = (props) => {

  // const [dropdownLanguage, setDropDownLanguage] = useState("Lang of Your Text");

  // const [value, setValue] = useState('');

  // console.log("Language Dropdown Console.log:")
  // console.log(dropdownLanguage)

  const languageDropdownMenu = (event) => {
    props.languageDropdownMenuChange(event)
    // setValue(event.target.value);
    // setDropDownLanguage(event.target.value);
    
    
    
  };

  return <div><select className="language-dropdown-menu"
  value={props.dropdownLanguage} 
  onChange={languageDropdownMenu} 
  >
  <option className="language-dropdown-option" value="Select Your Language">Select Your Language</option>
  <option className="language-dropdown-option" value="fr">French</option>
  <option className="language-dropdown-option" value="es">Spanish</option>
  <option className="language-dropdown-option" value="de">German</option>
  <option className="language-dropdown-option" value="el">Greek</option>
  <option className="language-dropdown-option" value="it">Italian</option>
  <option className="language-dropdown-option" value="ar">Arabic</option>
  <option className="language-dropdown-option" value="nl">Dutch</option>
</select>
</div>
};

export default LanguageDropdown;

