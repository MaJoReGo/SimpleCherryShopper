import { Home } from '../src/components/Pages/Home/Home'
import { Route, Routes } from 'react-router-dom'
import { Us } from './components/Us/Us'
import { Categories } from './components/Categories/Categories'
import { Shopping } from './components/Shopping/Shopping'
import { Header } from '../src/components/Layouts/Header'
import { Navbar } from '../src/components/Layouts/Navbar'
import { Footer } from '../src/components/Layouts/Footer'

function App() {

  return (
    <>
      <Header/>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Us' element={<Us/>}/>
        <Route path='Categories/' element={<Categories/>}/>
        <Route path='Shopping/' element={<Shopping/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App