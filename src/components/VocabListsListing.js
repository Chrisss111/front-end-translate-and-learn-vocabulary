import React from 'react';
import Button from './Button';

const VocabListsListing = (props) => {
  return <div><h1>Select the vocabulary list you would like to review</h1>
  {/* Name of vocab list-think have to use hook/state to make them appear based on what backend API request says */}
  <div>
    <p>{props.vocabListName}</p>
  <Button title='Select'>{props.title}</Button>
  </div>
  </div>;
};
VocabListsListing.defaultProps  = {
    vocabListName: 'test'
};
export default VocabListsListing;

// rafce-basic component structure
