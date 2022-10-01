// Entry point for the build script in your package.json
import '@hotwired/turbo-rails';
import './controllers';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Greetings from './components/Greetings';
import store from './redux/conf_store';

// import App from './components/App';

function App() {
  return (
    <>
      <Provider store={store}>
        <Greetings />
      </Provider>
    </>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root'),
);
