// import logo from './logo.svg';
// import './App.css';
import Test from "./Test"

function App() {
  let x = 5;
  let text = "Hello Buddy!"

  // if statement usecase
  // if (x < 10) {
  //   text = " You right!"
  // }


  return (
    <div>
      {/* Hi this Jason
      <Test/> */}
      {/* expressions */}
      {/* <h1>React is {5+5} times better with Js</h1>
      <input type="text"/>
      <p className="note">This is an example of className attribute</p> */}
      {/* {text} */}
      {/* ternary operator */}
      {x<10? "Hello": "Good bye"}
    </div>
  );
}

export default App;
