import React from "react";
import PropTypes from "prop-types";
import * as S from "./style";
export { Label, Item } from "./style";

export const Dropdown = ({ label, children, ...props }) => (
  <S.Dropdown {...props}>
    <S.Label>{label}</S.Label>
    <S.Content>{children}</S.Content>
  </S.Dropdown>
);

Dropdown.propTypes = {
  label: PropTypes.string,
  children: PropTypes.any,
};

export default Dropdown;
