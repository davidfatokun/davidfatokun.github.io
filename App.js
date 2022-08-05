import { Route, Routes } from 'react-router-dom'
import Home from './src/components/Home'
import About from './src/components/About'
import Contact from './src/components/Contact'
import Layout from './src/components/Layout'
import './App.scss'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
