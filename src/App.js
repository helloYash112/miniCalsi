import TabButton from './components/tabButton/tabButton';
import {useState} from 'react'
import './App.css';

const arr=new Array();
const opr=new Array();
let str="";

function App() {
  const[data,getData]=useState("");
  
  function number(datas){
      str+=datas;
      getData(data+datas);
  }
  /*
  function totCalcy(arrs,opr){
    let count=0;
    arrs.forEach(element => {
      let nums
      
    });
  }
    */
  function calcy(oprs){
    switch(oprs){
      case "+" :
        {
           arr.push(data);
          opr.push(oprs);
          str+=oprs;
          getData("");
          break;
        }
        case "-" :{
          arr.push(data);
          opr.push(oprs);
          str+=oprs;
          getData("");
          break;

        }
        case "*" :{
          arr.push(data);
          opr.push(oprs);
          str+=oprs;
          getData("");
          break;

        }
        case "/" :{
          arr.push(data);
          opr.push(oprs);
          str+=oprs;
          getData("");
          break;

        }
        case "=" :{
          arr.push(data);
          //const tot=totCalcy(arr,opr);
          getData("");
          str+=oprs;

        console.log(arr);
        console.log(opr);
        console.log(str);
        break;
        }
        default : {
          break;
        }

    }
    
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
      <TabButton  whenClick={()=>calcy('+')}>+</TabButton>
      <TabButton whenClick={()=>calcy('-')}>-</TabButton>
      <TabButton whenClick={()=>calcy('/')}>/</TabButton>
      <TabButton whenClick={()=>calcy('*')}>*</TabButton>
      <TabButton whenClick={()=>calcy('=')}>=</TabButton>
      </main>

      <h1>{str==="" ? 0 : str}</h1>
      
    </div>
  );
}

export default App;
