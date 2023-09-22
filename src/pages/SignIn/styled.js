import styled from 'styled-components'
import { Themes } from '../../styles/themes'

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`

export const Logo = styled.img`
  width: 100px;
  margin-bottom: 20px;
`

export const CompanyName = styled.h1`
  color: ${Themes.purple};
  font-size: 20px;
  margin-bottom: 20px;
`

export const Link = styled.a`
  display: block;
  margin: 10px 0;
  color: ${Themes.purple};
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`

export const Button = styled.button`
  padding: 10px 30px;
  background-color: ${Themes.lightBlue};
  color: ${Themes.purple};
  border: none;
  border-radius: 30px;
  cursor: pointer;
  &:hover {
    color: ${Themes.darkBlue};
  }
`