import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.scss';
import * as serviceWorker from './serviceWorker';
import {AlertState} from "./Context/alert/AlertState";
import {FirebaseState} from "./Context/firebase/firebaseState";

ReactDOM.render(
  <React.StrictMode>
      <FirebaseState>
      <AlertState>
          <BrowserRouter>
              <App />
          </BrowserRouter>
      </AlertState>
      </FirebaseState>
  </React.StrictMode>,
  document.getElementById('root')
);



serviceWorker.unregister();
