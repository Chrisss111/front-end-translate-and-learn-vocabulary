import React from 'react';
import { useState, useEffect } from 'react';
import axios from "axios";
import TextInput from './TextInput';
import './TranslatedPage.css'

const TranslatedPage = (props) => {
  const [vocabList, setVocabList] = useState(null);
  const [savePayload, setSavePayload] = useState(null)
  let payl = null
  let postRequestDict = null 

  // const [textInputData, setTextInputData] = useState([]);

  // const textInputData

  // props.dropdownlanguage

  // const textt = { words: ["bonjour", "je", "m'appele", "ca va"], lang: "en", original_lang: "fr"  };

  // *Hola mi amor. Te quiero *mucho

  const wordsToTranslateArray = []
  const textArray = props.text.toLowerCase().split(' ')

  for (let i = 0; i < textArray.length; i++) {
    if (textArray[i].startsWith('*')) {
      wordsToTranslateArray.push(textArray[i].substring(1))
      console.log(textArray[i].substring(1))
    }
  }

  console.log("wordstotranslatearray")
  console.log(wordsToTranslateArray)


  const body = { words: wordsToTranslateArray, lang: "en", original_lang: props.original_lang }

  console.log("this is body:")
  console.log(body)

  useEffect(() => {

    axios
      .post(`http://localhost:5000/translation`, body)
      .then(response => {
        return setVocabList(response.data) 
        // map here to create list of word objects(with notes)
      });
  }, []);

  // [{notes: ''}]
  

  const goBackToListingsButton = () => {
    props.goBackToListingsClick(props.id);
  };
  // vocablist name will be a user input value


 
  const onChange = (event) => {
    // setValue(event.target.value);
    console.log("notes test")
    console.log(event.target.value)
    // props.textOnChange(event)
    // const target = event.target;
    // const name = target.value;
    // console.log(name);
  };

  
  if (vocabList != null) {
    console.log(`data returned from CALL to backend API translation enpoint:`)
    console.log(vocabList)
    // console.log(vocabList.input)
    // console.log(vocabList.translatedText)

    payl = vocabList.map((item, index) => {

      return {"selected_word": item.input,
      "translation": item.translatedText,
      "notes": "",
      "link": `https://translate.google.com/?sl=${body.original_lang}&tl=en&text=${item.input}&op=translate`,
      "language": body.original_lang}

    })
    
    // console.log("PAYL:::::")
    // console.log(payl)
    // console.log(payl[0].link)

    const createOnChange = (index) =>{
      return function(event) {
        // on onchange update vocablist with updated notes at that index for
        payl[index].notes = event.target.value
        // console.log('savePayload::::')
        // console.log(savePayload)

        console.log("PAYL WITH UPDATED NOTES:::::")
        console.log(payl)
        // console.log(payl[0].link)
        // console.log(`${index} and ${event.target.value}`)
  
      }
    }
    postRequestDict={"vocablist": {"name": "testing post request list 3", "text": props.text},"words": payl}

    console.log('postRequestDict::::')
    console.log(postRequestDict)

    const saveButton = () => {
      // props.saveButtonClick(props.id);
      // do as alert (with text input) OR somehow make a text box appear
      // alert("Input the name of your vocab list:")
      axios.post("http://localhost:5000/vocablists", postRequestDict)
            .then(response => {
              console.log(response.data)
              return response.data
            });
    };
  
    const wordListItems = vocabList.map((item, i) => {
      const link = `https://translate.google.com/?sl=${body.original_lang}&tl=en&text=${item.input}&op=translate`


      return <div className='word-list-item' key={i}>
        <p> <strong>{item.input}</strong>: {item.translatedText} </p>

        <a href={link}> Google Translate Page for {item.input}</a>
        <form>
          <label>
            My Notes: <input onChange={createOnChange(i)} type="text" />
          </label>
        </form>


      </div>

    });
    return <div className='translated-page-container'>
      <button onClick={goBackToListingsButton}>Saved Vocab Lists</button>

      <div className="text-and-words">
        <div className='text-left'>
          <h2>Your Text:</h2>
          <p className='word-text'>{props.text}</p>
        </div>
        <div className='text-right'>
          <h2>Your Translated Words:</h2>
          <div>{wordListItems}</div>
        </div>
      </div>
      <button onClick={saveButton}>Save This Vocab List</button>
    </div>

  } else {
    return <p>please wait as we gather your translated words</p>
  }

};

export default TranslatedPage;
