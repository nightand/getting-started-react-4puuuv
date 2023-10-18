import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

import { storyblokInit, apiPlugin } from '@storyblok/react';

import Page from './components/Page';
import Teaser from './components/Teaser';
import Grid from './components/Grid';
import Feature from './components/Feature';

storyblokInit({
  accessToken: '0Ry6cfNJ4mkFffrxOTdmhgtt',
  use: [apiPlugin],
  // for spaces located in the US or China:
  // apiOptions: {
  //   region: "us" or "cn", // you need to specify the region
  // },
  components: {
    page: Page,
    teaser: Teaser,
    grid: Grid,
    feature: Feature,
  },
});

ReactDOM.render(<App />, document.getElementById('root'));
