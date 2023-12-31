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
import firebase from 'firebase/compat/app'; 
import 'firebase/compat/auth'; 
import 'firebase/compat/firestore'; 
import firebaseConfig from '../../server/firebaseConfig'; 

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const SignUp = () => {
  const navigate = useNavigate();
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleNavigateHome = () => {
    if (!nome || !email || !senha || !confirmarSenha) {
      setErrorMessage('Por favor, preencha todos os campos.');
      return;
    }

    if (senha !== confirmarSenha) {
      setErrorMessage('As senhas não coincidem.');
      return;
    }

    firebase.auth().createUserWithEmailAndPassword(email, senha)
      .then((userCredential) => {
        const user = userCredential.user;
        const db = firebase.firestore();
        
        // Obtendo as respostas do localStorage
        const storedAnswers = JSON.parse(localStorage.getItem('answers'));

        // Obtendo o valor da chave "valorQuestions" do localStorage
        const valorQuestions = localStorage.getItem('valueQuestions') || 0;

        // Adicionando os dados do usuário, as respostas e o valor das perguntas ao Firestore
        db.collection('usuarios').doc(user.uid).set({
          nome: nome,
          email: email,
          respostas: storedAnswers || [],
          totalPerguntas: valorQuestions, // Adicione o valor total das perguntas
        })
          .then(() => {
            console.log('Dados do usuário e respostas adicionados ao Firestore com sucesso.');
            
            // Limpando as respostas e a chave "valorQuestions" no localStorage após o registro
            localStorage.removeItem('answers');
            localStorage.removeItem('valueQuestions');

            navigate('/result');
          })
          .catch((error) => {
            console.error('Erro ao adicionar dados do usuário ao Firestore:', error);
          });
      })
      .catch((error) => {
        setErrorMessage('Erro no registro: ' + error.message);
      });
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
        {errorMessage && <p>{errorMessage}</p>}
        <br />
        <br />
        <Logo src={logo} alt="Logo da Empresa" />
      </LoginContainer>
    </>
  );
}
