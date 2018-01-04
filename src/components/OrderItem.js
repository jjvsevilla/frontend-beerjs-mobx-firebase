import React, { Component } from 'react';
import { observer } from 'mobx-react';
import styled from 'styled-components';
import CSSTransitionGroup from 'react-addons-css-transition-group';
import { formatPrice } from '../utils/formatter';

const OrderItemWrapper = styled.li`
  display: flex;
  justify-content: space-between;
  line-height: 1rem;
  padding: 1rem 0;
  border-bottom: 1px solid #000;

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

class OrderItem extends Component {
  render() {
    const { chelaOrder } = this.props;
    return (
      <OrderItemWrapper key={chelaOrder.id}>
      <span>
        <CSSTransitionGroup
          component="span"
          className="count"
          transitionName="count"
          transitionEnterTimeout={125}
          transitionLeaveTimeout={125}
        >
          <span key={chelaOrder.amount}>{chelaOrder.amount}</span>
        </CSSTransitionGroup>
        {chelaOrder.name}
      </span>

      <span>
        <CSSTransitionGroup
          component="span"
          className="count"
          transitionName="count"
          transitionEnterTimeout={125}
          transitionLeaveTimeout={125}
        >
          <Price key={chelaOrder.amount}>
            {formatPrice(chelaOrder.amount * chelaOrder.price)}
          </Price>
        </CSSTransitionGroup>
      </span>
    </OrderItemWrapper>
    )
  }
}

export default observer(OrderItem);