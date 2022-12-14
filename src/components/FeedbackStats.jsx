import {useContext} from 'react'
import FeedbackContext from '../context/FeedbackContext'

function FeedbackStats() {
    const {items} = useContext(FeedbackContext)

    const average = (items.reduce((acc, curr) => acc + curr.rating, 0) / items.length)
    
  return (
    <div className='stats-display'>
        <p>{items.length} Reviews</p>
        <p>Average Rating {isNaN(average) ? 0 : average.toFixed(1).replace(/[.,]0$/, '')} </p>
    </div>
  )
}

export default FeedbackStats