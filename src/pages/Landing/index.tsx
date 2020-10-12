import React from 'react'
import { FiArrowRight } from 'react-icons/fi'
import { PageLanding, ContentWrapper, Location, EnterApp } from './styles'
import logoImg from '../../images/logo.svg'

const Landing: React.FC = () => {
  return (
    <PageLanding>
      <ContentWrapper>
        <img src={logoImg} alt="Happy" />

        <main>
          <h1>Leve felicidade para o mundo</h1>
          <p>Visite orfanatos e mude o dia de muitas crianças.</p>
        </main>

        <Location>
          <strong>Serra</strong>
          <span>Espírito Santo</span>
        </Location>

        <EnterApp to="/app">
          <FiArrowRight size={26} color="rgba(0,0,0,0.6)" />
        </EnterApp>
      </ContentWrapper>
    </PageLanding>
  )
}

export default Landing
