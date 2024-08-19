import { Product } from '../../Product'
import { Container, List } from './styles'

const ProductsList = () => (
  <Container>
    <div className="container">
      <List>
        <Product
          title="Hioki Sushi"
          avaliacao={4.9}
          description="teste"
          image="//placehold.it/472x217"
          infos={['Destaque da semana', 'Japonesa']}
        />
        <Product
          title="La Dolce Vita Trattoria"
          avaliacao={4.6}
          description="teste2"
          image="//placehold.it/472x217"
          infos={['Italiana']}
        />
        <Product
          title="Hioki Sushi"
          avaliacao={4.6}
          description="teste"
          image="//placehold.it/472x217"
          infos={['Destaque da semana', 'Japonesa']}
        />
        <Product
          title="Hioki Sushi"
          avaliacao={4.9}
          description="teste"
          image="//placehold.it/472x217"
          infos={['Destaque da semana', 'Japonesa']}
        />
      </List>
    </div>
  </Container>
)

export default ProductsList
