import './tabButton.css';
export default function TabButton({children,whenClick,name}){
    return<ul>
    <button className={name} onClick={whenClick}>{children}</button></ul>

}