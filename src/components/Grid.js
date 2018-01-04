import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import styled from 'styled-components';
import Item from './Item';
import Order from './Order';

const GridWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
`

const OrderWrapper = styled.div`
  width: calc(300px - 1rem);
  margin: 0;
  overflow: hidden;
`

const ItemsWrapper = styled.div`
  width: calc(700px - 1rem);
  margin: 0;
  column-count: 3;
  column-gap: 0;
  overflow: hidden;
`;

class Grid extends Component {
  render() {
    const { ChelasStore } = this.props;
    return(
      <GridWrapper>
        <ItemsWrapper>
          {ChelasStore.filteredList.map((chela) => <Item key={chela.id} chela={chela} />)}
        </ItemsWrapper>
        <OrderWrapper>
          <Order />
        </OrderWrapper>
      </GridWrapper>
    )
  }
}

export default inject('ChelasStore')(observer(Grid));