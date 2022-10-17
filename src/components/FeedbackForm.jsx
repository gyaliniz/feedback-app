import Card from "./shared/Card"
import Button from "./shared/Button"
import RatingSelect from "./RatingSelect"

function FeedbackForm() {
    const message = "Please give us 5 starts"
  return (
    <Card>
        <form>
            <h2>How would you rate your service with us?</h2>
            <RatingSelect />

            <div className="feedback-input-group">
                <input type="text" placeholder='Write a review' />
                <Button type="submit" isDisabled={true}>Send</Button>
            </div>
          {message && <div className='message'>{message}</div>}
        </form>
    </Card>
  )
}

export default FeedbackForm