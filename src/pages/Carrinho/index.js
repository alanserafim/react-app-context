import { Alert, Button, InputLabel, MenuItem, Select, Snackbar } from '@mui/material';
// import MuiAlert from '@mui/material';
import { useCarrinhoContext } from 'common/context/Carrinho';
import { PagamentoContext, usePagamentoContext } from 'common/context/Pagamento';
import Produto from 'components/Produto';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, PagamentoContainer, TotalContainer, Voltar } from './styles';

function Carrinho() {
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const { carrinho } = useCarrinhoContext();
  const { tiposPagamento, formaPagamento, mudarFormaPagamento } = usePagamentoContext(PagamentoContext)
  const navegar = useNavigate();

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
            <span>R$ </span>
          </div>
          <div>
            <h2> Saldo: </h2>
            <span> R$ </span>
          </div>
          <div>
            <h2> Saldo Total: </h2>
            <span> R$ </span>
          </div>
        </TotalContainer>
      <Button
        onClick={() => {
          setOpenSnackbar(true);
        }}
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