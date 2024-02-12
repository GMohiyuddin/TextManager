import React from 'react'

export default function About(props) {

    return (
        <div className={`container my-1 text-${props.mode === 'light' ? 'dark' : 'light'}`} style={{ text: props.mode === 'light' ? 'black' : 'white' }}>
            <h2>About Text Manager</h2>
            Text Manager is a Text Utility app where any one can manipulate desire text to anything they want.
            <br />
        </div>
    )
}
