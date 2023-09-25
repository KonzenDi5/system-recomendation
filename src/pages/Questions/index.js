import { useState } from "react";
import { DivContent, Progress, ProgressBar } from "./style"
import { Button } from "../../components/button";

export const Questions = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState([])
  const [selectedAnswer, setSelectedAnswer] = useState(null)

  const questions = [
    { 
      question: "Como é sua alimentação?", 
      answers: [
        "Me sinto constantemente cansado e sem motivação. Na correria, a alimentação saudável fica em segundo plano.",
        "Sinto uma leve fadiga, mas estou mais atento à minha saúde. Estou aprendendo a equilibrar minha dieta",
        "Estou mais ativo, mas ainda caio na tentação do fast food/comfort food como pizzas e comida congelada. Busco equilíbrio.",
        "Sinto-me em harmonia, com energia e foco na saúde. Minha alimentação é um reflexo do meu bem-estar"
      ] 
    },
    { question: "Pergunta 2", answers: ["A", "B", "C", "D"] },
    { question: "Pergunta 3", answers: ["A", "B", "C", "D"] },
    { question: "Pergunta 4", answers: ["A", "B", "C", "D"] },
    { question: "Pergunta 5", answers: ["A", "B", "C", "D"] },
    { question: "Pergunta 6", answers: ["A", "B", "C", "D"] }, 
  ]

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    }
  }

  const handleAnswer = (answer) => {
    setAnswers(prevAnswers => [...prevAnswers, answer]);
    nextQuestion();
  }

  const selectAnswer = (answer) => {
    setSelectedAnswer(answer);
  }

    return (
      <DivContent>
        <ProgressBar>
          <Progress width={`${((currentQuestion) / (questions.length)) * 100}%`} />
        </ProgressBar>
        <div>
          <h2>{questions[currentQuestion].question}</h2>
          {questions[currentQuestion].answers.map((answer, index) => (
              <button 
              key={index} 
              onClick={() => selectAnswer(answer)}
              style={answer === selectedAnswer ? { backgroundColor: 'lightgray' } : {}}
          >
              {answer}
          </button>
          ))}
        </div>
        <Button 
          onClick={() => {
            if (selectedAnswer) {
              setAnswers(prevAnswers => [...prevAnswers, selectedAnswer]);
              setSelectedAnswer(null);
              nextQuestion();
            }
          }}>
          Next Question
        </Button>
      </DivContent>
    )
  }
  