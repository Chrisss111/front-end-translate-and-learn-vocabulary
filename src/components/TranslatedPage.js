import React from 'react';
import { useState, useEffect } from 'react';
import axios from "axios";
import TextInput from './TextInput';

const TranslatedPage = (props) => {
    const [vocabList, setVocabList] = useState(null);
    const [textInputData, setTextInputData] = useState([]);

    // props.dropdownlanguage

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

  const saveButton = () => {
    // props.saveButtonClick(props.id);
    // do as alert (with text input) OR somehow make a text box appear
    alert("Input the name of your vocab list:")

//     return <div>
//     <form>
//     <label>
// Name of new vocab list: <input type="text"/>
// </label>
// </form>
// </div>
// create component? and make it appear when button pressed via function in app.js?
  };

  if (vocabList != null){
    console.log(`data returned from backend:`)
    console.log(vocabList)
    // console.log(vocabList.input)
    // console.log(vocabList.translatedText)
  

    const wordListItems = vocabList.map((item) => {
     const link = `https://translate.google.com/?sl=${textt.original_lang}&tl=en&text=${item.input}&op=translate`
     
      return <li>{item.input}: {item.translatedText} 
    <div>
    <a href={link}> Google Translate Page for {item.input}</a>
    </div>

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
      
      <div>TEXT FROM USER INPUT</div> {/* this value will be the user input */}
      <section>\\\\\\\\\</section>
      <div><p>Your Translated Words</p></div>
      <div><ul>{wordListItems}</ul>
      <div><button onClick={saveButton}>Save This Vocab List</button></div>
      </div>

  </div>;
   } else {
    return <p>please wait as we gather you saved lists</p>
    }

};

export default TranslatedPage;
