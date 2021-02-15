import styled, { css } from 'styled-components'
import { IoMdRefresh } from 'react-icons/io'

const animation = css`
  @keyframes rotation {
    from {
      transform: rotate(0deg);
    }

    to {
      transform: rotate(359deg);
    }
  }
`

export const Spinner = styled(IoMdRefresh)`
  align-self: center;
  animation: rotation 2s linear infinite;
  font-size: 3em;
  margin: 0 auto;

  ${animation}
`
export default Spinner
