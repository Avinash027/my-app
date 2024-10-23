// import React,{useState} from 'react'

// const[text,setText  ]= useState('enter here');

// export default function Textform(props) {
//   return (
//     <form>
//        <div className="form-group">
//         <label htmlFor="exampleFormControlTextarea1"></label>
//         <textarea className="form-control" id="exampleFormControlTextarea1" rows="10"></textarea>
//        </div>
//         <button className="btn btn primary">click to translate</button>
//     </form>
//   )
// }


// 
import React, { useState } from 'react';

export default function Textform(props) {
  const [text, setText] = useState(''); // For textarea input and transformed text
  // eslint-disable-next-line no-unused-vars
  const [displayText, setDisplayText] = useState('enter the text'); // For heading display

  // Function to handle button click and convert text to uppercase
  const handleButtonClick = () => {
    const upperCaseText = text.toUpperCase();
    setText(upperCaseText); // Updates the textarea with uppercase text
    console.log("text was changed to uppercase");
  };

  // Function to handle textarea changes and update the text state
  const handleTextChange = (event) => {
    setText(event.target.value); // Updates the text state with user input
  };

  return (
    <>
    <div className="container">
      <h1>{props.heading}</h1> {/* Displays transformed text */}
      <div className="form-group">
        <label htmlFor="exampleFormControlTextarea1">Your Text</label>
        <textarea 
          className="form-control" 
          id="exampleFormControlTextarea1" 
          rows="10" 
          value={text} // Reflects the updated text (including uppercase transformation)
          onChange={handleTextChange} // Update the state as user types
        ></textarea>
      </div>
      <button 
        type="button" 
        className="btn btn-primary" 
        onClick={handleButtonClick} // Convert text to uppercase on button click
      >
        Click to translate
      </button>
      </div>
      <div className="container" my-2>
        <h1>yout text summary</h1>
        <p>{text.split(" ").length} Wrods and {text.length} characters</p>
      </div>
      </>
  );
}


