import React, { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  function chequeo(){
      if(counter >= 3 ){
setCounter(0);
      }else{
          setCounter(counter + 1);
      }
      
  }
  return (
    <div>
      <button onClick={chequeo}>{counter}</button>
    </div>
  );
};
export default Counter;
