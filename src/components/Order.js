import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import styled from 'styled-components';

const TotalLabel = styled.p`
  font-family: 'Seymour One',sans-serif;
`

const Total = styled.p`
  text-align: right;
  font-family: 'Seymour One',sans-serif;
`

const OrderList = styled.ul`
  list-style: none;
  padding: 0;

  li {
    display: flex;
    justify-content: space-between;
  }
`

const Name = styled.span`
`

const Price = styled.span`
  font-family: 'Seymour One',sans-serif;
`

class Order extends Component {

  renderOrder = (key) => {
    const { ChelasStore, OrderStore } = this.props;
    const chela = ChelasStore.getChela(key);
    const count = OrderStore.order[key];
    return (
      <li key={key}>
        <Name>{count} {chela.name}</Name>
        <Price>{chela.price}</Price>
      </li>
    )
  }

  render() {
    const { OrderStore } = this.props;
    const orderKeys = Object.keys(OrderStore.order);

    return (
      <div>
        <TotalLabel>Tu Orden:</TotalLabel>
        <OrderList>
          {orderKeys.map(this.renderOrder)}
        </OrderList>
        <Total>{OrderStore.total}</Total>
      </div>
    )
  }
}

export default inject('ChelasStore', 'OrderStore')(observer(Order));