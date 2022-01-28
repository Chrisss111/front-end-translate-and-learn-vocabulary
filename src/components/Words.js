import React from 'react';

const Words = (props) => {
  return <div>
    <h4>{props.word}: {props.translation}</h4>
    <div>
      <form>
        <label>
          My Notes: <input type="text"/>
        </label>
      </form></div>
  </div>;
};

Words.defaultProps  = {
  word: 'test word',
  translation: 'test translation'
};

export default Words;

