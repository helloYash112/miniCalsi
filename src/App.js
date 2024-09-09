import TabButton from './components/tabButton/tabButton';
import {useState} from 'react'
import './App.css';

const arr=new Array();

let tep="";
let dis='';
function App() {
  const[data,getData]=useState("");
  const[check,udtCheck]=useState(undefined);
  const[btnVal,updVal]=useState('0');
  if(tep){
    dis=tep;
  }
  else{
    dis="0"
  }
  
  function number(datas){
        updVal(datas);
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
  function common(oprs){
    udtCheck(oprs);
            tep+=oprs;
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
    updVal(oprs);
    console.log(btnVal);    
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
            common(oprs);
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
           common(oprs);
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
              common(oprs);
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
             common(oprs);
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
      <main className='App-header '>
      <h1 className='res'>{dis }</h1>
      <TabButton  name={btnVal==='1' ? 'btn' :'btn1'} whenClick={()=>number("1")}>1</TabButton>
      <TabButton name={btnVal==='2' ? 'btn' :'btn1'} whenClick={()=>number("2")}>2</TabButton>
      <TabButton name={btnVal==='3' ? 'btn' :'btn1'} whenClick={()=>number("3")}>3</TabButton>
      <TabButton name={btnVal==='4' ? 'btn' :'btn1'} whenClick={()=>number("4")}>4</TabButton>
      <TabButton name={btnVal==='5' ? 'btn' :'btn1'} whenClick={()=>number("5")}>5</TabButton>
      <TabButton name={btnVal==='6' ? 'btn' :'btn1'} whenClick={()=>number("6")}>6</TabButton>
      <TabButton name={btnVal==='7' ? 'btn' :'btn1'} whenClick={()=>number("7")}>7</TabButton>
      <TabButton name={btnVal==='8' ? 'btn' :'btn1'} whenClick={()=>number("8")}>8</TabButton>
      <TabButton name={btnVal==='9' ? 'btn' :'btn1'} whenClick={()=>number("9")}>9</TabButton>
      <TabButton name={btnVal==='0' ? 'btn' :'btn1'} whenClick={()=>number("0")}>0</TabButton>
      <TabButton name={btnVal==='+' ? 'btn' :'btn1'} whenClick={()=>calcy('+')}>+</TabButton>
      <TabButton name={btnVal==='-' ? 'btn' :'btn1'} whenClick={()=>calcy('-')}>-</TabButton>
      <TabButton name={btnVal==='/' ? 'btn' :'btn1'} whenClick={()=>calcy('/')}>/</TabButton>
      <TabButton name={btnVal==='*' ? 'btn' :'btn1'} whenClick={()=>calcy('*')}>*</TabButton>
      <TabButton name={btnVal==='=' ? 'btn' :'btn1'} whenClick={()=>calcy('=')}>=</TabButton>
      {console.log('team1')}
      </main>

    
      
    </div>
  );
}

export default App;
