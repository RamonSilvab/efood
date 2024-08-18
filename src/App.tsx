import { BrowserRouter } from 'react-router-dom'
import { Header } from './components/Header'
import GlobalCss from './syles'
import Tag from './Tag'
import { Product } from './Product'

function App() {
  return (
    <BrowserRouter>
      <GlobalCss />
      <Header />
      <Product />
    </BrowserRouter>
  )
}

export default App
