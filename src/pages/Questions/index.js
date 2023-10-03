import { useState, useEffect } from "react";
import { Card, Content, DivContent, Progress, ProgressBar, Title } from "./style";
import { Button } from "../../components/button";
import { useNavigate } from "react-router-dom";

export const Questions = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [totalValue, setTotalValue] = useState(0);
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
      question: "Qual seu nível de disposição?",
      answers: [
        { text: " Sinto disposição para realizar todas as atividades do meu dia.", value: 5 },
        { text: " Sinto uma leve sensação de cansaço, mas sem muitos problemas para realizar minhas atividades.", value: 4 },
        { text: " Me sinto bastante cansado, pois realizo muitas atividades no meu dia.", value: 3 },
        { text: " Me sinto constantemente cansado e sem motivação para realizar minhas atividades.", value: 2 }
      ]
    },
    { 
      question: "Como é sua alimentação?",
      answers: [
        { text: "Tenho cuidado para manter uma dieta saudável e equilibrada.", value: 5 },
        { text: "Possuo uma boa educação alimentar e raramente exagero.", value: 4 },
        { text: "Como bastante fast food e/ou doces durante a semana, mas tento me alimentar bem às vezes.", value: 3 },
        { text: "Na correria do dia a dia, acabo não conseguindo me alimentar de forma saudável.", value: 2 }
      ]
    },
    { 
      question: "Qual seu nível de estresse atualmente?",
      answers: [
        { text: "Consigo encarar minha rotina de forma calma e controlada.", value: 5 },
        { text: "Possuo alguns poucos momentos de irritação durante a semana.", value: 4 },
        { text: "Passo grande parte do meu dia irritado/estressado, mas consigo separar algum momento do meu dia para relaxar.", value: 3 },
        { text: "Estou em constante pressão e estresse, sinto que estou prestes a explodir.", value: 2 }
      ]
    },
    { 
      question: "Como estão seus níveis de foco e atenção?",
      answers: [
        { text: "Consigo focar nas minhas atividades de forma plena e sem distrações.", value: 5 },
        { text: "Consigo realizar minhas tarefas diárias, mas me distraio em alguns momentos.", value: 4 },
        { text: "Tenho pensamentos repetitivos e não consigo focar no que preciso fazer.", value: 3 },
        { text: "Estou sempre preocupado(a) com o futuro e/ou triste com o passado.", value: 2 }
      ]
    },
    { 
      question: "Como você se sente em seu círculo social?",
      answers: [
        { text: "Possuo uma ótima rede de apoio e faço amigos facilmente.", value: 5 },
        { text: "Tenho um bom ciclo de relações sociais.", value: 4 },
        { text: "Tenho dificuldades para fazer amizades.", value: 3 },
        { text: "Me sinto muito sozinho(a) e não sei como criar uma rede de apoio.", value: 2 }
      ]
    },
    { 
      question: "Espiritualidade e Perspectiva de Vida",
      answers: [
        { text: "Sempre aprendo com momentos difíceis e estou em constante evolução.", value: 5 },
        { text: "Possuo facilidade em aceitar o momento presente e agradeço pelas minhas conquistas.", value: 4 },
        { text: "Tenho dificuldades em vivenciar situações desafiadoras e me sinto triste por estar desconfortável.", value: 3 },
        { text: "Sinto uma forte irritação quando as coisas estão fora do meu controle.", value: 2 }
      ]
    },
    // Outras perguntas aqui
  ];

  const calculateTotalValue = () => {
    let totalValue = 0;
    for (const answer of answers) {
      if (typeof answer.value === 'number') {
        totalValue += answer.value;
      }
    }
    return totalValue;
  };

const nextQuestion = () => {
  if (currentQuestion < questions.length - 1) {
    setCurrentQuestion(currentQuestion + 1);
  } else {
    const totalValue = calculateTotalValue();
    setTotalValue(totalValue);
    localStorage.setItem("answers", JSON.stringify(answers));
    localStorage.setItem("valueQuestions", totalValue); // Salva o valor total nas respostas
    navigate("/sign-up");
  }
};



  const selectAnswer = (answer, answerIndex) => {
    const selectedValue = questions[currentQuestion].answers[answerIndex].value;
    setSelectedAnswer({ answer, code: generateUniqueCode(currentQuestion, answerIndex), value: selectedValue });
  };

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
            onClick={() => selectAnswer(answer.text, index)}
            style={
              selectedAnswer && selectedAnswer.answer === answer.text
                ? { backgroundColor: "#7A81DA" }
                : {}
            }
          >
            {answer.text}
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
                value: selectedAnswer.value
              },
            ]);
            setSelectedAnswer(null);
            nextQuestion();
          }
        }}
      />
      {currentQuestion >= questions.length && (
        <div>
          <p>Valor Total: {totalValue}</p>
          <Button
            label={"Continuar"}
            type={"button"}
            onClick={() => navigate("/sign-up")}
          />
        </div>
      )}
    </DivContent>
  );
};
