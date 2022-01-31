import React from 'react';
import { useState, useEffect } from 'react';
import axios from "axios";
import TextInput from './TextInput';

const TranslatedPage = (props) => {
    const [vocabList, setVocabList] = useState(null);
    const [textInputData, setTextInputData] = useState([]);

    const textt = { words: ["bonjour", "je", "m'appele", "ca va"], lang: "en", original_lang: "fr"  };

  useEffect(() => {
    
    axios
    .post(`http://localhost:5000/translation`, textt)
         .then(response => {
          return setVocabList(response.data)
         });
  }, []);

  const goBackToListingsButton = () => {
    props.goBackToListingsClick(props.id);
  };

  if (vocabList != null){
    console.log(`data returned from backend:`)
    console.log(vocabList)
    // console.log(vocabList.input)
    // console.log(vocabList.translatedText)
  

    const wordListItems = vocabList.map((item) => {

     
      return <li>{item.input}: {item.translatedText} <div>google translate link: {`https://translate.google.com/?sl=${textt.original_lang}&tl=en&text=${item.input}&op=translate`}</div> 
      <div>
          <form>
          <label>
      My Notes: <input type="text"/>
    </label>
  </form>
  </div>
  
  <section>--------</section></li>
      
    });
  return <div>
      <button onClick={goBackToListingsButton}>Saved Vocab Lists</button>
      
      <div>TEXT USER INPUT</div> {/* this value will be the user input */}
      <section>\\\\\\\\\</section>
      <div><p>Your Translated Words</p></div>
      <div><ul>{wordListItems}</ul>
      </div>

  </div>;
   } else {
    return <p>please wait as we gather you saved lists</p>
    }

};

export default TranslatedPage;
