import { memo } from 'react';
import { Container } from './styles';

import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

import { IconButton } from '@mui/material';


function Produto({
  nome,
  foto,
  id,
  valor,
  unidade
}) {
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
          >
            <AiOutlineMinus />
          </IconButton>
          <IconButton>
            <AiOutlinePlus />
          </IconButton>
        </div>
      </Container>
  )
}

export default memo(Produto)