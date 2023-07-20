// rfc

// https://www.youtube.com/watch?v=leBpCqU8wdg&list=PLu0W_9lII9agx66oZnT6IyhcMIbUMNMdt&index=8

import React, { useState } from "react"; // import useState HOOK from React

export default function TextForm(props) {
    const handleUpClick = ()=>{
        console.log("Upper case was clicked" + text)
        let newText = text.toUpperCase();
        // setText("You clicked on jandleUp click function ")
        setText(newText);
        props.showAlert("Converted to UpperCase", "success");
    }
    const handleDnClick = ()=>{
        console.log("Lower case was clicked" + text)
        let newText = text.toLowerCase();
        // setText("You clicked on jandleUp click function ")
        setText(newText);
        props.showAlert("Converted to LowerCase", "warning");
    }
    const handleclearClick = ()=>{
      // console.log("Lower case was clicked" + text)
      let newText = "";
      // setText("You clicked on jandleUp click function ")
      setText(newText);
      props.showAlert("Clear text", "danger");
  }

  const handleCopy =() =>{
    // console.log("I am copy");
    var text = document.getElementById("myBox");
    navigator.clipboard.writeText(text.value);
  }

  const handleExtraSpaces = () =>{
    let newText= text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Removed Extra spaces", "success");
  }

  // const handleVoClick = () => {
    
  //   console.log(text)
  //   for (let count=0; count <= text.length; count++) {
  //     if (text.match("ahmed")) {
  //       let newText;
  //       newText = "Ahmed Found"
  //       setText (newText);
  //     }
  //   }
  //   // console.log("No. of Vowels are: " + countChar);
  // };

    const handleOnChange = (event)=>{
        console.log("On change");
        setText(event.target.value);

    }
  // Declare a new state variable, which we'll call "text" always write it inside function based component
  const [text, setText] = useState("Enter your text here"); // text is a variable and data comes inside it, and setText is a function through which text variable get updated
//   text="new text"; // wrong way to change the state
// setText("new text"); // Correct way to change the state
  return (
    <>
{/* my-3 class gives the margin in y-axis */}
    <div className="container my-3">  
      {/* <h1> {props.heading} - {text} </h1> */}
      <h1> {props.heading} </h1>
        {/* <label for="myBox" className="form-label">Enter the Text</label> */}    
      <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode ==='dark' ? '#343a40': 'white' , color:props.mode ==='light' ? 'black': 'white'}} id="myBox" rows="8"></textarea>
      </div>
      <button className="btn btn-primary" onClick={handleUpClick}>Convert to UpperCase</button>
      <button className="btn btn-primary mx-2" onClick={handleDnClick}>Convert to LowerCase</button>
      <button className="btn btn-danger container my-3" onClick={handleclearClick}>Clear Text</button>
      {/* <button className="btn btn-success container my-3" onClick={handleVoClick}>Vowels</button> */}
      <button className="btn btn-success container my-3" onClick={handleCopy}>Copy Text</button>
      <button className="btn btn-success container my-3" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
      {/* <button className="btn btn-danger">Convert to LowerCase</button> */}
    </div>
    <div className="container">

    <div className="my-5">
      <h1>Summary of the text</h1>
      <p> {text.split(" ").length} words and {text.length} characters </p>
      <p> <b> {0.008 * text.split(" ").length} Minutes are required to read the Document. </b></p>
      <h2 className="container"> Preview</h2>
      <p>  {text.length>0 ? `your text is:  ${text}` : "Enter something in the TextBox above to preview it here"} </p>
      <p>{text.countChar} No. of Vowels</p>

    </div>
    </div>
    </>
  );
}
