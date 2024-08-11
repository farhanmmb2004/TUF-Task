import React from "react";
import './component.css';
import MyContext from "../context/context";
import { useContext } from "react";
import ListItem from "./ListItem";
export default function Menue({visibility,setVisibility}){
    let{data,setForm}=useContext(MyContext);
    let handleFormClick=()=>{
        setForm(true);
    }
return(
    <div className={`menue menue-${visibility?"visible":"hidden"}`}>
        list of questions
{visibility&&<span class="material-symbols-outlined close" onClick={setVisibility}>
close
</span>}
<br />
{data.map((item, index) => {
  return (
    <ListItem 
      description={item.description} 
      status={item.status} 
      i={index} 
      key={index} 
    />
  );
})}

<button className="add-more" onClick={handleFormClick}>add question</button>
</div>
);
}