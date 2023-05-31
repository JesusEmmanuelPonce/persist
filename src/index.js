import { Provider } from 'react-redux';
import * as ReactDOM from 'react-dom/client';
import { StrictMode } from 'react';
import { PersistGate } from 'redux-persist/integration/react';

import App from './App';
import { persistor, store } from './store/store';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </StrictMode>
);
