import { Badge, IconButton } from '@mui/material';
import { ReactComponent as Logo } from 'assets/logo.svg';
import { useCarrinhoContext } from 'common/context/Carrinho';
import { HiShoppingCart } from "react-icons/hi";
import { Nav } from './styles';
import { useNavigate } from 'react-router-dom';


export default function NavBar() {
  const { quantidadeProdutos } = useCarrinhoContext();
  const navegar = useNavigate();

  return (
    <Nav>
      <Logo />
        <IconButton
          disabled={quantidadeProdutos === 0}
          onClick={()=> navegar("/carrinho")}
        >
          <Badge
            color="primary"
            badgeContent={quantidadeProdutos}
          >
            <HiShoppingCart />
          </Badge>
        </IconButton>
    </Nav>
  )
}