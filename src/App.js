//import logo from './logo.svg';
import './App.css';
import React from 'react';
import {Provider} from 'react-redux';
import {store} from './redux';
import List from'./components/ListTask';
import Task from'./components/Task';
import Add from'./components/Addtask';

function App() {
  
  return (
    <Provider store={store}>
    <div className="App">
     <Add/>
     <List/>
     <Task/>
    </div>
    </Provider>
  );
}

export default App;
