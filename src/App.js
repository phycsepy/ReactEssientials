function NeedHelp(){
  return(
    <h1>need help please </h1>
  );
}
function NoNeedHelp(){
  return(
    <h1>No need help</h1>
  );
}

function App({condition}) {
  return (
    <>
    {condition?<NeedHelp/>:<NoNeedHelp/>}
    </>
  );
}

export default App;
