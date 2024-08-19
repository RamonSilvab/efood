import Tag from '../Tag'

import Estrela from '../assets/images/star_favorite-[#1499].png'
import LojaImg from '../assets/images/comidaJaponesa.png'
import {
  Card,
  TituloContainer,
  AvaliacaoContainer,
  DescricaoContainer,
  Container,
  Avaliacao
} from './styles'

export const Product = () => (
  <Card>
    <img src={LojaImg} alt="sushi" />
    <Tag>Destaque da semana</Tag>
    <Tag>Japonesa</Tag>
    <Container>
      <TituloContainer>
        <h3>Hioki Sushi </h3>
        <AvaliacaoContainer>
          <Avaliacao>4.9</Avaliacao>
          <img src={Estrela} alt="estrela" />
        </AvaliacaoContainer>
      </TituloContainer>
      <DescricaoContainer>
        Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis
        frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega
        rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão
        sem sair do lar com nosso delivery!
      </DescricaoContainer>
      <Tag type="buttom">Saiba mais</Tag>
    </Container>
  </Card>
)
