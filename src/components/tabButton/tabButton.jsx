import './tabButton.css';
export default function TabButton({children,whenClick,name}){
    return<>
    <button id={name ?undefined :'btn1'} className={name} onClick={whenClick}>{children}</button></>

}