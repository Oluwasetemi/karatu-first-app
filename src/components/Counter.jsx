import React from "react"

export default function Counter() {
  const state = React.useState(1);
  // const count = state[0];
  // const setCount = state[1];
  
  // destructuring
  const [count, setCount] = React.useState(1)
  
  const handleClick = () => setCount(count => count + 10);
  return (
    <button onClick={handleClick}>{count} +10</button>
  )
}