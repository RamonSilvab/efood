import { Link } from 'react-router-dom'

import logo from '../../assets/images/logo.png'
import { Container, Imagem } from './styles'
import imgHeader from '../../assets/images/fundo.png'
import apresentacao from '../../assets/images/apresentacao.png'

const HeaderCardapio = () => (
  <Imagem style={{ backgroundImage: `url(${imgHeader})` }}>
    <Container>
      <div>
        <Link to="/">
          <h2>Restaurantes</h2>
        </Link>
        <h1>
          <img src={logo} alt="logo do restaurant" />
        </h1>
        <h2>0 produto(s) no carrinho</h2>
      </div>
      <img src={apresentacao} alt="apresentacao" />
    </Container>
  </Imagem>
)

export default HeaderCardapio
