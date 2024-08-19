import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Header } from './components/Header'
import GlobalCss from './syles'
import ProductsList from './components/ProductsList'

const rotas = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <Header />
        <div>Teste</div>
        <ProductsList />
      </>
    )
  }
])

function App() {
  return (
    <>
      <GlobalCss />
      <Header />
      <ProductsList />
      <RouterProvider router={rotas} />
    </>
  )
}

export default App
