import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import styled from 'styled-components';
import CSSTransitionGroup from 'react-addons-css-transition-group';

const Card = styled.figure`
  display: inline-block;
  width: 100%;
  margin: 0 0 2rem 0;
  padding: 0;
  border: 1px solid #d3d3d3;
  background: #fff;
  box-shadow: 0 0 0 5px rgba(0,0,0,0.03);
`;

const ImageWrapper = styled.div`
  position: relative;

  img {
    width: 100%;
  }
`;

const CardCaption = styled.figcaption`
  margin: 0 2rem 2rem;
`;

const CardActions = styled.div`
  display: flex;
  justify-content: center;
`;

const CardButton = styled.button`
  border: 2px solid #f2f2f2;
  background: none;
  flex-basis: 48%;
  display: inline-block;
  line-height: 2;
  text-decoration: none;
  padding: 5px;
  text-align: center;
  color: #125688;
  transition: all 0.2s;
  box-sizing: border-box;

  &.likes {
    cursor: pointer;
  }
`;

class Item extends Component {
  onLikeBeer = () => {
    this.props.chela.increase();
  }

  onAddToOrder = () => {
    const { OrderStore, chela } = this.props;
    OrderStore.addToOrder(chela);
  }

  render () {
    const { chela } = this.props;
    return (
      <Card>
        <ImageWrapper>
          <img src={chela.image} alt={chela.name} />
          <CSSTransitionGroup
            transitionName="like"
            transitionEnterTimeout={500}
            transitionLeaveTimeout={500}
          >
            <span key={chela.likes} className="likes-animation">{chela.likes}</span>
          </CSSTransitionGroup>
        </ImageWrapper>
        <CardCaption>
          <p>{chela.name}</p>
          <CardActions>
            <CardButton onClick={this.onLikeBeer}>
              <span role="img" aria-label="beer">🍺 {chela.likes}</span>
            </CardButton>
            <CardButton onClick={this.onAddToOrder}>
              <span role="img" aria-label="comments">💰 {chela.price}</span>
            </CardButton>
          </CardActions>
        </CardCaption>
      </Card>
    )
  }
}

export default inject('OrderStore')(observer(Item));