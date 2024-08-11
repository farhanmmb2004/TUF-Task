import { useContext } from "react";
import MyContext from "../context/context";
export default function ListItem({description,status,i}){
let{setIndex,setMenue,index}=useContext(MyContext);  
let  handleClick=()=>{
    setIndex(i);
    setMenue(false);
  }
return <><div className={`item ${i===index&&"currentItem"}`} onClick={handleClick}>
<h4>{i+1+"."}</h4>
<h4>{description}</h4>
{status&&<span class="material-symbols-outlined">
check
</span>}
</div>
</>
}