import React from 'react';
import "./feature.css";

const Feature = ({title, text}) => {
  return (
    <div className='gpt3_features-container-feature'>
      <div className='gpt3_features-container-feature-title'>
        <div></div>
        <h1>{title}</h1>
      </div>
      <div className='gpt3_features-container-feature-text'>
        {text}
      </div>
    </div>
  )
}

export default Feature