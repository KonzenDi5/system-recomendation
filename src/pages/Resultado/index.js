import { useState, useEffect } from 'react';
import { firebaseConfig } from '../../server/firebaseConfig';   
import firebase from 'firebase/compat/app'; 
import 'firebase/compat/firestore'; 
import 'firebase/compat/auth'; 
import { DivContent, DivTrail, Row, Title } from "./style";
import icon from '../../assets/ioga.png';

firebase.initializeApp(firebaseConfig);

export const Resultado = () => {
  const [userName, setUserName] = useState('');

  useEffect(() => {
    const user = firebase.auth().currentUser;

    if (user) {
      // obtendo um usuário autenticado
      const uid = user.uid;
      const userRef = firebase.firestore().collection('usuarios').doc(uid);

      // consultando o Firestore para obter o nome do usuário
      userRef.get().then((doc) => {
        if (doc.exists) {
          const userData = doc.data();
          const name = userData.nome;
          setUserName(name);
        }
      });
    }
  }, []);

  return (
    <>
      <DivTrail>
        <Title>Hi, {userName}</Title>
        <Title>Sua trilha de aprendizado</Title>
      </DivTrail>
      <div>
        <Row xmlns="http://www.w3.org/2000/svg" width="350" height="80" viewBox="0 0 259 65" fill="none">
          <path d="M1.80803 56.5678L4.20724 58.4681C13.4677 65.8026 26.8136 64.7715 34.8376 56.1016V56.1016C41.7312 48.6529 52.7436 46.7108 61.7694 51.3519L64.1986 52.601C73.7397 57.5071 85.3075 56.102 93.3966 49.0544L105.589 38.4319C118.54 27.1484 137.424 25.8802 151.767 35.3306V35.3306C169.522 47.0287 193.409 42.0047 204.947 24.1456L208.51 18.6313C220.965 -0.646527 247.886 -3.83499 264.5 12V12" stroke="#95D5F8" strokeWidth="3" />
        </Row>
      </div>
      <DivContent />
    </>
  );
};
