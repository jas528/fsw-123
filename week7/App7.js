import './App.css';
import Header from './components/container/Header';
import Body from './components/container/Body';
import {BrowserRouter} from 'react-router-dom'
function App() {
  return (
    <BrowserRouter>
      <>
        <Header /> 
        <Body />   
      </>
    </BrowserRouter> 
         
    
  );
}

export default App;
