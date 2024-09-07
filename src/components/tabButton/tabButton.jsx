import './tabButton.css';
export default function TabButton({children,whenClick,name}){
    return<>
    <button className={name} onClick={whenClick}>{children}</button></>

}