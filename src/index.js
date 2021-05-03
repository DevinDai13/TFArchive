import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
/*import Index from './Home';*/
import * as serviceWorker from './serviceWorker';
import { createBrowserHistory } from "history";
import { Router } from "react-router"
import Routes from "./Routes"

const history = createBrowserHistory();

ReactDOM.render(<Router history={history}><Routes /></Router>, document.getElementById('root'));

// want your app to work offline and load faster, change
// unregister() to register() below. Note this comes with some pitfalls.
serviceWorker.unregister();
