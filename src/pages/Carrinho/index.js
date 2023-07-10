import { Alert, Button, InputLabel, MenuItem, Select, Snackbar } from '@mui/material';
// import MuiAlert from '@mui/material';
import { useCarrinhoContext } from 'common/context/Carrinho';
import { PagamentoContext, usePagamentoContext } from 'common/context/Pagamento';
import Produto from 'components/Produto';
import { useContext, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, PagamentoContainer, TotalContainer, Voltar } from './styles';
import { UsuarioContext } from 'common/context/Usuario';

function Carrinho() {
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const { carrinho, valorTotalCarrinho, efetuarCompra } = useCarrinhoContext();
  const { tiposPagamento, formaPagamento, mudarFormaPagamento } = usePagamentoContext(PagamentoContext)
  const { saldo = 0 } = useContext(UsuarioContext)
  const navegar = useNavigate();
  const total = useMemo(()=> saldo - valorTotalCarrinho, [saldo, valorTotalCarrinho]);

  return (
    <Container>
      <Voltar 
        onClick={()=>navegar(-1)}
      />
      <h2>
        Carrinho
      </h2>
      {carrinho.map(produto => {
        return(
          <Produto
          {...produto}
          key={produto.id}
        />
        )
      }
      )}
      <PagamentoContainer>
        <InputLabel> Forma de Pagamento </InputLabel>
        <Select
        value={formaPagamento.id}
        onChange={(e)=> mudarFormaPagamento(e.target.value)}
        >
          { tiposPagamento.map((pagamento)=>(
            <MenuItem value={pagamento.id} key={pagamento.id}>
            {pagamento.nome}</MenuItem>
          ))}

        </Select>
      </PagamentoContainer>
      <TotalContainer>
          <div>
            <h2>Total no Carrinho: </h2>
            <span>R$ {valorTotalCarrinho.toFixed(2)}</span>
          </div>
          <div>
            <h2> Saldo: </h2>
            <span> R$ {Number(saldo).toFixed(2)}</span>
          </div>
          <div>
            <h2> Saldo Total: </h2>
            <span> R$ {total.toFixed(2)}</span>
          </div>
        </TotalContainer>
      <Button
        onClick={() => {
          efetuarCompra();
          setOpenSnackbar(true);
        }}
        disabled={ total < 0 || carrinho.length === 0}
        color="primary"
        variant="contained"
      >
         Comprar
       </Button>
        <Snackbar
          anchorOrigin={
            { 
              vertical: 'top',
              horizontal: 'right'
            }
          }
          open={openSnackbar}
          onClose={() => setOpenSnackbar(false)}
        >
           <Alert
            onClose={() => setOpenSnackbar(false)}
            severity="success"
          >
            Compra feita com sucesso!
          </Alert>
        </Snackbar>
    </Container>
  )
}

export default Carrinho;