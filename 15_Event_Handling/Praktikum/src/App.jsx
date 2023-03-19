import { useState } from 'react'
import reactLogo from './assets/react.svg'
// import './App.css'
import CreateProduct from './pages/CreateProduct'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <CreateProduct />
    </div>
  )
}

export default App
