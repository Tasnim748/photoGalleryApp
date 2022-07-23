import Header from './components/header/header';
import './App.css';
import Body from './components/body/body';
import Home from './components/body/home';
import { Routes, Route } from 'react-router-dom';
import { Fragment } from 'react';

function App() {
  return (
    <Fragment>
      <Header />
      <Body />
      <Routes>
        <Route path='/home' element={<Home />} />
      </Routes>
    </Fragment>
  );
}

export default App;
