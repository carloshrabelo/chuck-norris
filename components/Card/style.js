import styled from 'styled-components'

export const Title = styled.h1`
  margin: 0;
`

export const Item = styled.a`
  cursor: pointer;

  &:hover {
    background: var(--bg);
  }
`

export const Footer = styled.div`
  align-items: stretch;
  border-top: 1px solid #ededed;
  display: flex;

  ${Item} {
    align-items: center;
    display: flex;
    flex: 1;
    gap: 0.5em;
    justify-content: center;
    padding: var(--space-sm);

    svg {
      font-size: 1.5em;
    }
  }
`

export const Header = styled.div`
  align-items: stretch;
  align-items: center;
  display: flex;
  gap: var(--space);
  justify-content: space-between;
  padding: var(--space-sm) var(--space);
  position: relative;
`

export const Content = styled.div`
  flex: 1;
  gap: var(--space);
  padding: var(--space);
  position: relative;
`

export const Card = styled.div`
  background-color: var(--paper-bg);
  border-radius: var(--space-sm);
  box-shadow: var(--box-shadow);
  display: flex;
  flex-direction: column;
`
