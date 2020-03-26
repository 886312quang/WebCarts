import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';

import  {createStore} from "redux";
import appReducers from "./reducers/index"
import { Provider } from "react-redux";

const store = createStore(
  appReducers
)
ReactDOM.render(
  // <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>,
  // </React.StrictMode>,
  document.getElementById('root')
);

