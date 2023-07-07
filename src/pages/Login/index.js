import { Button, Input, InputAdornment, InputLabel } from "@mui/material";
import { Container, InputContainer, Titulo } from "./styles";
import { NavLink } from "react-router-dom";


function Login({ nome, setNome, saldo, setSaldo}) {

  return (
    <Container>
      <Titulo>
        Insira o seu nome
      </Titulo>
      <InputContainer>
        <InputLabel>
          Nome
        </InputLabel>
        <Input
          value={nome}
          onChange={(e)=> setNome(e.target.value)}
          type="text"
        />
      </InputContainer>
      <InputContainer>
        <InputLabel>
          Saldo
        </InputLabel>
        <Input
        value={saldo}
        onChange={(e)=> setSaldo(e.target.value)}
        type="number"
        startAdornment={
          <InputAdornment position="start">
            R$
          </InputAdornment>
        }
      />
      </InputContainer>
      <NavLink to="/feira"> 
      <Button
        variant="contained"
        color="primary"
        onClick={()=> console.log(nome, saldo)}
      >
        Avançar
      </Button>
      </NavLink>
    </Container>
  )
};

export default Login;