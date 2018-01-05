import React, { Component } from 'react';
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
  border: 1px solid #d3d3d3;
  border-radius: 0 10px 10px 0;

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

class Grid extends Component {
  render() {
    const { ChelasStore } = this.props;
    return(
      <GridWrapper>
        <ItemsWrapper>
          <ItemList>
          {ChelasStore.filteredList.map((chela) => <Item key={chela.id} chela={chela} />)}
          </ItemList>
        </ItemsWrapper>
        <OrderWrapper>
          <Order />
        </OrderWrapper>
      </GridWrapper>
    )
  }
}

export default inject('ChelasStore')(observer(Grid));