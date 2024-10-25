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

  // Function to handle button click and convert text to uppercase
  const handleButtonClick = () => {
    const upperCaseText = text.toUpperCase();
    setText(upperCaseText); // Updates the textarea with uppercase text
    console.log("text was changed to uppercase");
  };

  const handleeButtonClick = () => {
    const lowerCaseText = text.toLowerCase();
    setText(lowerCaseText); // Updates the textarea with lowercase text
    console.log("text was changed to lowercase");
  };

  // Function to handle textarea changes and update the text state
  const handleTextChange = (event) => {
    setText(event.target.value); // Updates the text state with user input
  };

  return (
    <>
      <div className="container" style={{backgroundcolour: props.mode==='dark'? 'Grey': 'white', color:props.mode=== 'dark'?'white': 'black'}}>
        <h1>{props.heading}</h1> {/* Displays transformed text */}
        <div className="form-group" style={{backgroundcolour: props.mode==='dark'? 'Grey': 'white', color:props.mode=== 'dark'?'white': 'black'}}>
          <label htmlFor="exampleFormControlTextarea1">Your Text</label>
          <textarea 
            className="form-control" 
            id="exampleFormControlTextarea1" 
            rows="10" 
            value={text} // Reflects the updated text (including uppercase transformation)
            onChange={handleTextChange}
            // Added style to change text color based on dark mode
          ></textarea>
        </div>
        <button 
          type="button" 
          className="btn btn-primary mx-2"
          onClick={handleButtonClick} // Convert text to uppercase on button click
        >
          Click to translate
        </button>
        <button 
          type="button" 
          className="btn btn-primary mx-2" 
          onClick={handleeButtonClick} // Convert text to lowercase on button click
        >
          Click to lowercase
        </button>
      </div>
      <div className="container my-2">
        <h1 
          style={{
            color: props.mode === 'dark' ? 'white' : 'black' // Text summary color change
          }}>
          Your text summary
        </h1>
        <p style={{
            color: props.mode === 'dark' ? 'white' : 'black' // Text summary color change
          }}>you will need {0.008 * text.split(" ").length} minutes to read this</p>
        <p style={{
            color: props.mode === 'dark' ? 'white' : 'black' // Text summary color change
          }}>{text.split(" ").length} Words and {text.length} characters</p>
      </div>
    </>
  );
}


