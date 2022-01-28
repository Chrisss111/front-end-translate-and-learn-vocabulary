import React from 'react';

const TextInput = (props) => {
    return <div>
      <h1>Please Input Your Text</h1>
      <form>
        <label>
          Text: <input type="text" className='input-box'/>
        </label>
      </form>
    </div>
  };

export default TextInput;