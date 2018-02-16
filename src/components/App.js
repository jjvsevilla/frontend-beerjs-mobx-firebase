import React from 'react';
import DevTools from 'mobx-react-devtools';
import styled from 'styled-components';
import Header from './Header';
import Grid from './Grid';

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const App = () => (
  <AppWrapper className="App">
    <DevTools />
    <Header title="FrontEnd!" subtitle="BeerJS vol.2" />
    <Grid />
  </AppWrapper>
);

export default App;
