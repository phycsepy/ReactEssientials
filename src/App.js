import './App.css';


function Heading(props){
  return(
  <h1>First look to ReactJS & i am {props.Name}</h1>
  );
}



function Main(props){
  return(
    <div>
    <h2>Point number {props.number} It is all about learning and interest and i have mixed feelings on ReactJS</h2>
    <img src='https://github.com/phycsepy.png' alt='ironman'/>
    <ul style={{textAlign : "left"}}>{
      props.dishes.map(dish =>(
        <li key={dish.id} >{dish.title}</li>
      ))
    }

    </ul>
    </div>
  );
}

function Footer(){
  return (
    <h3> Copy Rights 2021 </h3>
  );
}

const dishes = [
  "poori","samosa","franky"
]


// dishes.map(dish=>console.log(dish))
const dishesObj = dishes.map((dish,i)=>({id:i,title:dish}))

function App() {
  return (
    <div className="App">
    <Heading Name="Kundan"/>
    <Main number="one" dishes={dishesObj}/>
    <Footer/>
    </div>
  );
}

export default App;
