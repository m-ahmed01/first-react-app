// import logo from "./logo.svg";
import "./App.css";
import React , {useState} from 'react'  // Emmet: imrs
import Navbar from './components/Navbar';
import TextForm from "./components/TextForm";
// import About from "./components/About";
import Alert from './components/Alert';
// import {  Router, Route, Switch } from "react-router-dom";
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// let a= prompt("Enter name")
// let name= a;
function App() {
  const [mode, setMode] = useState("light");  // whether dark mode is enable or not?
 const [alert, setAlert] = useState(null);
 // setAlert is used to set the state variable named (alert)

 // showAlert is a method/ function which hel us to show the alert messages
 const showAlert = (message, type)=> {
  setAlert({
    msg: message,
    type: type
  })
  setTimeout(() => {
    setAlert(null);
  }, 1200);
 }

  const toggleMode =()=>{
    if(mode=== 'light'){
    setMode('dark');
    document.body.style.backgroundColor='#2d659f';
    document.body.style.color='white';
    showAlert("Dark Mode has been enabled" , "success");
    document.title="Text-Utils Dark Mode";
    // setInterval(()=>{
    //   document.title="Text-Utils is Amazing";
    // },2000);
    // setInterval(()=>{
    //   document.title="Install Text-Utils Now";
    // },1500);
  }
  else{
    
    setMode('light');
    document.body.style.backgroundColor='white';
    document.body.style.color='black';
    showAlert("Light Mode has been enabled" , "success");
    document.title="Text-Utils Light Mode"
    }
  }
  return (
    // Everything inside this parentheses, there is called a JSX
    <>
   <Navbar title= "Text Utils" mode={mode} toggleMode = {toggleMode} />
   <Alert alert={alert}/>
   {/* <Router> */}
      {/* <Routes> */}
        {/* <Route exact path="/about" element={<About />} /> */}
        {/* <Route path="/" element={<TextForm showAlert={showAlert} heading='Enter the text to Analyze Below' mode={mode}/>} /> */}
        <TextForm showAlert={showAlert} heading='Enter the text to Analyze Below' mode={mode}/>
      {/* </Routes> */}
    {/* </Router> */}
   
         
  {/* <About /> */}

   {/* <Navbar title= "Text Utils" aboutText="About Text-Utils" /> */}
   {/* <Navbar /> */}
  
   {/* <Abouts /> */}

{/* <h1>This is {name} </h1> */}
    </>
  );
}

export default App;

/*   <div className="blank">
Lovely
      <header className="App-header">
Lovely
        <img src={logo} className="App-logo" alt="logo" />
Lovely
        
      </header>
    </div>*/

/* 
      <nav>
        <li>HOME</li>
        <li>About</li>
        <li>Contact US</li>
      </nav>
      <div className="container">
        <h1>Hello {name} </h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore
          atque voluptatem et aliquam aspernatur nemo, cumque obcaecati enim
          veritatis ullam doloribus pariatur mollitia magni at laudantium
          consectetur, optio libero. Distinctio temporibus dolorem inventore
          aliquam.
        </p>
      </div>
*/

