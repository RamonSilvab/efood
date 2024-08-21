import { CardDishes, BtnDishe } from './styles'

export type Props = {
  image: string
  title: string
  description: string
}

const Dishes = ({ image, title, description }: Props) => (
  <CardDishes>
    <img src={image} alt={title} />
    <h4>{title}</h4>
    <p>{description}</p>
    <BtnDishe>Adicionar ao carrinho</BtnDishe>
  </CardDishes>
)

export default Dishes
