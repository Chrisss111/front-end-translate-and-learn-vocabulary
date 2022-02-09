import React from 'react';
import { useState, useEffect } from 'react';
import axios from "axios";
import './DisplayedSavedVocabList.css'
import makeWordsBold from '../util/makeBold'

// import Words from './Words';
// import Text from './Text';

// text component + series of word components



const DisplayedSavedVocabList = (props) => {
  
  const [vocabList, setVocabList] = useState(null);
 

  useEffect(() => {
    axios.get(`http://localhost:5000/vocablists/${props.selectedListID}/words`)
         .then(response => {
          return setVocabList(response.data)
         });
  }, []);



  const goBackToListingsButton = () => {
    props.goBackToListingsClick(props.id);
  };

  const deleteListButton = () => {
    
    // get eror message-can't use sueffect in function? has to be in component?
    // useEffect(() => {
      axios.delete(`http://localhost:5000/vocablists/${props.selectedListID}/words`)
          .then(response => {
            props.deleteListButtonClick()
            alert("Your vocabulary list has been deleted successfully")
            // consider saying the name of the deleted vocab list in the alert message
            return response.data
          });

  };

  
    

  
  if (vocabList != null){
    console.log(vocabList)
    // console.log(vocabList.vocablist.name)
    // console.log(vocabList.words.length)

    const wordListItems = vocabList.words.map((item) => {

      console.log(item);
      return <div className='word-list-item' key={item.id}> 
        <p><strong>{item.selected_word}</strong>: {item.translation}</p>
        <a href={item.link}>Google Translate page for {item.selected_word}</a>
        <p>My notes: {item.notes}</p>
      </div>
      
    });
   
    return <div
      className='displayed-saved-vocab-list-container'>
      <button onClick={goBackToListingsButton}>Saved Vocab Lists</button>
      <h1>{vocabList.vocablist.name}</h1>

      <div className="text-and-words">
        <div className='text-left'>
          <h2>Text:</h2>
          <p className='word-text'>{makeWordsBold(vocabList.vocablist.text)}</p>
        </div>
        <div className='text-right'>
          <h2>Translated Words:</h2>
          <div>{wordListItems}</div>
        </div>
      </div>
      <section><button onClick={deleteListButton}>Delete This Vocab List</button></section>
    </div>;

  } else {
    return <p>please wait as we gather your saved vocabulary list</p>
    }
  };

  export default DisplayedSavedVocabList;
