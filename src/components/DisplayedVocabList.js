import React from 'react';
import { useState, useEffect } from 'react';
import axios from "axios";
// import Words from './Words';
// import Text from './Text';

// text component + series of word components

const DisplayedVocabList = (props) => {
  
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
    </div>;
  } else {
    return <p>please wait as we gather you saved lists</p>
    }
  };

  export default DisplayedVocabList;
