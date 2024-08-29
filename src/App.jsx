import { useState } from 'react'
// import './App.css'
// import Subscribe from './Subscribe'
// import ChessBoard from './ChessBoard'
import StudentLayout from './StudentLayout'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     {/* <Subscribe/> */}
     {/* <ChessBoard/> */}
     <StudentLayout/>
    </>
  )
}

export default App
