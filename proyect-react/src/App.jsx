import { useState } from 'react'
import './App.css'
import Routing from './routes/Routing'
import { ToastContainer } from 'react-toastify';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'react-toastify/dist/ReactToastify.css';

function App() {
  
  const [count, setCount] = useState(0)
  

  return (  
    <>
      <div>
      <Routing />
      <ToastContainer position='top-center'/>  
      </div>
    </>
  )
}

export default App