import React, { useEffect, useState } from 'react';
import './style.css';
import trilha from '../../assets/trilha.png';
import firebase from 'firebase/compat/app'; 
import 'firebase/compat/auth'; 
import 'firebase/compat/firestore'; 

import { firebaseConfig } from '../../server/firebaseConfig'; 

firebase.initializeApp(firebaseConfig);

// Crie uma referência para o Firestore
const firestore = firebase.firestore();

// Função para obter o nome do usuário autenticado
const getAuthenticatedUserName = () => {
  const user = firebase.auth().currentUser;
  if (user) {
    return user.displayName;
  }
  return null;
};

export const Resultado = () => {
  const [userName, setUserName] = useState(null);

  useEffect(() => {
    // Adicione um observador de autenticação para atualizar o nome do usuário quando ele entrar ou sair
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        // Se o usuário estiver autenticado, atualize o nome
        setUserName(user.displayName);
      } else {
        // Se o usuário não estiver autenticado, defina o nome como null
        setUserName(null);
      }
    });

    // Lembre-se de cancelar a inscrição do observador quando o componente for desmontado
    return () => unsubscribe();
  }, []);

  return (
    <div className='container'>
      <div className='headerPurple'>
        <h1>Olá {userName || 'Usuário'} </h1>
        <h2>Essa é sua trilha de aprendizado:</h2>
        <img className='trilha' alt='trilha' src={trilha} />
        <button>Ver trilha completa</button>
      </div>
      <div className='moreinfo'>
        <p>Essa é sua trilha de aprendizado personalizada, criada especialmente para você {userName ? `@${userName}` : ''}, com ela, conseguimos identificar o nível de desenvolvimento pessoal em que você está, e juntos, avançar seu bem estar</p>
        <button className='start'>começar agora</button>
      </div>
    </div>
  );
};
