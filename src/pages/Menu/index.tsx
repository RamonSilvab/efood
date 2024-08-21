import HeaderMenu from '../../components/HeaderMenu'
import Footer from '../../components/Footer'
import Pizza from '../../assets/images/pizza.png'
import Dishes from '../../models/Dishes'

const pratos: Dishes[] = [
  {
    id: 1,
    image: Pizza,
    title: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
  }
]

const Menu = () => (
  <>
    <HeaderMenu />
    <DishesList dishesapi={pratos} />
    <Footer />
  </>
)

export default Menu
