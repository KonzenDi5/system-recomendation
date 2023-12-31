import { useNavigate } from 'react-router-dom';
import { Input } from '../../components/input';
import logo from '../../assets/logobranco.png'
import { Link, LoginContainer, Logo } from '../SignIn/styled';
import { Button } from '../../components/button';
import { useState } from 'react';
import firebase from 'firebase/compat/app'; 
import 'firebase/compat/auth'; 
import firebaseConfig from '../../server/firebaseConfig.js'; 

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const ResetPassword = () => {
  const navigate = useNavigate();
  const [novaSenha, setNovaSenha] = useState('');
  const [confirmarNovaSenha, setConfirmarNovaSenha] = useState('');

  const handleResetPassword = () => {
    if (novaSenha === confirmarNovaSenha) {
      const auth = firebase.auth();
      const email = auth.currentUser.email;

      auth.sendPasswordResetEmail(email)
        .then(() => {
          console.log('Email de redefinição de senha enviado com sucesso.');
          navigate('/'); // Redirecionar para a página de login após o envio do email
        })
        .catch((error) => {
          console.error('Erro ao enviar o email de redefinição de senha:', error);
        });
    } else {
      console.error('As senhas não coincidem.');
    }
  }

  const handleNavigateBack = () => {
    navigate('/');
  }

  return (
    <>
      <LoginContainer>
        <p>Insira a nova senha</p>
        <Input type="password" placeholder="Nova Senha" onChange={(e) => setNovaSenha(e.target.value)} />
        <Input type="password" placeholder="Confirme a Nova Senha" onChange={(e) => setConfirmarNovaSenha(e.target.value)} />
        <Button onClick={handleResetPassword}>Redefinir Senha</Button>
        <Link onClick={handleNavigateBack}>Voltar</Link>
        <br />
        <br />
        <Logo src={logo} alt="Logo da Empresa" />
      </LoginContainer>
    </>
  );
}
