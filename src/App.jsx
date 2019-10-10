import React from 'react';
import Header from './header/index'
import Home from './component/home/index'
import { BrowserRouter, Route} from 'react-router-dom';
import { PageWrapper } from './App.js'


function App() {
  return (
    <BrowserRouter>
    <PageWrapper>
    <Header />
    <Route path = '/' exact component = {Home}></Route>
    </PageWrapper>
    </BrowserRouter>
  );
}

export default App;
