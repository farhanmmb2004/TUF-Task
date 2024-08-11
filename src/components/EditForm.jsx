import React, { useState } from "react"
import { useContext } from "react"
import MyContext from "../context/context"
export default function EditForm(){
    let {setEdit,setData,data,index}=useContext(MyContext);
    let [formData,setFormData]=useState({description:data[index].description,
        question:data[index].question,
        answer:data[index].answer
    });
   let handleSubmit=(e)=>{
    e.preventDefault();
    setData(data.map((item, i) => 
        i === index ? formData : item
      ));
    setEdit(false);
}
let handleChange=(e)=>{
    const {id,value}=e.target;
    setFormData({...formData,[id]:value});
}
    return <div className="form">
        <span class="material-symbols-outlined form-close" onClick={()=>setEdit(false)}>
close
</span>
        <form >
            <label htmlFor="description">description :</label>
        <input type="text" id="description" maxLength="20" value={formData.description} onChange={handleChange} placeholder="Maximum 20 words"/>
        <br />
        <br />
        <label htmlFor="question">question :</label>
        <input type="text" id="question" value={formData.question} onChange={handleChange} placeholder="what is capital of india"/>
        <br />
        <br />
        <label htmlFor="answer">answer :</label>
        <input type="text" id="answer" value={formData.answer}  onChange={handleChange} placeholder="delhi"/>
        <br />
        <button onClick={handleSubmit}>submit</button>
        </form>
    </div>
}