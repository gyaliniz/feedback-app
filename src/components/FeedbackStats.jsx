import React from 'react'

function FeedbackStats({items}) {
    const average = (items.reduce((acc, curr) => acc + curr.rating, 0) / items.length)
    
  return (
    <div className='stats-display'>
        <p>{items.length} Reviews</p>
        <p>Average Rating {isNaN(average) ? 0 : average.toFixed(2)} </p>
    </div>
  )
}

export default FeedbackStats