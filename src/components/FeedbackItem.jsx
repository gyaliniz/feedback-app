import React from 'react'
import Card from './shared/Card';
import { FaTimes, FaEdit } from 'react-icons/fa'

function FeedbackItem({item, deleteFeedback, editFeedback}) {

    return (
        <Card>
            <div className='rating-display'>{item.rating}</div>
            <button onClick={() => deleteFeedback()} className='close'>
                <FaTimes color="256d85"/>
            </button>
            <button onClick={() => editFeedback()} className='edit'>
                <FaEdit color="256d85"/>
            </button>
            <div className='text-display'>{item.text} </div>
        </Card>
    )
}

export default FeedbackItem