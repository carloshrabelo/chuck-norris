import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

import { selector } from 'reducers/categories'
import CardJoke from 'containers/Joke/Card'

const Main = styled.div`
  display: grid;
  gap: var(--space);
  grid-template-columns: repeat(auto-fit, minmax(100px, 360px));
  justify-content: center;

  @media only screen and (max-width: 800px) {
    grid-template-columns: 1fr 1fr;
  }

  @media only screen and (max-width: 425px) {
    grid-template-columns: 1fr;
  }
`

export default function Home () {
  const { data } = useSelector(selector)

  return (
    <Main>
      {data.map((category, key) => (
        <CardJoke key={key} category={category} />
      ))}
    </Main>
  )
}
