import { memo } from 'react';
import { Container } from './styles';

import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

import { IconButton } from '@mui/material';
import { useCarrinhoContext } from 'common/context/Carrinho';


function Produto({
  nome,
  foto,
  id,
  valor,
  unidade
}) {
  const { carrinho, adicionarProduto, removerProduto } = useCarrinhoContext();
  const produtoNoCarrinho = carrinho.find(itemDoCarrinho => itemDoCarrinho.id === id);
  
  return (
      <Container>
        <div>
          <img
            src={`/assets/${foto}.png`}
            alt={`foto de ${nome}`}
          />
          <p>
            {nome} - R$ {valor?.toFixed(2)} <span>Kg</span>
          </p>
        </div>
        <div>
          <IconButton
            color="secondary"
            onClick={()=> removerProduto(id)}
            disabled={!produtoNoCarrinho}
          >
            <AiOutlineMinus />
          </IconButton>
          { produtoNoCarrinho?.quantidade || 0 }
          <IconButton 
            color="primary"
            onClick={() => adicionarProduto({ nome, foto, id, valor})}>
            <AiOutlinePlus />
          </IconButton>
        </div>
      </Container>
  )
}

export default memo(Produto)