import "./App.css"
import NavBar from './components/NavBar/NavBar.jsx'
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx'
import ItemDetailsContainer from './components/ItemDetailsContainer/ItemDetailsContainer.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    
    <>
    <BrowserRouter>
  
    <NavBar/>
    <Routes>
      <Route path="/" element={<ItemListContainer/>}/>
      <Route path="/categoria/:idCategoria" element={<ItemListContainer/>}/>
      <Route path="/item/:idItem" element={<ItemDetailsContainer/>}/>
    </Routes>
    
    </BrowserRouter>
      
      
    </>
  )
}

export default App

