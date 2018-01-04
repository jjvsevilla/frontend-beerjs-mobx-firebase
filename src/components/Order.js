import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import styled from 'styled-components';
import CSSTransitionGroup from 'react-addons-css-transition-group';
import OrderItem from './OrderItem';
import OrderFooter from './OrderFooter';

const OrderContainer = styled.div`
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
`

const OrderHeader = styled.p`
  font-family: 'Seymour One',sans-serif;
  text-align: center;
`

class Order extends Component {
  render() {
    const { OrderStore } = this.props;
    return (
      <OrderContainer>
        <OrderHeader>Tu Orden</OrderHeader>
        <CSSTransitionGroup
          component="ul"
          className="order-item"
          transitionName="order-item"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={500}
        >
          {OrderStore.order.map(chelaOrder => <OrderItem key={chelaOrder.id} chelaOrder={chelaOrder} />)}
        </CSSTransitionGroup>
        <OrderFooter />
      </OrderContainer>
    )
  }
}

export default inject('ChelasStore', 'OrderStore')(observer(Order));