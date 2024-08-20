import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import GlobalCss from './syles'
import Home from './pages/Home'
import Cardapio from './pages/Cardapio'

const rotas = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/cardapio',
    element: <Cardapio />
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
