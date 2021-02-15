import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'

import { search, selector } from 'reducers/categories'
import CardJoke from 'containers/Joke/Card'

const Main = styled.div`
  display: grid;
  gap: var(--space);
  grid-template-columns: repeat(auto-fit, minmax(100px, 360px));
  justify-content: center;
`

export default function Home () {
  const dispatch = useDispatch()
  const { data, isLoading } = useSelector(selector)

  useEffect(() => {
    !isLoading && !data.length && dispatch(search())
  }, [isLoading, data])

  return (
    <Main>
      {data.map((category, key) => (
        <CardJoke key={key} category={category} />
      ))}
    </Main>
  )
}
