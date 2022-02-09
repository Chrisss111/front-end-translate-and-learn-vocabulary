import React from 'react'

const makeWordsBold = text => {
    const textSplit = text.split(' ')
    const textToDisplay = []
  
    for (let i=0; i<textSplit.length; i++){
      if (textSplit[i].startsWith('*')){
        textToDisplay.push(<strong> {textSplit[i]}</strong>)
      } else {
        textToDisplay.push(<React.Fragment> {textSplit[i]}</React.Fragment>)
      }
    }
    return textToDisplay;
  }

  export default makeWordsBold;