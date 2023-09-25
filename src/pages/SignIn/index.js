import { useNavigate } from 'react-router-dom';
import { Input } from '../../components/input';
import { Button } from '../../components/button';
import {
  LoginContainer,
  Logo,
  CompanyName,
  Link,
  } from './styled';
import logo from '../../assets/logobranco.png';
import { useState } from 'react';
import firebase from 'firebase/compat/app'; 
import 'firebase/compat/auth'; 
import firebaseConfig from '../../server/firebaseConfig'; 

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const SignIn = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleNavigateHome = () => {
    firebase.auth().signInWithEmailAndPassword(email, senha)
      .then(() => {
        console.log('Login bem-sucedido.');
        navigate('/home');
      })
      .catch((error) => {
        console.error('Erro no login:', error);
      });
  }

  const handleNavigateForgetPassword = () => {
    navigate('/forgot-password');
  }

  const handleNavigateSignUp = () => {
    navigate('/sign-up');
  }

  return (
    <>
      <LoginContainer>
        <Logo src={logo} alt="Logo da Empresa" />
        <CompanyName>COOL TEA COMPANY</CompanyName>
        <Input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
        <Input type="password" placeholder="Senha" onChange={(e) => setSenha(e.target.value)} />
        <Button
          type={'submit'}
          label={'Entrar'}
          onClick={handleNavigateHome}
        />
        <Link onClick={handleNavigateForgetPassword}>Esqueci minha senha</Link>
        <Link onClick={handleNavigateSignUp}>Cadastrar</Link>
      </LoginContainer>
    </>
  );
}
