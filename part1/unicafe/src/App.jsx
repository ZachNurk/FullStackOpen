import { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)


  const handleGoodClick = () => {
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
      <Statistics good = {good} neutral = {neutral} bad = {bad}/>
    </div>
  )
}

const Button = ({ onClick, text }) => {
  return (
    <button onClick = {onClick}>{text}</button>
  )
}

const StatisticLine = ({ text, value }) => {

  if (text == "positive") {
    return (
      <tr><td>{text}</td> <td>{value} %</td></tr>
    )
  }
  return (
    <tr><td>{text}</td> <td>{value}</td></tr>
  )

}

const Statistics = ({ good, neutral, bad }) => {
  const all = good + bad + neutral

  if (all === 0) {
    return (
    <p>
    No Feedback Given
    </p>
    )
  }
  return (
    <table>
      <tbody>
        <StatisticLine text="good" value={good}/>
        <StatisticLine text="neutral" value={neutral}/>
        <StatisticLine text="bad" value={bad}/>
        <StatisticLine text="all" value={all}/>
        <StatisticLine text="average" value={all / 3}/>
        <StatisticLine text="positive" value={good / all * 100}/>
      </tbody>
    </table>
  )
 
}



export default App