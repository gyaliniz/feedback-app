import {useContext} from 'react'
import FeedbackContext from '../context/FeedbackContext'
import FeedbackItem from './FeedbackItem'


function FeedbackList() {
  const {items} = useContext(FeedbackContext)
  return (
    <div>
        {items.map((item) => <FeedbackItem item={item} key={item.id}/>)}
    </div>
  )
}

export default FeedbackList