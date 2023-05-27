import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './index.css'

//components
//import App from './App'
import Listar from './components/Listar'
import Cadastrar from './components/cadastrar'
import Editar from './components/editar';
import Loja from './components/Vitrine/loja';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={< Loja />} />
        <Route path='/listar' element={<Listar />} />
        <Route path='/cadastrar' element={<Cadastrar />} />
        <Route path='/editar/:id' element={<Editar />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
