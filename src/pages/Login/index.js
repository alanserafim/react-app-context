import { Button, Input, InputAdornment, InputLabel } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Container, InputContainer, Titulo } from "./styles";

import { UsuarioContext } from "common/context/Usuario";
import { useContext } from "react";


function Login() {
  
  const { nome, setNome, saldo, setSaldo} = useContext(UsuarioContext);
  const navegar = useNavigate();

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
                  onChange={(e) => setNome(e.target.value)}
                  type="text"
                />
              </InputContainer>
              <InputContainer>
                <InputLabel>
                  Saldo
                </InputLabel>
                <Input
                  value={saldo}
                  onChange={(e) => setSaldo(e.target.value)}
                  type="number"
                  startAdornment={
                    <InputAdornment position="start">
                      R$
                    </InputAdornment>
                  }
                />
              </InputContainer>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => navegar("/feira")}
                  disabled={nome.length < 3}
                >
                  Avançar
                </Button>
    </Container>
  )
};

export default Login;