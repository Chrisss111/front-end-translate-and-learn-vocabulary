import React from 'react';

const LanguageDropdown = (props) => {

  const languageDropdownMenu = (event) => {
    props.languageDropdownMenuChange(event)
  };

  return <div><select className="language-dropdown-menu"
  value={props.dropdownLanguage} 
  onChange={languageDropdownMenu} 
  >
  <option className="language-dropdown-option" value="select-language">Select Language</option>
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

