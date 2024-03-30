import React, { useState } from "react";
import List from "./components/List";
import data from "./helper/data"


function App() {

  const [index, setIndex] = useState(0)

  const handleNext = () => {
    if(index + 5 < data.length)
    setIndex(index + 5)    
  }
  
  const handlePrev = () => {
    if(index - 5 >= 0)
    setIndex(index - 5);
  };
  



  return (
    <main>
      <section className="container">
        <h3>Employee List</h3>
        <h5>
          (Employees {index + 1} to {index + 5})
        </h5>
        <List index={index} />
        <div className="btns">
          <button onClick={handlePrev}>Prev</button>
          <button onClick={handleNext}>Next</button>
        </div>
      </section>
    </main>
  );
}

export default App;