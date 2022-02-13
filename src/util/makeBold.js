import React from 'react'

const makeWordsBold = text => {
    const textSplit = text.split(/[ \t\n]/)
    const textToDisplay = []
  
    for (let i=0; i<textSplit.length; i++){
      if (textSplit[i].startsWith('*')){
        textToDisplay.push(<strong key={i}> {textSplit[i]}</strong>)
      } else {
        textToDisplay.push(<React.Fragment key={i}> {textSplit[i]}</React.Fragment>)
      }
    }
    return textToDisplay;
  }

  export default makeWordsBold;