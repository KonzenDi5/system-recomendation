import { useNavigate } from 'react-router-dom';
import { Input } from '../../components/input';
import logo from '../../assets/logobranco.png'
import { Link, LoginContainer, Logo } from '../SignIn/styled';
import { Text } from './styled';
import { Button } from '../../components/button';

export const ForgotPassword = () => {
  const navigate = useNavigate()

  const handleNavigateResetPassword = () => {
    navigate('/reset-password')
  }

  const handleNavigate = () => {
    navigate('/')
  }
  return (
    <>
      <LoginContainer>
        <Text>Insira um email para enviar o código de recuperação</Text>
        <Input type="email" placeholder="Email" />
        <Button
          type={'submit'}
          color={'blue'}
          onClick={handleNavigateResetPassword}
          label={"Enviar código"}
        />
        <Link onClick={handleNavigate}>Voltar</Link>
        <br />
        <br />
        <Logo src={logo} alt="Logo da Empresa" />
      </LoginContainer>
    </>
  );
}
