import { UsuarioProvider } from 'common/context/Usuario'
import Carrinho from 'pages/Carrinho'
import Feira from 'pages/Feira'
import Login from 'pages/Login'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

export default function Router() {
  return (
    <BrowserRouter>
      <UsuarioProvider>
        <Routes>
          <Route exact path='/' element={<Login />} />
          <Route exact path='/feira' element={<Feira />} />
        </Routes>
      </UsuarioProvider>
      <Routes>
       <Route exact path='/carrinho' element={<Carrinho />} />
      </Routes>
    </BrowserRouter>
  )
}
