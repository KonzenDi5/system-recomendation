import styled from 'styled-components'
import { Themes } from '../../styles/themes'
import backgroungImg from '../../assets/background_initial.png'

export const Background = styled.div`
  background-image: url(${backgroungImg});
  width: 100vw;
  height: 100vh;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;

  & button {
    background-color: ${Themes.white};
    color: ${Themes.darkBlue};
    font-weight: 700;
    width: 200px;
    height: 50px;
    margin: 8vh 0 0 30vw;
  }
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  & button {
    background-color: ${Themes.white};
    font-weight: 700;
    width: 200px;
    height: 50px;
    margin: 0 0 20vh 20px;
  }
`

export const Title = styled.h1`
  font-family: 'Abhaya Libre', serif;
  color: ${Themes.white};
  font-size: 50px;
  padding-left: 20px;
  font-weight: 700;
`