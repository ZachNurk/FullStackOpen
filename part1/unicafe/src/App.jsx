import { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)


  const handleGoodClick = () => {
    console.log("Setting good!")
    setGood(good + 1)
  }

  const handleNeutralClick = () => {
    setNeutral(neutral + 1)
  }

  const handleBadClick = () => {
    setBad(bad + 1)
  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button onClick={handleGoodClick} text="good" />
      <Button onClick={handleNeutralClick} text="neutral" />
      <Button onClick={handleBadClick} text="bad" />
      <h1>statistics</h1>
      <Display good = {good} neutral = {neutral} bad = {bad}/>
    </div>
  )
}

const Button = ({ onClick, text }) => {
  return (
    <button onClick = {onClick}>{text}</button>
  )
}

const Display = ({ good, neutral, bad}) => {
  const all = good + bad + neutral

  return (
    <p>
    good {good} <br />
    neutral {neutral} <br />
    bad {bad} <br />
    all {all} <br />
    average {all / 3} <br />
    positive {good / all * 100} % 
    </p>
  )
  
}

export default App