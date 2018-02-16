import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import styled from 'styled-components';
import CSSTransitionGroup from 'react-addons-css-transition-group';
import { formatPrice } from '../utils/formatter';

const Card = styled.li`
  display: flex;
  width: 100%;
  margin: 0;
  padding: 0;
  border: 1px solid #d3d3d3;
  background: #fff;
  position: relative;
  border-radius: 0 5px 5px 0;
  margin-bottom: 0.5rem;
`;

const CardImage = styled.div`
  position: relative;
  flex-basis: 40%;
  height: 150px;

  img {
    height: 100%;
    width: 100%;
  }
`;

const CardStacked = styled.div`
  flex-basis: 60%;
  display: flex;
  flex-direction: column;
  flex: 1;
  position: relative;
`;

const CardContent = styled.div`
  flex-grow: 1;
  padding: 24px;

  p {
    margin: 0
  }
`;

const CardActions = styled.div`
  position: relative;
  border-top: 1px solid rgba(160,160,160,0.2);
  padding: 16px 24px;
  display: flex;
  justify-content: space-between;

  .like {
    cursor: pointer;
  }
`;

const CardButton = styled.button`
  border: 2px solid #f2f2f2;
  background: none;
  flex-basis: 40%;
  display: inline-block;
  line-height: 2;
  text-decoration: none;
  padding: 5px;
  text-align: center;
  transition: all 0.2s;
  cursor: pointer;
  outline: none;

  span {
    color: #263238;
    transition: color .3s ease;
  }

  &:hover {
    span {
      color: #90a4ae;
    }
  }
`;

class Item extends Component {
  onLikeBeer = () => {
    this.props.chela.increase();
  }

  onAddToOrder = () => {
    const { OrderStore, chela } = this.props;
    OrderStore.addToOrder(chela);
    chela.runShopAnimation()
  }

  render () {
    const { chela } = this.props;
    return (
      <Card>
        <CardImage>
          <img src={chela.image} alt={chela.name} />
          <CSSTransitionGroup
            transitionName="like"
            transitionEnterTimeout={500}
            transitionLeaveTimeout={500}
          >
            <span key={chela.likes} className="likes-animation">{chela.likes}</span>
          </CSSTransitionGroup>
          <CSSTransitionGroup
            transitionName="shop"
            transitionEnterTimeout={500}
            transitionLeaveTimeout={500}
          >
            <span key={chela.animationId} className="shop-animation"></span>
          </CSSTransitionGroup>
        </CardImage>
        <CardStacked>
          <CardContent>
            <p>{chela.name}</p>
          </CardContent>
          <CardActions>
            <CardButton onClick={this.onLikeBeer} className="like">
              <span role="img" aria-label="beer">🍺 {chela.likes}</span>
            </CardButton>
            <CardButton onClick={this.onAddToOrder}>
              <span role="img" aria-label="comments">🛒 {formatPrice(chela.price)}</span>
            </CardButton>
          </CardActions>
        </CardStacked>
      </Card>
    )
  }
}

export default inject('OrderStore')(observer(Item));