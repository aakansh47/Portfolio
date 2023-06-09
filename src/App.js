import { Routes,Route } from 'react-router-dom'
import Layout from './components/Layout'
import './App.scss'
import Home from './components/Home'
import About from './components/About'
import Work from './components/Work'
import Contact from './components/Contact'

function App() {
  return (
    <>
    <Routes>
         <Route path="/" element= {<Layout />} > 
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="work" element={<Work />} />
          <Route path="contact" element={<Contact/>}/>
         </Route> 
    </Routes>
    </>
  )
}

export default App;
