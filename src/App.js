// import './App.css';
import React ,{useState} from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Form from './components/Form';
import About from './components/About';


function App() {
  const [Mode , setMode] = useState('light');
  const [text , settext] = useState('Enable Dark Mode');
  

  const darkMd = () =>{
    if(Mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#021e64';
      document.body.style.color = 'white';
      settext('Enable light Mode');
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      settext('Enable Dark Mode');
    }

  }

  return (
   <div>

<BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar  mode={Mode} darkMd={darkMd} text={text}/>}>
          {/* <Route index element={<Navbar  mode={Mode} darkMd={darkMd} text={text}/>} /> */}
          <Route path="About" element={<About />} />
         {/* <Route path="contact" element={<Contact />} /> */}
          <Route path="Form" element={ <Form heading="write here to analysis the text"/>} /> 
        </Route>
      </Routes>
</BrowserRouter>


   {/* <Navbar  mode={Mode} darkMd={darkMd} text={text}/>
    <div className="container my-3">
   <Form heading="write here to analysis the text"/>  
   </div> 
   <About /> */}
    </div>

  );
}

export default App;
