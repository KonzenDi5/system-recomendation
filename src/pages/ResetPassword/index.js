import { useNavigate } from 'react-router-dom';
import { Input } from '../../components/input';
import logo from '../../assets/logobranco.png'
import { Button, Link, LoginContainer, Logo } from '../SignIn/styled';

export const ResetPassword = () => {
  const navigate = useNavigate()

  const handleNavigateBack = () => {
    navigate('/')
  }

  const handleNavigateSignIn = () => {
    navigate('/')
  }
  return (
    <>
      <LoginContainer>
        <p>Insira a nova senha</p>
        <Input type="password" placeholder="Senha" />
        <Input type="password" placeholder="confirme sua senha" />
        <Button onClick={handleNavigateSignIn}>Entrar</Button>
        <Link onClick={handleNavigateBack}>Voltar</Link>
        <br />
        <br />
        <Logo src={logo} alt="Logo da Empresa" />
      </LoginContainer>
    </>
  );
}
