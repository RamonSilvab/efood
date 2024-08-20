import { BrowserRouter, Route, Routes } from 'react-router-dom'
import GlobalCss from './syles'
import Home from './pages/Home'
import Cardapio from './pages/Cardapio'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/cardapio" element={<Cardapio />} />
  </Routes>
)

function App() {
  return (
    <BrowserRouter>
      <GlobalCss />
      <Rotas />
    </BrowserRouter>
  )
}

export default App
