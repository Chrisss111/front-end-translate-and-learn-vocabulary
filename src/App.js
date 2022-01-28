import './App.css';
import React, { useState } from 'react';
import TextInput from './components/TextInput';
import Title from './components/Title';
import VocabListsListing from './components/VocabListsListing';
import Words from './components/Words';
import Button from './components/Button';

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
  if (appMode === APP_MODES.landingPage) {
    content = (<div>

    <TextInput></TextInput>
    </div>);
    modeTitle = 'Landing Page'
    nameChangePageButton = 'Saved Vocab Lists' 

  } else if (appMode === APP_MODES.displayedVocabList) {
    // ***this page has 2 Button compenents with different nameChangeButton values, how handle it?
    content = (<div><h1>displayed vocab list mode</h1></div>)
    modeTitle = 'titled pulled out of where keeping vocab list info'
    nameChangePageButton = 'Homepage' 

    // displayed list component
  } else if (appMode === APP_MODES.vocabListsListing) {
    content = (<div><VocabListsListing></VocabListsListing></div>)
    modeTitle = 'Vocab Lists'
    nameChangePageButton = 'Homepage' 
  } else {
    throw "error";
    // error
  };

  // setAppMode(APP_MODES.vocabListsListing);
  // if (appMode === APP_MODES.displayedVocabList) {
  // // do something
  // }

  // const [appMode, setAppMode] = useState('landingPage');

  // other modes="displayedVocabList", "VocabListsListing" - will determine what components are displayed("translatedPage"-but is very similar to displayedvocab list so would be doing almost same component twice)
  const changePageButtonClick = () => {
    if (nameChangePageButton === 'Saved Vocab Lists'){
      setAppMode(APP_MODES.vocabListsListing)
    // in future can do if statements depending on where are and where want to go
      console.log('test');
    } else if (nameChangePageButton === 'Homepage')
      setAppMode(APP_MODES.landingPage)
    
  }
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
