import './App.css';
import Head from './Components/Head';
import Body from './Components/Body';
import { Provider } from 'react-redux';
import store from './Components/utils/store';
function App() {
  return (
  
 <div>
  <Head />
  <Body />
  
 </div>
   
  );
}

export default App;
