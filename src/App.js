import TabButton from './components/tabButton/tabButton';
import {useState} from 'react'
import './App.css';

const arr=new Array();

let tep="";
let dis='';
function App() {
  const[data,getData]=useState("");
  const[check,udtCheck]=useState(undefined);
  if(tep){
    dis=tep;
  }
  else{
    dis="0"
  }
  
  function number(datas){
        getData(data+datas);
        tep+=datas;
  }
  function commonRes(){
    arr.push(data);
    getData("");
  
   let out=totCalcy(arr,check);
   
   udtCheck(undefined);
   arr.pop();
   arr.pop();
   arr.push(out);
  tep=out;

  }
  function commonData(oprs){
   
      arr.push(data);
      udtCheck(oprs);
      tep+=oprs;
      getData("");

  }
  function totCalcy(arrs,opr){
    
    let num1=Number(arrs[0]);
    let num2=Number(arrs[1]);
    let tot=0;

    switch(opr){
      case "+":{
        tot=num1+num2;
        break;

      }
      case "-":{
        tot=num1-num2;
        break;

      }
      case "*":{
        tot=num1*num2;
        break;

      }
      case "/":{
        tot=num1/num2;
        break;

      }
      
    }
    
    return tot;
  }
    
  function calcy(oprs){
    
    switch(oprs){
      case "+" :
        {
          if(data && check===undefined){
          commonData(oprs);
          }
         else if(check){
         commonRes();
         udtCheck(oprs);
         tep+=oprs;
         }
           else
           { 
            udtCheck(oprs);
            tep+=oprs;
           }
          break;
        }
        case "-" :{
          if(data && check===undefined){
            commonData(oprs);
          }
          else if(check){
            commonRes();
            udtCheck(oprs);
         tep+=oprs;
            }
          else{
            udtCheck(oprs);
            tep+=oprs;

          }
          break;

        }
        case "*" :{
          if(data && check===undefined){
            commonData(oprs);
            }
            else if(check){
              commonRes();
              udtCheck(oprs);
         tep+=oprs;
              }
            else{
              udtCheck(oprs);
              tep+=oprs;
  
            }
            break;

        }
        case "/" :{
          if(data && check===undefined){
            commonData(oprs);
            }
            else if(check){
              commonRes();
              udtCheck(oprs);
         tep+=oprs;
              }
            else{
              udtCheck(oprs);
              tep+=oprs;
  
            }
          break;

        }
        case "=" :{
          commonRes();
        break;
        }
        default : {
          break;
        }

    }
    
  }

  
  return (
    <div className="App">
      <main id='main'>
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

      <h1>{dis }</h1>
      
    </div>
  );
}

export default App;
