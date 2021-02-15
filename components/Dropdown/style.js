import styled from "styled-components";

export const Content = styled.div`
  box-shadow: var(--box-shadow);
  display: none;
  left: 0;
  max-height: calc(100vh - 80px);
  min-width: 160px;
  overflow: auto;
  position: absolute;
  right: 0;
  z-index: 1;
`;

export const Item = styled.a`
  background: var(--paper-bg);
  border-bottom: 1px var(--gray) solid;
  display: block;
  padding: var(--space);

  &:hover {
    background: var(--paper-bg-hover);
  }
`;

export const Label = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
`;

export const Dropdown = styled.div`
  background: var(--paper-bg);
  cursor: pointer;
  display: inline-block;
  position: relative;

  &:hover {
    background: var(--paper-bg-hover);

    ${Content} {
      display: block;
    }
  }
`;

export default Dropdown;
