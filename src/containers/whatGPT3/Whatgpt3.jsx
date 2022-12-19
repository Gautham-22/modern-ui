import React from 'react';
import "./whatgpt3.css";
import { Feature } from "../../components";

const Whatgpt3 = () => {

  const features = [
    {title: "Chatbots", text: "We so opinion friends me message as delight. Whole front do of plate heard oh ought. "},
    {title: "Knowlegebase", text: "At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b"},
    {title: "Education", text: "At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b"}
  ]

  return (
    <div className='whatgpt3-wrapper'>
      <div className='gpt3_whatgpt3 section_margin' id='wgpt3'>
          <div className='gpt3_whatgpt3-feature'>
            <Feature 
              title="What is GPT-3"
              text="We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by."
            />
          </div>
          <div className='gpt3_whatgpt3-heading'>
            <h1 className='gradient_text'>
              The possibilities are beyond your imagination
            </h1>
            <p>Explore The Library</p>
          </div>
          <div className="gpt3_whatgpt3-container">
            {
              features.map((feature, index) => <Feature key={index} title={feature.title} text={feature.text} />)
            }
          </div>
      </div>
    </div>
  )
}

export default Whatgpt3