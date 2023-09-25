import { useNavigate } from 'react-router-dom';
import { Input } from '../../components/input';
import logo from '../../assets/logobranco.png'
import { Link, LoginContainer, Logo } from '../SignIn/styled';
import { Button } from '../../components/button';

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
        <Button 
          color={'blue'}
          type="submit" 
          onClick={handleNavigateSignIn} 
          label={"Entrar"} 
        />
        <Link onClick={handleNavigateBack}>Voltar</Link>
        <br />
        <br />
        <Logo src={logo} alt="Logo da Empresa" />
      </LoginContainer>
    </>
  );
}
