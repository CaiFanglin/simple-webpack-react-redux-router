import React from 'react';
import { render } from 'react-dom';
import { bindActionsCreator, createStore } from 'redux';
import { connect, Provider } from 'react-redux';
import { BrowserRouter, HashRouter, Route, Link } from 'react-router-dom';

import Reducer from './Reducer';
import Form from './Components/Form.jsx';
import List from './Components/List.jsx';


const store = createStore(Reducer);

const leaf = document.querySelector('body').appendChild(document.createElement('div'));

render(
    <Provider store={store}>
        <BrowserRouter>
            <div>
                <ul className="chooseAbled">
                    <li><Link to="/" >List</Link></li>
                    <li><Link to="/form" >Form</Link></li>
                </ul>
                <Route exact path="/" component={List}></Route>
                <Route path="/form" component={Form}></Route>
            </div>
        </BrowserRouter>
    </Provider>
    ,leaf
)