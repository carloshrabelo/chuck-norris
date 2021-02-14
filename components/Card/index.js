import PropTypes from 'prop-types'

import * as S from './style'
export { Header, Title, Item } from './style'

const Card = ({ title, header, footer, children }) => {
  const cardHeader =
    !header && !title ? null : header || <S.Title>{title}</S.Title>
  return (
    <S.Card>
      {cardHeader && <S.Header>{cardHeader}</S.Header>}
      <S.Content>{children}</S.Content>
      {footer && <S.Footer>{footer}</S.Footer>}
    </S.Card>
  )
}

Card.propTypes = {
  title: PropTypes.string,
  header: PropTypes.element,
  footer: PropTypes.element,
  children: PropTypes.any
}

export default Card
