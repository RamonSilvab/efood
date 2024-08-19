import styled from 'styled-components'
import { cores } from '../syles'
import { TagContainer } from '../Tag/styles'

export const Card = styled.div`
  width: 472px;
  height: 398px;

  ${TagContainer} {
    margin-right: 8px;
  }
`
export const TituloContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

export const AvaliacaoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
export const Avaliacao = styled.h3`
  padding-right: 8px;
`

export const DescricaoContainer = styled.p`
  padding: 8px 0;
  font-size: 14px;
  text-align: justify;
`
export const Container = styled.div`
  padding: 8px;
  border: 1px solid ${cores.vermelhoRosado};
`
