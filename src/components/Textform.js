import React from 'react'

export default function Textform() {
  return (
    <div>
        <div className="mb-3">
            <h1>Enter your text below</h1>
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="8"></textarea>
            <button className="btn btn-primary">Convert to UpperCase</button>
        </div>
    </div>
  )
}
