import {useContext} from 'react'

import FeedbackContext from '../context/FeedbackContext'

import FeedbackItem from './FeedbackItem'
import Spinner from './shared/Spinner'


function FeedbackList() {
  const {items, isLoading} = useContext(FeedbackContext)

  if(isLoading) return <Spinner />;

  return (
    <div>
        {items.map((item) => <FeedbackItem item={item} key={item.id}/>)}
    </div>
  )
}

export default FeedbackList