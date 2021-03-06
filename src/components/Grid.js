import React from 'react';
import { observer, inject } from 'mobx-react';
import styled from 'styled-components';
import Item from './Item';
import Order from './Order';

const GridWrapper = styled.div`
  max-width: 1000px;
  width: 1000px;
  margin: 2rem auto;
  display: flex;
  justify-content: space-between;
`

const ItemsWrapper = styled.div`
  width: calc(700px - 1rem);
  margin: 0;
  padding: 0;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 12px;
  }

  ::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.5);
  }
`;

const ItemList = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;

  li:last-child {
    margin-bottom: 0;
  }
`;

const OrderWrapper = styled.div`
  width: calc(300px - 1rem);
  margin: 0;
  padding: 0;
  overflow: hidden;
`

const Grid = ({ ChelaStore }) => (
  <GridWrapper>
    <ItemsWrapper>
      <ItemList>
      {ChelaStore.filteredList.map((chela) => <Item key={chela.id} chela={chela} />)}
      </ItemList>
    </ItemsWrapper>
    <OrderWrapper>
      <Order />
    </OrderWrapper>
  </GridWrapper>
)

export default inject('ChelaStore')(observer(Grid));