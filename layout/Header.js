import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import styled from "styled-components";
import Link from "next/link";
import { Dropdown, Label, Item } from "components/Dropdown";
import { search, selector } from "reducers/categories";

const HeaderDOM = styled.header`
  background: var(--paper-bg);
  box-shadow: var(--box-shadow);
  display: flex;
  gap: var(--space-lg);
  padding: var(--space) var(--space-lg);
  position: sticky;
  top: 0;
  z-index: 99;

  h1 {
    margin: 0;
  }
`;

const DropdownDOM = styled(Dropdown)`
  margin: calc(-1 * var(--space)) 0;
  padding: var(--space) var(--space-lg);
  text-transform: capitalize;

  ${Label} {
    color: var(--secondary);
    font-family: var(--font-family-header);
  }
`;

const Header = () => {
  const dispatch = useDispatch();

  const { data, isLoading } = useSelector(selector);

  useEffect(() => {
    !isLoading && !data.length && dispatch(search());
  }, [isLoading, data]);

  return (
    <HeaderDOM>
      <h1>
        <Link href="/">
          <a>Chuck Norris</a>
        </Link>
      </h1>
      <DropdownDOM label="Categories">
        <nav>
          {data.map((category, key) => (
            <Link href={category} key={key} passHref>
              <Item>{category}</Item>
            </Link>
          ))}
        </nav>
      </DropdownDOM>
    </HeaderDOM>
  );
};

Header.propTypes = {
  children: PropTypes.element,
};

export default Header;
