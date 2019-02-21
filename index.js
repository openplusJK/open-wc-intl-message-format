import loadPolyfills from '@open-wc/polyfills-loader';

import IntlMessageFormat from 'intl-messageformat/src/main.js'

loadPolyfills().then(() => {
  import('./my-app.js');
});