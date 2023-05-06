import { useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MyButton from './components/MyButton'
import MyProfile from './components/MyProfile'
import { useEffect } from 'react'

function App() {
  // const [count, setCount] = useState(0)
  // const user = {
  //   name: 'PEERAPONG'
  // }
  // const [people, setPeople] = useState([])
  // useEffect(() => {
  //   fetch(`https://jsonplaceholder.typicode.com/users/${count}`)
  //     .then(res => res.json())
  //     .then(data => setPeople(data));
  // }, [count])
  // function countValue() {
  //   setCount(count + 1)
  // }
  return (
    <>
      <div>
        {/* <p>{count}</p>
        <button onClick={countValue}>+5</button>
        <MyButton />
        <MyProfile data={user} />
        <MyAbout user={user} /> */}
        <MyCurrent />
      </div>
    </>
  )
}

function MyAbout({ user }) {
  const [count, setCount] = useState(0)
  function AboutHandleClick() {
    setCount(count + 1)
  }
  return <>
    <p>ABOUT PAGE</p>
    <h3>{user.name}</h3>
    <h1>{count}</h1>
    <button onClick={AboutHandleClick}>About Click</button>
  </>
}

function MyCurrent() {
  const [inputValue, setInputValue] = useState("")
  const count = useRef(0)
  useEffect(() => {
    count.current = count.current + 1
  })
  const inputElement = useRef();
  const focusInput = ()=>{
    inputElement.current.focus();
  }
  return (
    <div>
    <input type="text" ref={inputElement} value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
    <button onClick={focusInput}>Focus</button>

    <h1>Render Count Current : {count.current}</h1>
    <h1>Value is : {inputValue}</h1>
  </div>
  ) 
}

export default App
