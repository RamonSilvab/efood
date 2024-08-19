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
        <ProductsList />
      </>
    )
  },
  {
    path: '/restaurante',
    element: (
      <>
        <Header />
        teste 1
        <ProductsList />
      </>
    )
  }
])

function App() {
  return (
    <>
      <GlobalCss />
      <RouterProvider router={rotas} />
    </>
  )
}

export default App
