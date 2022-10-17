import Card from "./shared/Card"
import Button from "./shared/Button"
import RatingSelect from "./RatingSelect"
import { useState, useEffect } from "react"

function FeedbackForm({addFeedback, inEditItem, setInEditItem, updateFeedback}) {
  const [text, setText] = useState('')
  const [message, setMessage] = useState('')
  const [btnDisable, setBtnDisable] = useState(true)
  const [rating, setRating] = useState(10)

  useEffect(() => {
    if(inEditItem.isEditingEnabled) {
      setBtnDisable(false)
      setText(inEditItem.text)
      setRating(inEditItem.rating);
    }
  }, [inEditItem])
  
  const handleTextChange = ({ target: { value } }) => {
    
    if (value === '') {
      setBtnDisable(true)
      setMessage('')
    } else if (value.trim().length < 10) {
      setBtnDisable(true)
      setMessage('Text must be at least 10 characters')
    } else {
      setBtnDisable(false)
      setMessage('')
    }

    setText(value)
  }

  const handleFeedbackSubmit = (e) => {
    e.preventDefault();

    if(text.trim().length >= 10) {
      const newFeedback = {
        text,
        rating,
      }

      if(inEditItem.isEditingEnabled) {
        updateFeedback(inEditItem.id, newFeedback);
        setInEditItem({
          item:{},
          isEditingEnabled: false
        })
      } else {
        addFeedback(newFeedback);
      }
    }

    setBtnDisable(true)
    setMessage('')
    setText('')
  }

  return (
    <Card>
      <form onSubmit={handleFeedbackSubmit}>
        <h2>How would you rate your service with us?</h2>
        <RatingSelect rating={rating} setRating={setRating}/>

        <div className="feedback-input-group">
          <input
            type="text"
            placeholder='Write a review'
            value={text}
            onChange={handleTextChange} />
          <Button type="submit" isDisabled={btnDisable}>Send</Button>
        </div>
        {message && <div className='message'>{message}</div>}
      </form>
    </Card>
  )
}

export default FeedbackForm