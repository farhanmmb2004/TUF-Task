import React from "react";
import './component.css';
import MyContext from "../context/context";
import { useContext } from "react";
import ListItem from "./ListItem";
export default function Menue({visibility,setVisibility}){
    let{data}=useContext(MyContext);
return(
    <div className={`menue menue-${visibility?"visible":"hidden"}`}>
        list of questions
{visibility&&<span class="material-symbols-outlined close" onClick={setVisibility}>
close
</span>}
<br />
{data.map((item,index)=><ListItem description={data[index].description} status={data[index].status} i={index} key={index}/>)}
</div>
);
}