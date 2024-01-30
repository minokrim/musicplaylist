import {BrowserRouter , Route, Routes} from 'react-router-dom';
import './App.css';
import Nav from './navbar';
import Body from './body';
import List from './list';
import Context from './context';
import About from './about';
function App() {
  return (
    <div className="App">

      <Context>
      <BrowserRouter>
      <Nav/>
      <Routes>
        <Route path='/list'Component={List}/>
        <Route path='/' Component={Body}/>
        <Route path='/about' Component={About}/>
      </Routes>
      </BrowserRouter>
      </Context>
    </div>
  );
}

export default App;
