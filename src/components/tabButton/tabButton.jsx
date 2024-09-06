import './tabButton.css';
export default function TabButton({children,whenClick,name}){
    return<>
    <button id='btn1' className={name} onClick={whenClick}>{children}</button></>

}