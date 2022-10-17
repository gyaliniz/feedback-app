import React from 'react'

function RatingSelect() {
  return (
    <ul className='rating'>
        {Array.from({length:10}, (_, i) => {
            return  <li key={`rating-${i + 1}`}>
            <input 
            type="radio" 
            name="rating" 
            id={`num${i + 1}`}
            value={i + 1}
            />
           <label htmlFor={`num${i + 1}`}>{i + 1} </label> 
            </li>;
        })}
    </ul>
  )
}

export default RatingSelect