import React from "react";
import './component.css';
export default function Menue({visibility,setVisibility}){
return(
    <div className={`menue menue-${visibility?"visible":"hidden"}`}>
<span class="material-symbols-outlined close" onClick={setVisibility}>
close
</span>
    </div>
);
}