import React from 'react'
import FeedbackItem from './FeedbackItem'

function FeedbackList({items}) {
  return (
    <div>
        {items.map((item) => <FeedbackItem key={item.id} item={item} />)}
    </div>
  )
}

export default FeedbackList