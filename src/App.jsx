import { useContext, useState } from 'react'
import './App.css'
import myContext from './context/context'
import Menue from './components/Menue';
import ReactCardFlip from 'react-card-flip';

function App() {
  let {data}=useContext(myContext);
  let[index,setIndex]=useState(0);
  let[menue,setMenue]=useState(false);
  let[flip,setFlip]=useState(false);
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
return (<>
<div className='container'>
  {<Menue visibility={menue} setVisibility={menueClick}/>}
{!menue&&<span class="material-symbols-outlined menue-button" onClick={menueClick}>
menu
</span>}
<div className='flip-card'>
<ReactCardFlip isFlipped={flip} flipDirection="horizontal">
  <div className='card front' onClick={()=>setFlip(!flip)}>{data[index].question}</div>
  <div className='card back'onClick={()=>setFlip(!flip)}>{data[index].answer}</div>
</ReactCardFlip>
</div>
</div>
<div className='current'>{`${index+1}/${data.length}`}</div>
<div className="conatiner2">
<div className='navigation-button'>
  <button className='pre-button' onClick={handlePre}>previous</button>

  <button className='next-button'onClick={handleNext}>next</button>
</div>
</div>
</>
  )
}

export default App
