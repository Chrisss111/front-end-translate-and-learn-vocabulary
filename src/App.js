import './App.css';
import React, { useState } from 'react';
import TextInput from './components/TextInput';
import Title from './components/Title';
import VocabListsListing from './components/VocabListsListing';
import DisplayedSavedVocabList from './components/DisplayedSavedVocabList';
import TranslatedPage from './components/TranslatedPage';
import Button from './components/Button';


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
  const [newVocabListName, setNewVocabListName] = useState('')

  let content = ''
  let modeTitle = ''
  let nameChangePageButton = '' 

  const changePageButtonClick = (props) => {
    if (nameChangePageButton === 'Saved Vocab Lists'){
      setAppMode(APP_MODES.vocabListsListing)

    } else if (nameChangePageButton === 'Homepage')
      setAppMode(APP_MODES.landingPage)
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
  };

  const textOnChange = (event) => {
    setText(event.target.value)
  };

  const onChangeSave = (event) => {
    setNewVocabListName(event.target.value)
  };

  const enterButtonClick = (event) => {
    setAppMode(APP_MODES.translatedPage)
  };

  const deleteListButtonClick = (props) => {
    setAppMode(APP_MODES.vocabListsListing)
  };

  const saveButtonClick = (props) => {
    alert('Your vocabulary list has been successfully saved')
  };

  if (appMode === APP_MODES.landingPage) {
    content = (<div>
    <TextInput enterButtonClick={enterButtonClick} textOnChange={textOnChange} languageDropdownMenuChange={languageDropdownMenuChange} dropdownLanguage={dropdownLanguage}/>
    </div>);
    modeTitle = 'TRANSLATE YOUR TEXT'
    nameChangePageButton = 'Saved Vocab Lists' 

  } else if (appMode === APP_MODES.displayedSavedVocabList) {
    content = (<div><DisplayedSavedVocabList goBackToListingsClick={goBackToListingsClick}
    selectedListID={selectedListID} deleteListButtonClick={deleteListButtonClick}></DisplayedSavedVocabList></div>)
    nameChangePageButton = 'Homepage' 

  } else if (appMode === APP_MODES.vocabListsListing) {
    content = (<div><VocabListsListing selectButtonClick={selectButtonClick}></VocabListsListing></div>)
    modeTitle = 'SAVED VOCABULARY LISTS'
    nameChangePageButton = 'Homepage' 

  } else if (appMode === APP_MODES.translatedPage) {
    content = (<div><TranslatedPage goBackToListingsClick={goBackToListingsClick} saveButtonClick={saveButtonClick} text={text} original_lang={dropdownLanguage} onChangeSave={onChangeSave} newVocabListName={newVocabListName}></TranslatedPage></div>)
    modeTitle = 'YOUR TEXT & TRANSLATED WORDS'
    nameChangePageButton = 'Homepage' 
    
  } else {
    throw "error";
    
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
