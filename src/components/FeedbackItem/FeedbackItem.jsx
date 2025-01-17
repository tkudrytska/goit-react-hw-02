import s from "./FeedbackItem.module.css"

const FeedbackItem = ({children}) => {
    return (
    <li>
        <p>{children}</p>
    </li>
)
}

export default FeedbackItem