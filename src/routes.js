import { CarrinhoProvider } from 'common/context/Carrinho'
import { PagamentoProvider } from 'common/context/Pagamento'
import { UsuarioProvider } from 'common/context/Usuario'
import Carrinho from 'pages/Carrinho'
import Feira from 'pages/Feira'
import Login from 'pages/Login'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

export default function Router() {
  return (
    <BrowserRouter>
      <UsuarioProvider>
      <CarrinhoProvider>
        <PagamentoProvider>
        <Routes>
          <Route exact path='/' element={<Login />} />
          <Route path='/feira' element={<Feira />} />
          <Route  path='/carrinho' element={<Carrinho /> } />
        </Routes>
        </PagamentoProvider>
        </CarrinhoProvider>
      </UsuarioProvider>
    </BrowserRouter>
  )
}
