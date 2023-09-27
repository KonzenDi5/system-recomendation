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
`