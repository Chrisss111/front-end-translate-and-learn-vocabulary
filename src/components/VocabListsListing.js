import React from 'react';
import Button from './Button';
import { useState, useEffect } from 'react';
import axios from "axios";

const VocabListsListing = (props) => {
  const [vocabLists, setVocabLists] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/vocablists')
         .then(response => {
          return setVocabLists(response.data)
         });
  }, []);

  const selectButton = (id) => {
    props.selectButtonClick(id);
    console.log("test select button")
  };

  const vocabListItems = vocabLists.map((item) => {
    return <li>{item.name} <button onClick={() => selectButton(item.id)}>Select</button></li>
  });

  return <div><h1>Select the vocabulary list you would like to review</h1>
  {/* Name of vocab list-think have to use hook/state to make them appear based on what backend API request says */}
  <div>
    <ul>{vocabListItems}</ul>
    {/* <button onClick={selectButton}>Select</button> */}
  {/* <Button title='Select'>{props.title}</Button> */}
  </div>
  </div>;
};
VocabListsListing.defaultProps  = {
    vocabListName: '1. Test Vocab List'
};
export default VocabListsListing;

// rafce-basic component structure