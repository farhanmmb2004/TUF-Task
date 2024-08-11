import { useContext, useState } from 'react'
import './App.css'
import myContext from './context/context'
import Menue from './components/Menue';
import ReactCardFlip from 'react-card-flip';

function App() {
  let {data}=useContext(myContext);
  let[menue,setMenue]=useState(false);
  let[flip,setFlip]=useState(false);
  let menueClick=()=>{
    setMenue(!menue);
  }
return (<>
<div className='container'>
  {<Menue visibility={menue} setVisibility={menueClick}/>}
{!menue&&<span class="material-symbols-outlined menue-button" onClick={menueClick}>
menu
</span>}
<div className='flip-card'>
<ReactCardFlip isFlipped={flip} flipDirection="horizontal">
  <div className='card front' onClick={()=>setFlip(!flip)}>hello</div>
  <div className='card back'onClick={()=>setFlip(!flip)}>world</div>
</ReactCardFlip>
</div>
</div>
</>
  )
}

export default App
