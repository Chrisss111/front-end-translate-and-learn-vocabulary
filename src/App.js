import './App.css';
import axios from "axios";
import React, { useState, useEffect } from 'react';
import TextInput from './components/TextInput';
import Title from './components/Title';
import VocabListsListing from './components/VocabListsListing';
import DisplayedSavedVocabList from './components/DisplayedSavedVocabList';
import TranslatedPage from './components/TranslatedPage';
import LanguageDropdown from './components/LanguageDropdown';
import Words from './components/Words';
import Button from './components/Button';


// trying to figure out Google Trnalsate API:
// const apiKey = process.env.REACT_APP_GOOGLE_TRANSLATE_API_KEY;
// const projectId = 'zippy-brand-338723'

// const {Translate} = require('@google-cloud/translate').v2;
// const translate = new Translate({projectId});

// const text = 'Hello';
// const target = 'fr';

// async function translateText() {
//   let translations = await translate.translate(text, target);
//   translations = Array.isArray(translations) ? translations : [translations];
//   console.log('Translations:');
//   translations.forEach((translation, i) => {
//     console.log(`${text[i]} => (${target}) ${translation}`);
//   });
// }
// translateText();

const APP_MODES = {
  landingPage: "landingPage",
  translatedPage: "translatedPage",
  displayedSavedVocabList: "displayedSavedVocabList",
  vocabListsListing: "vocabListsListing"
};


function App() {

  const [appMode, setAppMode] = useState(APP_MODES.landingPage);
  const [selectedListID, setSelectedListID] = useState(null);
  const [text, setText] = useState('');
  const [dropdownLanguage, setDropDownLanguage] = useState('Select Language');


  let content = ''
  let modeTitle = ''
  let nameChangePageButton = '' 


  const changePageButtonClick = (props) => {
    if (nameChangePageButton === 'Saved Vocab Lists'){
      setAppMode(APP_MODES.vocabListsListing)
      console.log('test');

    } else if (nameChangePageButton === 'Homepage')
      setAppMode(APP_MODES.landingPage)
      // console.log(props.name)
      // translateText(); 
  }

  const goBackToListingsClick = (props) =>{
    setAppMode(APP_MODES.vocabListsListing)
  }

  const selectButtonClick = (id) => {
    setAppMode(APP_MODES.displayedSavedVocabList)
    setSelectedListID(id)
  };

  const languageDropdownMenuChange = (event) => {
    setDropDownLanguage(event.target.value)
    console.log(dropdownLanguage)
  }

  const textOnChange = (event) => {
    setText(event.target.value)
    console.log(text);
  }

  const enterButtonClick = (event) =>{
    setAppMode(APP_MODES.translatedPage)
    
  };

  const deleteListButtonClick = (props) =>{
    console.log("FROM APP")
    setAppMode(APP_MODES.vocabListsListing)
    
  };
  if (appMode === APP_MODES.landingPage) {
    content = (<div>
    <TextInput enterButtonClick={enterButtonClick} textOnChange={textOnChange} languageDropdownMenuChange={languageDropdownMenuChange} dropdownLanguage={dropdownLanguage}/>
    </div>);
    modeTitle = 'Landing Page'
    nameChangePageButton = 'Saved Vocab Lists' 

  } else if (appMode === APP_MODES.displayedSavedVocabList) {
    content = (<div><DisplayedSavedVocabList goBackToListingsClick={goBackToListingsClick}
    selectedListID={selectedListID} deleteListButtonClick={deleteListButtonClick}></DisplayedSavedVocabList></div>)
    // modeTitle = 'title of this specific vocab list' //this title pulled out of where keeping vocab list info
    nameChangePageButton = 'Homepage' 

    // displayed list component
  } else if (appMode === APP_MODES.vocabListsListing) {
    content = (<div><VocabListsListing selectButtonClick={selectButtonClick}></VocabListsListing></div>)
    modeTitle = 'Vocab Lists'
    nameChangePageButton = 'Homepage' 

  } else if (appMode === APP_MODES.translatedPage) {
    // ADD BUTTON TO SAVED VOCAB LISTS-LOOK AT WHAT DID FOR DISPLAYEDSAVEDLIST SECOND BUTTON (one to go to go back to saved listings)
    content = (<div><TranslatedPage goBackToListingsClick={goBackToListingsClick} text={text} original_lang={dropdownLanguage}></TranslatedPage></div>)
    modeTitle = 'Your Translated Words'
    nameChangePageButton = 'Homepage' 
    
  } else {
    throw "error";
    // error
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1 className='header-h1'>Translate and Build Vocabulary</h1>
          <Title text={modeTitle}></Title>
        <div>
        <Button name={nameChangePageButton} changePageButtonClick={changePageButtonClick}></Button>
        </div>

      </header>
      <main>{content}</main>
    </div>
  );
}

export default App;
