import TabButton from './components/tabButton/tabButton';
import {useState} from 'react'
import './App.css';



function App() {
  const[data,getData]=useState("0");
  function number(datas){
      if(data==="0"){
         getData(datas);
      }
      else
      getData(data+datas);
  }
  
  function calcy(operator){
    let temp=number(data);

  }
    
  return (
    <div className="App">
      <main>
      <TabButton whenClick={()=>number("1")}>1</TabButton>
      <TabButton whenClick={()=>number("2")}>2</TabButton>
      <TabButton whenClick={()=>number("3")}>3</TabButton>
      <TabButton whenClick={()=>number("4")}>4</TabButton>
      <TabButton whenClick={()=>number("5")}>5</TabButton>
      <TabButton whenClick={()=>number("6")}>6</TabButton>
      <TabButton whenClick={()=>number("7")}>7</TabButton>
      <TabButton whenClick={()=>number("8")}>8</TabButton>
      <TabButton whenClick={()=>number("9")}>9</TabButton>
      <TabButton whenClick={()=>number("0")}>0</TabButton>
      <TabButton  whenClick={()=>calcy('add')}>+</TabButton>
      <TabButton whenClick={()=>calcy('sub')}>-</TabButton>
      <TabButton whenClick={()=>calcy('div')}>/</TabButton>
      <TabButton whenClick={()=>calcy('mul')}>*</TabButton>
      </main>

      <h1>{data}</h1>
    </div>
  );
}

export default App;
