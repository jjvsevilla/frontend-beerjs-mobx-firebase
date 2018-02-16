import React from 'react';
import { observer, inject } from 'mobx-react';
import styled from 'styled-components';
import CSSTransitionGroup from 'react-addons-css-transition-group';
import { formatPrice } from '../utils/formatter';

const OrderFooterWrapper = styled.p`
  font-family: 'Seymour One',sans-serif;
  display: flex;
  justify-content: space-between;
  padding: 1rem 0;
  margin: 0;
  border-top: double 3px #000;
  border-bottom: double 3px #000;

  span.count {
    position: relative;
    overflow: hidden;
    float: left;

    span {
      display: inline-block;
    }
  }
`

const Price = styled.span`
  font-family: 'Seymour One',sans-serif;
`

const OrderFooter = ({ OrderStore }) => (
  <OrderFooterWrapper>
    <span>Total:</span>
    <span>
      <CSSTransitionGroup
        component="span"
        className="count"
        transitionName="count"
        transitionEnterTimeout={125}
        transitionLeaveTimeout={125}
      >
        <Price key={OrderStore.total}>
          {formatPrice(OrderStore.total)}
        </Price>
      </CSSTransitionGroup>
    </span>
  </OrderFooterWrapper>
)

export default inject('OrderStore')(observer(OrderFooter));