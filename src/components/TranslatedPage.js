import React from 'react';
import { useState, useEffect } from 'react';
import axios from "axios";
import './TranslatedPage.css'
import makeWordsBold from '../util/makeBold'

const TranslatedPage = (props) => {
  const [vocabList, setVocabList] = useState(null);
  
  let postRequestDict = null 

  const wordsToTranslateArray = []
  const textArray = props.text.toLowerCase().split(/[ \t\n]/)

  for (let i = 0; i < textArray.length; i++) {
    if (textArray[i].startsWith('*')) {
      let text=textArray[i].replace(/[!@#$%^&?.«»,:{};()\]'"/]/g, "")
      wordsToTranslateArray.push(text.substring(1))
    }
  }

  const body = { words: wordsToTranslateArray, lang: "en", original_lang: props.original_lang }

  useEffect(() => {

    axios
      .post(`http://localhost:5000/translation`, body)
      .then(response => {
        const list = response.data.map((item, index) => {
          
          return {"selected_word": item.input,
          "translation": item.translatedText,
          "notes": "",
          "link": `https://translate.google.com/?sl=${body.original_lang}&tl=en&text=${item.input}&op=translate`,
          "language": body.original_lang}
        });

        return setVocabList(list) 
      });
  }, []);

  const goBackToListingsButton = () => {
    props.goBackToListingsClick(props.id);
  };
  
  const onChange = (event) => {
    props.onChangeSave(event)
  };
  
  if (vocabList != null) {
    
    const createOnChange = (index) =>{
      return function(event) {
        const updatedVocabList = [...vocabList];
        updatedVocabList[index].notes = event.target.value;
        setVocabList(updatedVocabList);  
      }
    }
    
    const saveButton = (e) => {
      e.preventDefault()
      if (props.newVocabListName === ""){
        
        alert("Please input a name for your vocabulary list")
        return
        
      } else {
      postRequestDict={"vocablist": {"name": props.newVocabListName, "text": props.text},"words": vocabList}
      props.saveButtonClick()

      axios.post("http://localhost:5000/vocablists", postRequestDict)
            .then(response => {
              return response.data
            });       
      };
    }

    const wordListItems = vocabList.map((item, i) => {
      return <div className='word-list-item' key={i}>
        <p> <strong>{item.selected_word}</strong>: {item.translation}</p>
        <a href={item.link}>Google Translate page for {item.selected_word}</a>
        <form>
          <label>
            My notes: <input onChange={createOnChange(i)} type="text" />
          </label>
        </form>
      </div>
    });

    return <div className='translated-page-container'>
      <button onClick={goBackToListingsButton}>Saved Vocab Lists</button>
      <div className="text-and-words">
        <div className='text-left'>
          <h2>Your Text:</h2>
          <p className='word-text'>{makeWordsBold(props.text)}</p>
        </div>
        <div className='text-right'>
          <h2>Your Translated Words:</h2>
          <div>{wordListItems}</div>
        </div>
      </div>
      <form className='save-list-form' onSubmit={saveButton}>
        <p className='save-list-title'>Save This Vocab List!</p>
        <input type="text" className='save-list-text-input'
          onChange={onChange} placeholder='save this vocab list as...' cols='7' rows='50'/>  
      <input className='save-button' type="submit" value="Save"/>
      </form>
    </div>

  } else {

    return <p className='waiting-message'>Please wait as we gather your translated words</p>
  }
};

export default TranslatedPage;
