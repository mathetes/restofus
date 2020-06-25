import React from "react";
import ReactDOM from "react-dom";

function ExampleComponent() {
  return (
    <div>
      <h1>This is our App!</h1>
      <p>The sky is blue.</p>
    </div>
  );
}

ReactDOM.render(<ExampleComponent />, document.querySelector("#app"));
