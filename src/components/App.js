import React, { Component } from 'react';
import DevTools from 'mobx-react-devtools';
import styled from 'styled-components';
import Header from './Header';
import Main from './Main';

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

class App extends Component {
  render() {
    return (
      <AppWrapper className="App">
        <DevTools />
        <Header title="FrontEnd!" subtitle="BeerJS vol.2" />
        <Main />
      </AppWrapper>
    );
  }
}

export default App;
