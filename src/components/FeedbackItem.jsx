import React, { useContext } from 'react'
import Card from './shared/Card';
import { FaTimes, FaEdit } from 'react-icons/fa'
import FeedbackContext from '../context/FeedbackContext';

function FeedbackItem({item}) {
    const {deleteFeedback, editFeedback} = useContext(FeedbackContext);
    return (
        <Card>
            <div className='rating-display'>{item.rating}</div>
            <button onClick={() => deleteFeedback(item.id)} className='close'>
                <FaTimes color="256d85"/>
            </button>
            <button onClick={() => editFeedback(item)} className='edit'>
                <FaEdit color="256d85"/>
            </button>
            <div className='text-display'>{item.text} </div>
        </Card>
    )
}

export default FeedbackItem