import React from 'react';
import { useState, useEffect } from 'react';
import axios from "axios";
// import Words from './Words';
// import Text from './Text';

// text component + series of word components

const DisplayedSavedVocabList = (props) => {
  
  const [vocabList, setVocabList] = useState(null);
  const [deleteList, setDeleteList] = useState(false);

  useEffect(() => {
    axios.get(`http://localhost:5000/vocablists/${props.selectedListID}/words`)
         .then(response => {
          return setVocabList(response.data)
         });
  }, []);

  // putting useeffect inside an if statement also gets an error message
  // if (deleteList === true){
    
  // }

  const goBackToListingsButton = () => {
    props.goBackToListingsClick(props.id);
  };

  const deleteListButton = () => {
    
    // get eror message-can't use sueffect in function? has to be in component?
    // useEffect(() => {
      axios.delete(`http://localhost:5000/vocablists/${props.selectedListID}/words`)
          .then(response => {
            props.deleteListButtonClick()
            alert("You have successfully deleted the vocab list")
            // consider saying the name of the deleted vocab list in the alert message
            return response.data
          });
   
    // setDeleteList(true)
    // console.log(deleteList)

  };

  
    

  
  if (vocabList != null){
    console.log(vocabList)
    // console.log(vocabList.vocablist.name)
    // console.log(vocabList.words.length)

    const wordListItems = vocabList.words.map((item) => {

      console.log(item);
      return <li>{item.selected_word}: {item.translation} <div>google translate link: {item.link}</div> <div>notes: {item.notes}</div><section>--------</section></li>
      
    });
    // for (let i=0; i< vocabList.words.length; i++){

    // }
    return <div>
      <button onClick={goBackToListingsButton}>Saved Vocab Lists</button>
      <h1>{vocabList.vocablist.name}</h1>
      <div><p>{vocabList.vocablist.text}</p></div>
      <div><ul>{wordListItems}</ul>
      </div>
      <section><button onClick={deleteListButton}>Delete This Vocab List</button></section>
    </div>;
  } else {
    return <p>please wait as we gather you saved lists</p>
    }
  };

  export default DisplayedSavedVocabList;
