import React from 'react'
import FeedbackItem from './FeedbackItem'

function FeedbackList({items, deleteFeedback, editFeedback}) {
  return (
    <div>
        {items.map((item) => <FeedbackItem item={item} key={item.id} deleteFeedback={deleteFeedback} editFeedback={editFeedback}/>)}
    </div>
  )
}

export default FeedbackList