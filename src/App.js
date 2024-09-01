import TabButton from './components/tabButton/tabButton';
import {useState} from 'react'
import './App.css';

function App() {
  const[data,getData]=useState(0);
  function calcy(data){
    getData(data);
  }
  return (
    <div className="App">
      <TabButton whenClick={()=>calcy(1)}>1</TabButton>
      <TabButton whenClick={()=>calcy(2)}>2</TabButton>
      <TabButton whenClick={()=>calcy(3)}>3</TabButton>
      <TabButton whenClick={()=>calcy(4)}>4</TabButton>
      <TabButton whenClick={()=>calcy(5)}>5</TabButton>
      <TabButton whenClick={()=>calcy(6)}>6</TabButton>
      <TabButton whenClick={()=>calcy(7)}>7</TabButton>
      <TabButton whenClick={()=>calcy(8)}>8</TabButton>
      <TabButton whenClick={()=>calcy(9)}>9</TabButton>
      <TabButton whenClick={()=>calcy(0)}>0</TabButton>
      <h1>{data}</h1>
    </div>
  );
}

export default App;
