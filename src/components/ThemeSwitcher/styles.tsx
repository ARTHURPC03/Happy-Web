import styled from 'styled-components'

export const Container = styled.div`
  position: absolute;
  margin-top: 15px;
  top: 0;
  left: 50%;

  z-index: 10;
  transition: transform 0.9s;
  &:hover {
    transform: scale(1.5);
  }
`
