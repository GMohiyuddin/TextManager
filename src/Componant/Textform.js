import React, { useState } from 'react'


// eslint-disable-next-line
export default function Textform(props) {
    const upperCase = () => {
        let upperText = text.toUpperCase();
        setText(upperText);
    }
    const lowerCase = () => {
        let lowerText = text.toLowerCase();
        setText(lowerText);
    }
    const clearText = () => {
        let clearText = ''
        setText(clearText);
        props.showAlert("TextArea has been cleared","danger")
    }
    const copyText = () => {
        const text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text Copied to Clipboard","success")
    }
    const handleOnChange = (event) => {
        setText(event.target.value);
    }
    const [text, setText] = useState("");
    return (
        <>
            <div style={{ color: props.mode === 'light' ? 'black' : 'white' }}>
                <h2>{props.heading}</h2>
                <div className="mb-3 ">
                    <textarea className="form-control" id="myBox" onChange={handleOnChange}
                        value={text} rows="7"></textarea>
                </div>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={upperCase}>Convert to Uppercase</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={lowerCase}>Convert to Lowercase</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={clearText}>Clear Textarea</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={copyText}>Copy To Clipboard</button>
            </div>
            <div className="container my-2" style={{ color: props.mode === 'light' ? 'black' : 'white' }}>
                <h2>Text Summary</h2>
                <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Words And {text.length} Characters</p>
                <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0})  .length} Minutes to read</p>
            </div>
            <div className="container" style={{ color: props.mode === 'light' ? 'black' : 'white' }}>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Text to preview"}</p>
            </div>
        </>
    )
}
