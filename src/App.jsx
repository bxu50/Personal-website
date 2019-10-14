import React from 'react';
import Header from './Header'
import Home from './Component/Home'
import Resume from './Component/Resume'
import { BrowserRouter, Route} from 'react-router-dom';
import { PageWrapper } from './App.js'


function App() {
  return (
    <BrowserRouter>
    <PageWrapper>
    <Header />
    <Route path = '/' exact component = {Home}></Route>
    <Route path = '/resume' exact component = {Resume}></Route>
    </PageWrapper>
    </BrowserRouter>
  );
}

export default App;
