import React from 'react';
import ReactDOM from 'react-dom';
import { injectGlobal } from 'styled-components';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'mobx-react';
import { useStrict } from 'mobx';

import App from './components/App';
import ChelasStore from './stores/chela';
import OrderStore from './stores/order';

const store = {
  ChelasStore,
  OrderStore
}
window.store = store;

useStrict(true);

injectGlobal`
  @font-face {
    font-family: 'Seymour One';
    src: url(${process.env.PUBLIC_URL}/SeymourOne-Regular.ttf);
  }

  * {
    box-sizing: border-box;
  }

  html {
    font-size: 16px;

    body {
      margin: 0;
      padding: 0;
      font-family: sans-serif;

      .likes-animation {
        background: url(https://emojipedia-us.s3.amazonaws.com/thumbs/160/microsoft/74/clinking-beer-mugs_1f37b.png) center no-repeat;
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

      .shop-animation {
        background: url(https://emojipedia-us.s3.amazonaws.com/thumbs/120/microsoft/106/shopping-trolley_1f6d2.png) center no-repeat;
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

        &.shop-enter {
          transition: all 0.2s;
          transform: translateX(-50%) translateY(-50%) scale(1);
          opacity: 1;

          &.shop-enter-active {
            transform: translateX(-50%) translateY(-50%) scale(3);
          }
        }

        &.shop-leave-active {
          display: none;
        }
      }

      .order-item-enter {
        transition: all 0.500s;
        transform: translateX(-120%);
        max-height: 0;
        padding: 0 !important;

        &.order-item-enter-active {
          max-height: 60px;
          padding: 1rem 0 !important;
          transform: translateX(0);
        }
      }
      .order-item-leave {
        transition: all 0.500s;
        transform: translateX(0);

        &.order-item-leave-active {
          transform: translateX(120%);
          max-height: 0;
          padding: 0;
        }
      }

      .count-enter {
        transition: all 0.125s;
        transform: translateY(100%);

        &.count-enter-active {
          transform: translateY(0);
        }
      }
      .count-leave {
        transition: all 0.125s;
        transform: translateY(0);
        position: absolute;
        left: 0;

        &.count-leave-active {
          transform: translateY(-100%);
        }
      }
    }
  }
`;

const repo = `/${window.location.pathname.split('/')[1]}`;

ReactDOM.render(
  <Provider {...store}>
    <HashRouter basename={repo}>
      <App />
    </HashRouter>
  </Provider>
, document.getElementById('root'));
