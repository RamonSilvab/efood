import { createGlobalStyle } from 'styled-components'

const cores = {
  branco: '#eee',
  vermelhoRosado: '#E66767',
  laranjaClaro: '#FFEBD9'
}

const GlobalCss = createGlobalStyle`
  * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Roboto, sans-serif;

  body {
    backround-color: ${cores.branco};
    color: ${cores.vermelhoRosado};
  }
}
`

export default GlobalCss
