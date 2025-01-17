import FeedbackItem from "../FeedbackItem/FeedbackItem"
import s from "./Feedback.module.css"

const Feedback = ({value, total, positiveFeedback}) => {
    return (
        <ul>
            <FeedbackItem>Good: {value.good}</FeedbackItem>
            <FeedbackItem>Neutral: {value.neutral}</FeedbackItem>
            <FeedbackItem>Bad: {value.bad}</FeedbackItem>
            <FeedbackItem>Total: {total()}</FeedbackItem>
            <FeedbackItem>Positive: {positiveFeedback}%</FeedbackItem>
        </ul>
)
}

export default Feedback