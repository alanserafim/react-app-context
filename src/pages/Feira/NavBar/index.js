import { Badge, IconButton } from '@mui/material';
import { Nav } from './styles';
import { ReactComponent as Logo } from 'assets/logo.svg';
import { HiShoppingCart } from "react-icons/hi"


export default function NavBar() {
  return (
    <Nav>
      <Logo />
      <IconButton>
        <Badge
          color="primary"
        >
          <HiShoppingCart />
        </Badge>
      </IconButton>
    </Nav>
  )
}