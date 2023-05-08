import { useRef, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect } from 'react'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Login from './pages/Login'
import Main from './pages/Main'
import Error404 from './pages/Error404'
import NavBar from './components/NavBar'
import { Body, LeftMenu, LeftMenuItem } from './styles/styledElement'

function App() {
  let login = false;
  login = localStorage.getItem('login', false);
  const menus = ["HR","QA","UT","MT","IT"];
  return (
    <>
      {
        login ? (
          <>
            <NavBar />
            <Body>
              <LeftMenu>
                <ul>
                  {
                    menus.map((menu) => (
                      <LeftMenuItem key={menu.toString()}>{menu}</LeftMenuItem>
                    ))
                  }
                </ul>
              </LeftMenu>
              <div id='content'>
                <Routes>
                  <Route path='/' element={<Home />} ></Route>
                  <Route path='/main' element={<Main />}></Route>
                  <Route path='/home' element={<Home headname='Props through component' ></Home>} ></Route>
                  <Route path='/about' element={<About />}></Route>
                  <Route path='/contact' element={<Contact />}></Route>
                  <Route path='*' element={<Error404 />}></Route>
                </Routes>
              </div>
            </Body>
          </>
        ) :
          (
            <>
              <Login></Login>
            </>
          )
      }
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
  const focusInput = () => {
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
