import styled from 'styled-components'
import { Themes } from '../../styles/themes'

export const DivContent = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  & button {
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 5vh;
  }
`

export const ProgressBar = styled.div`
  width: 90%;
  height: 15px;
  background-color: ${Themes.lightBlue};
  border-radius: 10px;
  overflow: hidden;
`

export const Progress = styled.div`
  width: ${props => props.width || '0%'};
  height: 100%;
  border-radius: 10px;
  background-color: ${Themes.purple};
  transition: width 0.3s ease; /* Adiciona uma transição suave à largura */
`

export const Content = styled.div`
  width: 100vw;
`

export const Title = styled.h2`
  color:  ${Themes.darkBlue};
  font-size: 24px;
  text-align: center;
  margin: 30px 0;
`

export const Card = styled.div`
  min-width: 90%;
  min-height: 80px;
  margin: 10px;
  background-color: ${Themes.lightBlue};
  border-radius: 30px;
  padding: 20px 30px;
  cursor: pointer;
  transition: background-color 0.3s ease; /* Adiciona uma transição suave à cor de fundo */
`

//  classe para o botão selecionado
export const Button = styled.button`
  cursor: pointer;
  transition: box-shadow 0.3s ease; /* Adiciona uma transição suave ao brilho */
  
  &.Button-selected {
    box-shadow: 0 0 10px rgba(122, 129, 218, 0.8); /* Adiciona um leve brilho ao botão selecionado */
  }
`
