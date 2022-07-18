import React, { useState } from "react";
import logo from './icon.jpeg';
import './App.css';




function SimpleJsx() {
  return <h1>JSX is cool</h1>
}
/**
  Challenge: Display all users to the browser
**/

const users = [
  { name: "John Doe", id: 1 },
  { name: "Jane Doe", id: 2 },
  { name: "Billy Doe", id: 3 }
];

const usersList = users.map((user) => {
  return <li key={user.id}>{user.name}</li>
})


// // comment this out after completion and uncomment code below it to proceed
// function Child() {
//    return <div>This is children content</div>;
//  }
//  Challenge: Uncomment this code to complete quiz

function Child(props) {
  return (
    <>
      <div>Child</div>
      <button onClick={ props.change}>Change Parent Value</button>
    </>
  );
}


function Parent() {
  const [value, setValue] = React.useState(
    "I need to be updated from my child"
  );
  function UpdateParent() {
    let components = ["Memory", "Hard Drive or Solid State Drive", "Video card", "Motherboard", "Processor", "Power Supply", "Monitor", "Keyboard and Mouse",]
    console.log(components.length)
    let randomIndex = Math.floor(Math.random() * 8)

    if (value) {
    setValue("I am a " + components[randomIndex] + " and I was updated")
  }
}
  return (
    <>
      <h3>Update Parent State Challenge (Using Callback)</h3>
      <div className="wrapper">
        <div>Parent</div>
        <div className="box-wrapper">{value}</div>
      </div>

      <div className="wrapper">
        <Child change={UpdateParent} />
      </div>
    </>
  );
}

//Uncomment this to tackle quiz


//Comment out after completion
// function Parent() {
//   return (
//     <div>
//       <h3>Parent Component</h3>
//       <Child />
//     </div>
//   );
// }
// Comment above code after completion

function App() {
  const [] = React.useState(true);
  const [isToggled, setIsToggled] = useState("Toggle Challenge")

  function HandleToggle() {
    if (isToggled) {
      setIsToggled("")
    } else {
      setIsToggled("Toggle Challenge")
    }
  }
  return (
    
    <>
    
      <SimpleJsx />
    <img src={logo} className="App-logo" alt="logo" />
      <h3>User names</h3>
      <ul>{usersList}</ul>
      <button onClick={HandleToggle}>Hide Element Below</button>
      <div>{isToggled}</div>
      <Parent/>
    </>
  );
}

export default App;
