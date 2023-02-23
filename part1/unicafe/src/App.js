import { useState } from 'react'

const StatisticLine = (props) => {
  return (
    <tr>
      <td>{props.text}</td>
      <td>{props.info}</td>
    </tr>
  )
}

const Statistics = (props) => {
  const total = props.good + props.bad + props.neutral;
  const average = props.good - props.bad;
  const positive = (props.good / total) * 100;

  if (props.allClicks.length === 0){
    return (
      <h2>No feedback given</h2>
    )
  }

  return (
    <table>
      <thead><tr><th><h1>Statistics</h1></th></tr></thead>
      <tbody>
        <StatisticLine text="Good: " info={props.good}/>
        <StatisticLine text="Neutral: " info={props.neutral}/>
        <StatisticLine text="Bad: " info={props.bad}/>
        <StatisticLine text="&nbsp;"/>
        <StatisticLine text="Total: " info={total}/>
        <StatisticLine text="Average: " info={average}/>
        <StatisticLine text="Positive: " info={positive}/>
      </tbody>
    </table>
  )
}

const Button = (props) => {
  return (
    <button onClick={props.action}>{props.name}</button>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [allClicks, setAll] = useState([])

  const increaseGood = () => {
    setGood(good + 1);
    setAll(allClicks.concat("+"))
  }

  const increaseNeutral = () => {
    setNeutral(neutral + 1)
    setAll(allClicks.concat("="))
  }

  const increaseBad = () => {
    setBad(bad + 1);
    setAll(allClicks.concat("-"))
  }

  return (
    <div>
      <h1>Feedback</h1>
      <Button name="GOOD" action={increaseGood}/>
      <Button name="NEUTRAL" action={increaseNeutral}/>
      <Button name="BAD" action={increaseBad}/>
      <br/>
      <Statistics good={good} neutral={neutral} bad={bad} allClicks={allClicks}/>

    </div>
  )
}

export default App