import React from 'react';
// import Words from './Words';
// import Text from './Text';

// text component + series of word components

const DisplayedVocabList = (props) => {
  
  const goBackToListingsButton = () => {
    props.goBackToListingsClick(props.id);
  };
  return <div>
    <button onClick={goBackToListingsButton}>Saved Vocab Lists</button>
    <p>VOCAB LIST TO BE DISPLAYED BELOW</p>
  </div>;
};

export default DisplayedVocabList;
