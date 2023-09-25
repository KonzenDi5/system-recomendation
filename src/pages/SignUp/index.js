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
import { useState } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import { firebaseConfig } from '../../components/firebaseConfig'; 

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const SignUp = () => {
  const navigate = useNavigate();
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');

  const handleNavigateHome = () => {
    if (senha === confirmarSenha) {
      firebase.auth().createUserWithEmailAndPassword(email, senha)
        .then((userCredential) => {
          // Registro bem-sucedido, agora você pode adicionar dados ao Firestore
          const user = userCredential.user;
          const db = firebase.firestore();
          db.collection('users').doc(user.uid).set({
            nome: nome,
            email: email,
          })
            .then(() => {
              console.log('Dados do usuário adicionados ao Firestore com sucesso.');
              navigate('/home');
            })
            .catch((error) => {
              console.error('Erro ao adicionar dados do usuário ao Firestore:', error);
            });
        })
        .catch((error) => {
          console.error('Erro no registro:', error);
        });
    } else {
      console.error('As senhas não coincidem.');
    }
  }

  return (
    <>
      <LoginContainer>
        <div>
          <Img src={google} alt='login via google' />
          <Img src={apple} alt='login via apple' />
        </div>
        <CompanyName>COOL TEA COMPANY</CompanyName>
        <Input type="text" placeholder="Nome" onChange={(e) => setNome(e.target.value)} />
        <Input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
        <Input type="password" placeholder="Senha" onChange={(e) => setSenha(e.target.value)} />
        <Input type="password" placeholder="Confirme sua senha" onChange={(e) => setConfirmarSenha(e.target.value)} />
        <Button onClick={handleNavigateHome}>Cadastrar</Button>
        <br />
        <br />
        <Logo src={logo} alt="Logo da Empresa" />
      </LoginContainer>
    </>
  );
}
