export default function TabButton({children,whenClick}){
    return<ol>
    <button onClick={whenClick}>{children}</button></ol>

}