import React, { useState } from "react";
import Note from "./Note";
import Conte from "./Conte";
import Header from "./Header";
import Footer from "./Footer";

function App() {

  const [change, setChange] = useState([]);

  


  function handleClick(prop) {
    setChange((prevValue) => [...prevValue,prop]);
  }



  function delt(id) {
    setChange((prevValue) => {
      return (prevValue.filter((items, idx) => { return (idx != id) }))
    })
  }
  return (
    <div className="container">
      
       <Header />
      
      <Conte hc={handleClick} />
      

        {change.map((todo, idx) => (<Note texT={todo.title} textC ={todo.content} deltu={delt} key={idx} id={idx} />))}


      <Footer />
    </div>
  );
}

export default App;
