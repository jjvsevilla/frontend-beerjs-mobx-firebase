import React from 'react';
import ReactDOM from 'react-dom';
import { injectGlobal } from 'styled-components';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'mobx-react';
import { useStrict } from 'mobx';

// import store from './stores';
import App from './components/App';

import ChelasStore from './stores/chela';
import OrderStore from './stores/order';

const store = {
  ChelasStore,
  OrderStore
}

window.store = store;

export default store;

useStrict(true);

injectGlobal`
  @font-face {
    font-family: 'Seymour One';
    src: url(${process.env.PUBLIC_URL}/SeymourOne-Regular.ttf);
  }

  html {
    font-size: 16px;

    body {
      margin: 0;
      padding: 0;
      font-family: sans-serif;

      .likes-animation {
        background: url(https://emojipedia-us.s3.amazonaws.com/thumbs/120/microsoft/106/clinking-beer-mugs_1f37b.png) center no-repeat;
        background-size: contain;
        font-size: 1.2rem;
        padding: 1rem;
        position: absolute;
        color: #000000;
        left: 50%;
        top: 50%;
        pointer-events: none;

        opacity: 0;
        transition: all 0.5s;
        transform: translateX(-50%) translateY(-50%) scale(3);
        display: block;

        &.like-enter {
          transition: all 0.2s;
          transform: translateX(-50%) translateY(-50%) scale(1);
          opacity: 1;

          &.like-enter-active {
            transform: translateX(-50%) translateY(-50%) scale(3);
          }
        }

        &.like-leave-active {
          display: none;
        }
      }

    }
  }
`;

ReactDOM.render(
  <Provider {...store}>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>
, document.getElementById('root'));
