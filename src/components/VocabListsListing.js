import React from 'react';
import Button from './Button';

const VocabListsListing = (props) => {

  const selectButton = () => {
    props.selectButtonClick(props.id);
    console.log("test select button")
  };

  return <div><h1>Select the vocabulary list you would like to review</h1>
  {/* Name of vocab list-think have to use hook/state to make them appear based on what backend API request says */}
  <div>
    <p>{props.vocabListName}</p>
    <button onClick={selectButton}>Select</button>
  {/* <Button title='Select'>{props.title}</Button> */}
  </div>
  </div>;
};
VocabListsListing.defaultProps  = {
    vocabListName: '1. Test Vocab List'
};
export default VocabListsListing;

// rafce-basic component structure
