import s from "./Options.module.css"
import Button from "../Button/Button"

const Options = ({onUpdate, total, reset}) => {
    return (
    <ul className={s.wrapButtons}>
        <li><Button onClick={()=>{onUpdate("good")}}>Good</Button></li>
        <li><Button onClick={()=>{onUpdate("neutral")}}>Neutral</Button></li>
        <li><Button onClick={() =>{onUpdate("bad")}}>Bad</Button></li>
        {total()>0 && <li><Button onClick={()=>{reset()}}>Reset</Button></li>}
        
    </ul>
)
}

export default Options