import { createGlobalStyle } from 'styled-components'
import { Themes } from './themes'

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Raleway', sans-serif;
  }

  body,
  #root {
    min-height: 100vh;
    overflow: hidden;

    ::-webkit-scrollbar {
      display: none;
    }
  }

  #root {
    background: ${Themes.white};
    background-repeat: no-repeat;
    background-size: calc(120vh / 2);
    background-position: center right;
    height: 100vh;
    overflow-y: scroll;
  }

  @media (max-width: 768px) {
    #root {
      background: ${Themes.white};
    }
  }
`
