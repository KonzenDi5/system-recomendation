import { useNavigate } from 'react-router-dom';
import { Input } from '../../components/input';
import {
  LoginContainer,
  Logo,
  CompanyName,
  Button,
  Img,
} from './styled';
import logo from '../../assets/logobranco.png'
import google from '../../assets/google.jpg'
import apple from '../../assets/apple.png'

export const SignUp = () => {
  const navigate = useNavigate()

  const handleNavigateHome = () => {
    navigate('/home')
  }

  return (
    <>
      <LoginContainer>
        <div>
          <Img src={google} alt='login via google' />
          <Img src={apple} alt='login via apple' />
        </div>
        <CompanyName>COOL TEA COMPANY</CompanyName>
        <Input type="text" placeholder="Nome" />
        <Input type="email" placeholder="Email" />
        <Input type="password" placeholder="Senha" />
        <Input type="password" placeholder="Confirme sua senha" />
        <Button onClick={handleNavigateHome}>Cadastrar</Button>
        <br />
        <br />
        <Logo src={logo} alt="Logo da Empresa" />
      </LoginContainer>
    </>
  );
}

