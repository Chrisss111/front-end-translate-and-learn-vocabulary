import React from 'react';
import { useState, useEffect } from 'react';
import axios from "axios";
import './VocabListsListing.css'

const VocabListsListing = (props) => {
  const [vocabLists, setVocabLists] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/vocablists')
         .then(response => {
          return setVocabLists(response.data)
         });
  }, []);

  if (vocabLists != null) {
    const selectButton = (id) => {
      props.selectButtonClick(id);
    };

    const vocabListItems = vocabLists.map((item) => {
      return <div
        className='vocab-list-item' key={item.id}>
          <p className='list-name'>{item.name}
          <button className="select-button" onClick={() => selectButton(item.id)}>Select</button>
          </p>
        </div>
    });

    return <div className='vocab-lists-listings-container'>
      
      <h2 className='h2'>Select the vocabulary list you would like to review:</h2>
    <div>
      <div className='vocab-list-div'>{vocabListItems}</div>
    </div>
    </div>
   } else {
    return <p className='waiting-message'>Please wait as we gather your saved vocabulary lists</p>
  }
};

export default VocabListsListing;


