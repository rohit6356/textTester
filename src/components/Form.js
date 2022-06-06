import React ,{useState} from 'react'

export default function Form(props) {
    const [text , setText] = useState('start here...');
    
    const textUp= () =>{
      const newText = text.toUpperCase();
      setText(newText);
    }
    const textLow= () =>{
      const newText = text.toLowerCase();
      setText(newText);
    }
    const clearText= () =>{
      const newText = '';
      setText(newText);
    }

    const copyText= () =>{
      alert('copied')
      let Text = document.getElementById('myBox');
     Text.select();
      navigator.clipboard.writeText(Text.value);
    }

    const removeSpaces= () =>{
      let spaces = text.split(/[ ]+/);
      setText(spaces.join(" "));
     
    }

    const updateChanged= (event) =>{
      setText(event.target.value);
    // console.log('onchanged fire ');
    }

  return (
      <>

<div className="container my-3">
    <h2>{props.heading}</h2>
<div className="mb-3">
  <textarea className="form-control" onChange={updateChanged} value={text} id="myBox" rows="9"></textarea>
  <button  onClick={textUp} className="btn btn-primary my-2 ">Convert to Uppercase</button>
  <button  onClick={textLow} className="btn btn-primary my-2 mx-4">Convert to Lowercase</button>
  <button  onClick={clearText} className="btn btn-primary my-2 mx-4">Clear Text</button>
  <button  onClick={copyText} className="btn btn-primary my-2 mx-4">Copy Text</button>
  <button  onClick={removeSpaces} className="btn btn-primary my-2 mx-4">Remove Extra Spaces</button>
</div>
    </div>
      
      <div className="container">
          <h2>Your Text Summary</h2>
          <p> Words {text.split(" ").filter((element) =>{ return element.length !==0}).length} and Char {text.length}</p>
      </div>
      </>
  )
}
