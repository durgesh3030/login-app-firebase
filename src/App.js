import React from 'react';
import './index.css';
// import { getDatabase, ref, set } from "firebase/database";
// import { app } from './firebase.js'
import FireAuth from './component/SignUp';
import Signin from './component/SignIn';

// const db = getDatabase(app)

function App() {
  // const putData = () => {
  //   set(ref(db, "users/durgesh"), {
  //     id: 1,
  //     name: "Durgesh",
  //     age: 21
  //   })
  // }
  return (
    <div className="App">
      <header className="App-header">
        <h1>Firebase React App</h1>
        <FireAuth />
        <Signin />
        {/* <button onClick={putData}>put data</button> */}
      </header>
    </div>
  );
}

export default App;
