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
function Child() {
   return <div>This is children content</div>;
 }
//  Challenge: Uncomment this code to complete quiz

// function Child(props) {
//   function ChangeParent() {
//     props.name("This is another child component")

//   }
//   return (
//     <>
//       <div>Child</div>
//       <button onClick={ ChangeParent}>Change Parent Value</button>
//     </>
//   );
// }

// function Parent() {
//   const [value, setValue] = React.useState(
//     "I need to be updated from my child"
//   );

//   return (
//     <>
//       <h3>Update Parent State Challenge (Using Callback)</h3>
//       <div className="wrapper">
//         <div>Parent</div>
//         <div className="box-wrapper">{value}</div>
//       </div>

//       <div className="wrapper">
//         <Child name="this is another child component"/>
//       </div>
//     </>
//   );
// }

//Uncomment this to tackle quiz


//Comment out after completion
function Parent() {
  return (
    <div>
      <Child />
    </div>
  );
}
// Comment above code after completion

function App() {
  const [] = React.useState(true);
  return (
    
    <>
    
      <SimpleJsx />
    <img src={logo} className="App-logo" alt="logo" />
      <h3>User names</h3>
      <ul>{usersList}</ul>
      <button onClick={() => {}}>Hide Element Below</button>
      <div>Toggle Challenge</div>
      <Parent>
      <Child />
    </Parent>
    </>
  );
}

export default App;
