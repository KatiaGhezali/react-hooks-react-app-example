import React from "react";
import { format } from "date-fns";
import ExampleComponent from "./ExampleComponent";
import TestComponent from "./TestComponent";

// Add your code own within the return statement
function App() {
  return (
    <div className="App">
      <h1>Now</h1>
      <p className="App-intro">
       I was going to add my code, but I cannot get over the fact that you wrote "your code own"
       instead of "your own code" !!
      </p>
      <ExampleComponent />
      <TestComponent />
      
    </div>
  );
}

export default App;
