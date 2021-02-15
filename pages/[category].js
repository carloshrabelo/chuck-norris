import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'

import { search } from 'reducers/categories'
import CardJoke from 'containers/Joke/Card'
import { selectorByCategory } from 'reducers/jokes'
import Card from 'components/Card'

const Hero = styled.div`
  justify-content: center;
  margin-bottom: var(--space);
`

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
  const dispatch = useDispatch()
  const router = useRouter()
  const { category } = router.query

  const { data, isLoading } = useSelector(selectorByCategory(category))

  useEffect(() => {
    !isLoading && !data.length && dispatch(search())
  }, [isLoading, data])

  return (
    <>
      <Hero>
        <CardJoke category={category} />
      </Hero>
      <Main>
        {data.slice(1, data.length).map(d => (
          <Card key={d.id}>{d.value}</Card>
        ))}
      </Main>
    </>
  )
}
