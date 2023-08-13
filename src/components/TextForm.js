import React, { useState } from 'react';
import PropTypes from 'prop-types'
export default function TextForm(props) {

   
    const [count, setCount] = useState("");
   
    const upperFun= (parameters) => {
       console.log("uppercase Clicked") 
      setCount(count.toUpperCase());
      props.showAlert(" Converted to Uppercase","success")
    }
    const lowerFun= (parameters) => {
       console.log("uppercase Clicked") 
       let newtext= count.toLowerCase();
      setCount(newtext);
      props.showAlert(" Converted to Lower Case","success")
    }
    const sentenceFun= (parameters) => {
       console.log("uppercase Clicked") 
      let newtext1 = count.toLowerCase().charAt(0).toUpperCase() + count.slice(1);
      setCount(newtext1);
      props.showAlert(" Converted to Sentence Case","success")
    }
    const clearFun = () => {
   
      setCount("")
      props.showAlert(" Cleared","success")
     
    }
    const copyFun = () => {
   let text =document.getElementById('exampleFormControlTextarea1')
   text.select();
   navigator.clipboard.writeText(text.value)
   props.showAlert(" Copied","success")
    
    }
    const removeSpaceFun = () => {
 let newRemove = count.split(/[ ]+/);
 setCount(newRemove.join(" "))
 props.showAlert(" Removed.","success")
    }
    const handleOnChange= (event) => {
       console.log("On Change") 
       setCount(event.target.value)
    }
    return(
     <>
<div className={`container bg-${props.mode==='light'?'light':'dark'} text-${props.mode1}`} >
    <h1>{props.heading}</h1>
<div className="mb-3">

  <textarea className={`form-control bg-${props.mode==='light'?'light':'dark'} text-${props.mode1}`} onChange={handleOnChange} value ={count} id="exampleFormControlTextarea1"  rows="8"></textarea>
  <button className={`btn btn-primary bg-${props.btnColor}`} onClick={upperFun}>Convert to UPPERCASE</button>
  <button className="btn btn-secondary mx-4" onClick={lowerFun}>Convert to lowercase</button>
  <button className="btn btn-success mx-4" onClick={sentenceFun}>Convert to Sentence Case</button>
  <button type="button mx-4" className="btn btn-info" onClick={clearFun}>Clear</button>
  <button type="button mx-4" className="btn btn-info mx-4" onClick={copyFun}>Copy</button>
  <button type="button mx-4" className="btn btn-info bg-warning mx-4" onClick={removeSpaceFun}>Remove Space</button>
</div>
</div>
<div className={`container bg-${props.mode==='light'?'light':'dark'} text-${props.mode1}`}>
<h2 className="my-2">Your Text Summary</h2>
<p>
  {count.split(" ").length-1} words and {count.length} characters
  </p>
  <p>
  {(count.split(" ").length-1) * 0.008} Minutes to Read
  </p>
  <p>
  {count.split(".").length-1} Sentences
  </p>
  <h2>Preview</h2>
  <p>{count.length>0?count:"The above text will be shown here"}</p>
</div>


</>

)};
