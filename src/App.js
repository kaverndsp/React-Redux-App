import React from 'react';

import EventForm from "./components/EventForm";

import {eventsReducer as reducer} from "./reducers/eventReducer"; 
import {Provider} from "react-redux";
import {createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";

import './App.css';

const store = createStore(reducer, applyMiddleware(thunk));

function App() {
  return (
   
    <Provider store={store}>
    <div className="App">
      <h1 className="header">Genre Generator</h1>
      <EventForm/>
    </div>
    </Provider>
    
  );
}

export default App;
