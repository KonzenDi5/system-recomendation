import { useNavigate } from 'react-router-dom';
import { Button } from '../../components/button';
import { Background, Content, Title } from "./style"

export const Initial = () => {
  const navigate = useNavigate()

  const handleNavigate = () => {
    navigate('/questions')
  }
  const handleNavigateLogin = () => {
    navigate('/sign-in')
  }

  return (
    <Background>
      <Button 
        type={'submit'}
        label={'Log in'}
        onClick={handleNavigateLogin}
        color={'blue'}
      />
      <Content>
        <Title>COOL TEA COMPANY</Title>
        <Button
          type={'submit'}
          label={'Iniciar'}
          onClick={handleNavigate}
          color={'blue'}
        />
      </Content>
    </Background>
  )
}
