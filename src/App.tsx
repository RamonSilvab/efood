import { BrowserRouter } from 'react-router-dom'
import { Header } from './components/Header'
import GlobalCss from './syles'
import Tag from './Tag'

function App() {
  return (
    <BrowserRouter>
      <GlobalCss />
      <Header />
    </BrowserRouter>
  )
}

export default App
