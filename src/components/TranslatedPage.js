import React from 'react';
import { useState, useEffect } from 'react';
import axios from "axios";
import TextInput from './TextInput';

const TranslatedPage = (props) => {
    const [vocabList, setVocabList] = useState(null);
    
    // const [textInputData, setTextInputData] = useState([]);

    // const textInputData

    // props.dropdownlanguage

    // const textt = { words: ["bonjour", "je", "m'appele", "ca va"], lang: "en", original_lang: "fr"  };

    // *Hola mi amor. Te quiero *mucho

    const wordsToTranslateArray = []
    const textArray = props.text.toLowerCase().split(' ')

    for (let i=0; i<textArray.length; i++) {
        if (textArray[i].startsWith('*')){
            wordsToTranslateArray.push(textArray[i].substring(1))
            console.log(textArray[i].substring(1))
        }
    }

    console.log("wordstotranslatearray")
    console.log(wordsToTranslateArray)
    

    const body = {words: wordsToTranslateArray, lang: "en", original_lang: props.original_lang}

    console.log("this is body:")
    console.log(body)

  useEffect(() => {
    
    axios
    .post(`http://localhost:5000/translation`, body)
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
// new vocab list name: <input type="text"/>
// </label>
// </form>
// </div>

//     return <div>
//     <form>
//     <label>
// Name of new vocab list: <input type="text"/>
// </label>
// </form>
// </div>
// create component? and make it appear when button pressed via function in app.js?
  };

  const onChange = (event) => {
    // setValue(event.target.value);
    console.log("notes test")
    console.log(event.target.value)
    // props.textOnChange(event)
    // const target = event.target;
    // const name = target.value;
    // console.log(name);
  };
  
  if (vocabList != null){
    console.log(`data returned from CALL to backend API translation enpoint:`)
    console.log(vocabList)
    // console.log(vocabList.input)
    // console.log(vocabList.translatedText)
  

    const wordListItems = vocabList.map((item) => {
     const link = `https://translate.google.com/?sl=${body.original_lang}&tl=en&text=${item.input}&op=translate`
     
      return <li>{item.input}: {item.translatedText} 
    <div>
    <a href={link}> Google Translate Page for {item.input}</a>
    </div>

      <div>
          <form>
          <label>
      My Notes: <input onChange={onChange}type="text"/>
    </label>
  </form>
  </div>
  
  <section>--------</section></li>
      
    });
  return <div>
      <button onClick={goBackToListingsButton}>Saved Vocab Lists</button>
      
      <div>Your text: {props.text}</div> {/* this value will be the user input */}
      <section>\\\\\\\\\</section>
      <div><p>Your Translated Words</p></div>
      <div><ul>{wordListItems}</ul>
      <div><button onClick={saveButton}>Save This Vocab List</button></div>
      </div>

  </div>;
   } else {
    return <p>please wait as we gather your translated words</p>
    }

};

export default TranslatedPage;
