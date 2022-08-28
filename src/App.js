import React from "react";
import Details from "./Details";
import './css/details.css';


function App() {
  const details={
    name: 'jhon',
    email: 'jhon123@gmail.com',
    phone: 1234567890,
  }
  
  return (
    <div>
      <Details details={details} />
    </div>
  );
}

export default App;
