import React from 'react'

function RatingSelect({rating, setRating}) {
  const handleChange = ({target: {value}}) => {
    setRating(+value)
    console.log(value);
  }

  return (
    <ul className='rating'>
        {Array.from({length:10}, (_, i) => {
            return  <li key={`rating-${i + 1}`}>
            <input 
            type="radio" 
            name="rating" 
            id={`num${i + 1}`}
            value={i + 1}
            onChange={handleChange}
            checked= {rating === i + 1}
            />
           <label htmlFor={`num${i + 1}`}>{i + 1} </label> 
            </li>;
        })}
    </ul>
  )
}

export default RatingSelect