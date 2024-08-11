import { useContext, useState } from 'react'
import './App.css'
import myContext from './context/context'
import Menue from './components/Menue';
import ReactCardFlip from 'react-card-flip';

function App() {
  let {data,setData,index,setIndex,menue,setMenue,flip,setFlip}=useContext(myContext);
  let menueClick=()=>{
    setMenue(!menue);
  }
  let handleNext=()=>{
    if(index<data.length-1){
    setIndex(index+1);
    setFlip(false);
    }
  }
  let handlePre=()=>{
    if(index>0){
    setIndex(index-1);
    setFlip(false);
    }
  }
  let handleDone=()=>{
    setData(data.map((item,i)=>i===index?{description:data[i].description,
      question:data[i].question,
      answer:data[i].answer,
      status:!data[i].status
    }:item));
  }
return (<>
<div className='container'>
  {<Menue visibility={menue} setVisibility={menueClick}/>}
{!menue&&<span class="material-symbols-outlined menue-button" onClick={menueClick}>
menu
</span>}
<div className='flip-card'>
<ReactCardFlip isFlipped={flip} flipDirection="horizontal">
  <div className='card front' onClick={()=>setFlip(!flip)}><h3>question</h3>{data[index].question}</div>
  <div className='card back'onClick={()=>setFlip(!flip)}><h3>answer</h3>{data[index].answer}</div>
</ReactCardFlip>
</div>
</div>
<div className='current'>{`${index+1}/${data.length}` }<button className='done' onClick={handleDone}>{`mark ${!data[index].status?"done":"undone"}`}</button></div>
<div className="conatiner2">
<div className='navigation-button'>
  <button className='pre-button' onClick={handlePre}>{"<- previous"}</button>
  <button className='next-button'onClick={handleNext}>{"next ->"}</button>
</div>
</div>
</>
  )
}

export default App
