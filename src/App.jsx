import { useState, useEffect } from 'react'
import './App.css'
import Description from './components/Description/Description'
import Options from './components/Options/Options'
import Feedback from './components/Feedback/Feedback'
import Notification from './components/Notification/Notification'

function App() {
  const [count, setCount] = useState(() => {
    const savedCount = localStorage.getItem("feedback");
    if (savedCount) {
      return JSON.parse(savedCount)
    }
    return { good: 0, neutral: 0, bad: 0 }
  })

  useEffect(() => {
    localStorage.setItem("feedback", JSON.stringify(count));
  }, [count]);

  const updateFeedback = feedbackType => {
    setCount((prev) => ({
      ...prev,
      [feedbackType]: prev[feedbackType] + 1
  }))
  }
  
  const totalFeedback = () =>
    count.good + count.neutral + count.bad

  const positiveFeedback = () => {
    const total = totalFeedback();
    return total === 0 ? 0 : Math.round((count.good / total) * 100);
};

  const resetFeedback = () => {
    setCount({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  return (
    <>
      <Description />
      <Options onUpdate={updateFeedback} total={totalFeedback} reset={resetFeedback} />
      {totalFeedback() > 0 ?
        <Feedback value={count} total={totalFeedback} positiveFeedback={positiveFeedback()} /> :
        <Notification />}
    </>
  )
}

export default App
