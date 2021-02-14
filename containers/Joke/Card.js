import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { IoMdRefresh, IoMdShareAlt, IoMdColorWand } from 'react-icons/io'

import Card, { Title, Item } from 'components/Card'

import Badge from 'components/Badge'

const ArrowLink = styled(IoMdShareAlt)`
  transform: scaleY(-1);
`

const _data = {
  categories: ['career'],
  created_at: '2020-01-05 13:42:19.576875',
  icon_url: 'https://assets.chucknorris.host/img/avatar/chuck-norris.png',
  id: 'zk14uc6xr82d7ig9qhaymg',
  updated_at: '2020-01-05 13:42:19.576875',
  url: 'https://api.chucknorris.io/jokes/zk14uc6xr82d7ig9qhaymg',
  value:
    "Chuck Norris is actually the front man for Apple. He let's Steve Jobs run the show when he's on a mission. Chuck Norris is always on a mission."
}

const CardJoke = ({ category }) => {
  useEffect(() => {
    // !data.length && dispatch(search())
    console.info(category)
  }, [])
  const data = Array(12)
    .fill(_data)
    .filter(joke => joke.categories.includes(category))

  const [lastItem] = data

  const value = lastItem?.value || (
    <h2>Discover some jokes about "{category}"</h2>
  )
  const moreJockes = lastItem?.value ? (
    <>
      <IoMdRefresh />
      Get another
    </>
  ) : (
    <>
      <IoMdColorWand />
      Discover
    </>
  )

  const count = data.length

  return (
    <Card
      header={
        <>
          <Title>{category}</Title>
          {!!count && <Badge>{count}</Badge>}
        </>
      }
      footer={
        <>
          <Item>
            <ArrowLink />
            Show category
          </Item>
          <Item>{moreJockes}</Item>
        </>
      }
    >
      {value}
    </Card>
  )
}

CardJoke.propTypes = {
  category: PropTypes.string
}

export default CardJoke
