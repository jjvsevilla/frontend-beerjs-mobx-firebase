import React from 'react';
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
  margin-top: 0;
`

const Order = ({ OrderStore }) => (
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

export default inject('OrderStore')(observer(Order));