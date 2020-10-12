import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const PageLanding = styled.div`
  width: 100vw;
  height: 100vh;
  background: ${props => props.theme.colors.backgroundLanding};

  display: flex;
  justify-content: center;
  align-items: center;
`
export const ContentWrapper = styled.div`
  position: relative;

  width: 100%;
  max-width: 1100px;

  height: 100%;
  max-height: 680px;

  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: space-between;

  background: url(${props => props.theme.landing}) no-repeat 80% center;

  main {
    max-width: 350px;
    animation: mainAnimation 5s linear 0s infinite alternate;
  }
  @keyframes mainAnimation {
    0% {
      color: #fff;
    }
    25% {
      color: #d6d6d6;
    }
    50% {
      color: #828282;
    }
    75% {
      color: #444444;
    }
    100% {
      color: #000000;
    }
  }

  main h1 {
    font-size: 76px;
    font-weight: 900;
    line-height: 70px;
  }

  main p {
    margin-top: 40px;
    font-size: 24px;
    line-height: 34px;
  }

  img {
    transition: transform 0.2s;
    animation: myFirst 0.8s linear 0s infinite alternate;
  }
  @keyframes myFirst {
    0% {
      transform: translateY(100px);
    }
    25% {
      transform: translateY(75px);
    }
    50% {
      transform: translateY(50px);
    }
    75% {
      transform: translateY(25px);
    }
    100% {
      transform: scale(1.5);
    }
  }
`

export const Location = styled.div`
  position: absolute;
  right: 0;
  top: 0;

  font-size: 24px;
  line-height: 34px;

  display: flex;
  flex-direction: column;

  text-align: right;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.5);
  }

  strong {
    font-weight: 800;
  }
`

export const EnterApp = styled(Link)`
  position: absolute;
  right: 0;
  bottom: 0;

  width: 80px;
  height: 80px;
  background: #ffd666;
  border-radius: 30px;

  display: flex;
  align-items: center;
  justify-content: center;

  transition: background-color 0.2s;
  transition: transform 0.2s;
  animation: scaleButton 1s infinite alternate;
  &:hover {
    background: #96feff;
  }

  @keyframes scaleButton {
    from {
      transform: scale(1.5);
    }
    to {
      transform: scale(1);
    }
  }
`
