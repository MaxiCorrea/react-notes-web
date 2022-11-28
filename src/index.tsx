import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./redux/store/Store";
import { Provider } from "react-redux";
import { UI } from "./views/UI";
import * as serviceWorker from "./serviceWorker";

const store = configureStore();
ReactDOM.render(
  <Provider store={store}> 
    <UI /> 
  </Provider>, 
  document.getElementById("root")
);

const configuration = {
  onUpdate: (registration : ServiceWorkerRegistration) => {
    if (registration && registration.waiting) {
      if (window.confirm('New version available!  refresh to update your app?')) {
        registration.waiting.postMessage({ type: 'SKIP_WAITING' });
        window.location.reload();
      }
    }
  }
 };
  
 serviceWorker.register(configuration);
