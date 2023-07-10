import { Badge, IconButton } from '@mui/material';
import { Nav } from './styles';
import { ReactComponent as Logo } from 'assets/logo.svg';
import { HiShoppingCart } from "react-icons/hi"
import { useCarrinhoContext } from 'common/context/Carrinho';
import { NavLink } from 'react-router-dom';


export default function NavBar() {
  const { quantidadeProdutos } = useCarrinhoContext();
  return (
    <Nav>
      <Logo />
      <NavLink to="/carrinho">
        <IconButton
          disabled={quantidadeProdutos === 0}
        >
          <Badge
            color="primary"
            badgeContent={quantidadeProdutos}
          >
            <HiShoppingCart />
          </Badge>
        </IconButton>
      </NavLink>
    </Nav>
  )
}