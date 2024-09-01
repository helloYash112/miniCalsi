import TabButton from './components/tabButton/tabButton';
import {usesatate} from 'React'
import './App.css';

function App() {
  const[data,getData]=usesatate(0);
  function calcy(data){
    getData(data);
  }
  return (
    <div className="App">
      <TabButton whenClick={()=>calcy(1)}>1</TabButton>
      <TabButton whenClick={()=>calcy(1)}>2</TabButton>
      <TabButton whenClick={()=>calcy(1)}>3</TabButton>
      <TabButton whenClick={()=>calcy(1)}>4</TabButton>
      <TabButton whenClick={()=>calcy(1)}>5</TabButton>
      <TabButton whenClick={()=>calcy(1)}>6</TabButton>
      <TabButton whenClick={()=>calcy(1)}>7</TabButton>
      <TabButton whenClick={()=>calcy(1)}>8</TabButton>
      <TabButton whenClick={()=>calcy(1)}>9</TabButton>
      <TabButton whenClick={()=>calcy(1)}>0</TabButton>
      <h1>{data}</h1>
    </div>
  );
}

export default App;
