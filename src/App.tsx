import { Principal, Container } from './Components/Principal'
import { Card_Front } from './Components/CardFront/Index'
import { Card_Back } from './Components/CardBack/Index'

const App = () => {
  return (
    <Principal>
      <Container></Container>
      <Container>
          <Card_Front />          
          <Card_Back />
      </Container>
    </Principal>
  )
}

export default App
