import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";

import { IoMdRefresh, IoMdShareAlt, IoMdColorWand } from "react-icons/io";

import Card, { Title, Item } from "components/Card";

import Badge from "components/Badge";
import { search, selectorByCategory } from "reducers/jokes";
import Spinner from "components/Spinner";

const ArrowLink = styled(IoMdShareAlt)`
  transform: scaleY(-1);
`;

const EmptyTitle = styled.h2`
  color: var(--secondary);
  text-align: center;
`;

const CardJoke = ({ category = "random" }) => {
  const dispatch = useDispatch();
  const { data, isLoading } = useSelector(selectorByCategory(category));

  const fetch = () => !isLoading && dispatch(search(category));

  const [lastItem] = data;
  const count = data.length;

  const empty = {
    Icon: IoMdColorWand,
    textGet: "Discover",
    value: (
      <EmptyTitle>Discover some jokes about &quot;{category}&quot;</EmptyTitle>
    ),
  };
  const filled = {
    Icon: IoMdRefresh,
    textGet: "Get another",
    value: lastItem?.value,
  };

  const { Icon, textGet, value } = !lastItem?.value ? empty : filled;

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
          <Link href={category} passHref>
            <Item>
              <ArrowLink />
              Show category
            </Item>
          </Link>
          <Item onClick={fetch} disabled={isLoading}>
            <Icon />
            {textGet}
          </Item>
        </>
      }
    >
      {!isLoading ? value : <Spinner />}
    </Card>
  );
};

CardJoke.propTypes = {
  category: PropTypes.string,
};

export default CardJoke;
