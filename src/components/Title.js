import React from 'react';
import PropTypes from 'prop-types';

const Title = (props) => {
    return <h2 className='page-titles'>{props.text}</h2>;
  };

  Title.propTypes = {
    title: PropTypes.string
}

export default Title;