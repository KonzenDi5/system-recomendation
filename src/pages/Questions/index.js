import { useState, useEffect } from "react";
import { Card, Content, DivContent, Progress, ProgressBar, Title } from "./style";
import { Button } from "../../components/button";
import { useNavigate } from "react-router-dom";

export const Questions = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const savedAnswers = localStorage.getItem("answers");
    if (savedAnswers) {
      setAnswers(JSON.parse(savedAnswers));
    }
  }, []);

  const generateUniqueCode = (questionIndex, answerIndex) => {
    return `P${questionIndex + 1}A${answerIndex + 1}${Math.random().toString(36).substr(2, 5)}`;
  };

  const questions = [
    { 
      question: "Qual seu nível de disposição? (bem estar físico)",
      answers: [
        "a) Sinto disposição para realizar todas as atividades do meu dia.",
        "b) Sinto uma leve sensação de cansaço, mas sem muitos problemas para realizar minhas atividades.",
        "c) Me sinto bastante cansado, pois realizo muitas atividades no meu dia.",
        "d) Me sinto constantemente cansado e sem motivação para realizar minhas atividades."
      ]
    },
    { 
      question: "Como é sua alimentação? (bem estar físico)",
      answers: [
        "a) Tenho cuidado para manter uma dieta saudável e equilibrada.",
        "b) Possuo uma boa educação alimentar e raramente exagero.",
        "c) Como bastante fast food e/ou doces durante a semana, mas tento me alimentar bem às vezes.",
        "d) Na correria do dia a dia, acabo não conseguindo me alimentar de forma saudável."
      ]
    },
    { 
      question: "Qual seu nível de estresse atualmente? (bem estar emocional)",
      answers: [
        "a) Consigo encarar minha rotina de forma calma e controlada.",
        "b) Possuo alguns poucos momentos de irritação durante a semana.",
        "c) Passo grande parte do meu dia irritado/estressado, mas consigo separar algum momento do meu dia para relaxar.",
        "d) Estou em constante pressão e estresse, sinto que estou prestes a explodir."
      ]
    },
    { 
      question: "Como estão seus níveis de foco e atenção? (bem estar mental)",
      answers: [
        "a) Consigo focar nas minhas atividades de forma plena e sem distrações.",
        "b) Consigo realizar minhas tarefas diárias, mas me distraio em alguns momentos.",
        "c) Tenho pensamentos repetitivos e não consigo focar no que preciso fazer.",
        "d) Estou sempre preocupado(a) com o futuro e/ou triste com o passado."
      ]
    },
    { 
      question: "Como você se sente em seu círculo social? (bem estar social)",
      answers: [
        "a) Possuo uma ótima rede de apoio e faço amigos facilmente.",
        "b) Tenho um bom ciclo de relações sociais.",
        "c) Tenho dificuldades para fazer amizades.",
        "d) Me sinto muito sozinho(a) e não sei como criar uma rede de apoio."
      ]
    },
    { 
      question: "Espiritualidade e Perspectiva de Vida (bem estar espiritual e intelectual)",
      answers: [
        "a) Sempre aprendo com momentos difíceis e estou em constante evolução.",
        "b) Possuo facilidade em aceitar o momento presente e agradeço pelas minhas conquistas.",
        "c) Tenho dificuldades em vivenciar situações desafiadoras e me sinto triste por estar desconfortável.",
        "d) Sinto uma forte irritação quando as coisas estão fora do meu controle."
      ]
    },
    // podemos por mais perguntas aqui
  ];

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      localStorage.setItem("answers", JSON.stringify(answers));
      navigate('/trail')
    }
  };

  const selectAnswer = (answer, answerIndex) => {
    setSelectedAnswer({ answer, code: generateUniqueCode(currentQuestion, answerIndex) });
  };

  //currentQuestion é um índice válido?
  if (currentQuestion >= questions.length || currentQuestion < 0) {
    return <div>Erro: Índice de pergunta inválido.</div>;
  }

  return (
    <DivContent>
      <ProgressBar>
        <Progress width={`${((currentQuestion) / (questions.length)) * 100}%`} />
      </ProgressBar>
      <Content>
        <Title>{questions[currentQuestion].question}</Title>
        {questions[currentQuestion].answers.map((answer, index) => (
          <Card
            key={index}
            onClick={() => selectAnswer(answer, index)}
            style={
              selectedAnswer && selectedAnswer.answer === answer
                ? { backgroundColor: "#7A81DA" }
                : {}
            }
          >
            {answer}
          </Card>
        ))}
      </Content>
      <Button
        label={"Next Question"}
        type={"submit"}
        onClick={() => {
          if (selectedAnswer) {
            setAnswers((prevAnswers) => [
              ...prevAnswers,
              {
                question: questions[currentQuestion].question,
                answer: selectedAnswer.answer,
                code: selectedAnswer.code,
              },
            ]);
            setSelectedAnswer(null);
            nextQuestion();
          }
          //levar para o register após a última 
        }}
      />
    </DivContent>
  );
};
