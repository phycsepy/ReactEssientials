import React, {useReducer}from "react"
// function App() {
//   const [emotion,setEmotion]=useState('happy')
//   const [emotionTwo,setEmotiontwo] = useState('tired')
//   useEffect(()=>{
//     console.log(`it detects only change in state of 1nd emotion `);
//   },[emotion])
//
//   useEffect(()=>{
//     console.log(`it detects only change in state of 2nd emotion `);
//   },[emotionTwo])
//
//
//   return (
//     <>
//       <h1>Emotion detecter my state {emotion}and{emotionTwo}</h1>
//       <button onClick={()=>setEmotion('sad')}>sad
//       </button>
//       <button onClick={()=>setEmotion('happy')}>happy
//       </button>
//       <button onClick={()=>setEmotiontwo('creepy')}>creekpy
//       </button>
//       <button onClick={()=>setEmotiontwo('tired')}>tired
//       </button>
//     </>
//   );
// }
function App(){
  const[check,toogle] = useReducer(
    ((check)=>!check),false)
  return(
    <>
    <input type="checkbox" value={check} onChange={toogle}/>
    <p>{check?"checked":"notchecked"}</p>
    </>
  );
}
export default App;
