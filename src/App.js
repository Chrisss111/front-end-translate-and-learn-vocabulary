import './App.css';
import React, { useState } from 'react';
import TextInput from './components/TextInput';
import Title from './components/Title';
import VocabListsListing from './components/VocabListsListing';
import DisplayedVocabList from './components/DisplayedVocabList';
import Words from './components/Words';
import Button from './components/Button';

// trying to figure out Google Trnalsate API:
// const {Translate} = require('@google-cloud/translate').v2;
// const translate = new Translate({zippy-brand-338723});

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
  displayedVocabList: "displayedVocabList",
  vocabListsListing: "vocabListsListing"
};


function App() {

  const [appMode, setAppMode] = useState(APP_MODES.landingPage);

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

  const selectButtonClick = (props) => {
    setAppMode(APP_MODES.displayedVocabList)
  };

  if (appMode === APP_MODES.landingPage) {
    content = (<div>
    <TextInput></TextInput>
    </div>);
    modeTitle = 'Landing Page'
    nameChangePageButton = 'Saved Vocab Lists' 

  } else if (appMode === APP_MODES.displayedVocabList) {
    content = (<div><DisplayedVocabList goBackToListingsClick={goBackToListingsClick}></DisplayedVocabList></div>)
    modeTitle = 'title of this specific vocab list' //this title pulled out of where keeping vocab list info
    nameChangePageButton = 'Homepage' 

    // displayed list component
  } else if (appMode === APP_MODES.vocabListsListing) {
    content = (<div><VocabListsListing selectButtonClick={selectButtonClick}></VocabListsListing></div>)
    modeTitle = 'Vocab Lists'
    nameChangePageButton = 'Homepage' 
  } else {
    throw "error";
    // error
  };

  return (
    <div className="App">
      <header className="App-header">
        Translate and Build Vocabulary
        <p>
          <Title text={modeTitle}></Title>
        </p>
        <div>
        <Button name={nameChangePageButton} changePageButtonClick={changePageButtonClick}></Button>
        </div>

      </header>
      <main>{content}</main>
    </div>
  );
}

export default App;
