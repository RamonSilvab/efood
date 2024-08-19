import Tag from '../Tag'

import Estrela from '../assets/images/star_favorite-[#1499].png'
import {
  Card,
  TituloContainer,
  AvaliacaoContainer,
  Descricao,
  Container,
  Avaliacao,
  Infos,
  Img
} from './styles'

type Props = {
  title: string
  infos: string[]
  avaliacao: number
  description: string
  image: string
}

export const Product = ({
  title,
  infos,
  avaliacao,
  description,
  image
}: Props) => (
  <Card>
    <Img src={image} alt={title} />
    <Infos>
      {infos.map((info) => (
        <Tag key={info}>{info}</Tag>
      ))}
    </Infos>
    <Container>
      <TituloContainer>
        <h3>{title}</h3>
        <AvaliacaoContainer>
          <Avaliacao>{avaliacao}</Avaliacao>
          <img src={Estrela} alt="estrela" />
        </AvaliacaoContainer>
      </TituloContainer>
      <Descricao>{description}</Descricao>
      <Tag type="buttom">Saiba mais</Tag>
    </Container>
  </Card>
)
