import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { action } from 'mobx';
import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  0% { transform: rotate(0deg); }
  25% { transform: rotate(20deg); }
  50% { transform: rotate(0deg); }
  75% { transform: rotate(-20deg); }
  100% { transform: rotate(0deg); }
`

const OuterHeader = styled.div`
  width: 100%;
  height: 200px;
  margin-bottom: 2rem;
  background: #222222;
  height: 200px;
  margin-bottom: 2rem;
  background: #222222;
`

const LayoutHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 100%;
  text-decoration: none;
`

const Logo = styled.img`
  height: ${props => props.height || '60%'};
  animation: ${spin} infinite 2s linear;
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Title = styled.div`
  font-size: 4rem;
  font-weight: 100;
  color: #fff;
  letter-spacing: -1px;
  margin: 0;
  padding: 0;
  line-height: 1;
  text-shadow: 3px 3px 0 rgba(0,0,0,0.15);
  position: relative;
  z-index: 2;
  display: block;
  font-family: 'Seymour One', sans-serif;

  span {
    display: inline-block;
    transition: all 0.2s;

    &:hover {
      transform: scale(1.3) rotate(-10deg);
    }

    &:hover:last-child {
      transform: scale(2) rotate(10deg);
      color: #F9E034;
    }
  }
`
const Subtitle = styled.div`
  display: block;
  color: #fff;
  font-family: 'Seymour One', sans-serif;
  font-size: 2.5rem;
`

const FilterWrapper = styled.div`
  display: block;
  margin: 0 auto;
  width: 75%;

  input {
    font-family: 'Seymour One', sans-serif;
    font-size: 1.75rem;
    width: 100%;
  }
`

const formattedText = title => (title.split('').map(x => `<span>${x}</span>`).join(''));

class Header extends Component {

  @action
  handleFilter = (e) => {
    const { value } = e.target;
    this.props.ChelasStore.updateFilter(value);
  }

  render() {
    const { title = 'React!', subtitle = '', ChelasStore } = this.props;
    const spans = formattedText(title);
    return (
      <OuterHeader>
        <LayoutHeader>
          <Logo src={`${process.env.PUBLIC_URL}/BeerJS.png`} alt={title} />
          <Content>
            <Title dangerouslySetInnerHTML={{__html: spans}}></Title>
            <Subtitle>{subtitle}</Subtitle>
            <FilterWrapper>
              <input name="filter" type="text" placeholder="busca tu chelita"
                value={ChelasStore.filter}
                onChange={this.handleFilter} />
            </FilterWrapper>
          </Content>
          <Logo src={`${process.env.PUBLIC_URL}/mobx.svg`} alt={title} height="40%" />
        </LayoutHeader>
      </OuterHeader>
    )
  }
}

export default inject('ChelasStore')(observer(Header));
