import { useNavigate } from 'react-router-dom';
import { Input } from '../../components/input';
import {
  LoginContainer,
  Logo,
  CompanyName,
  Link,
  Button,
} from './styled';
import logo from '../../assets/logobranco.png'

export const SignIn = () => {
  const navigate = useNavigate()

  const handleNavigate = () => {
    navigate('/home')
  }
  return (
    <>
      <LoginContainer>
        <Logo src={logo} alt="Logo da Empresa" />
        <CompanyName>COOL TEA COMPANY</CompanyName>
        <Input type="email" placeholder="Email" />
        <Input type="password" placeholder="Senha" />
        <Button onClick={handleNavigate}>Entrar</Button>
        <Link>Esqueci minha senha</Link>
        <Link>Cadastrar</Link>
      </LoginContainer>
    </>
  );
}

