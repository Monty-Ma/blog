import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { DisorganizedTest } from "disorganized-test";

const sdk = DisorganizedTest({
  hooks: {
    close(event) {
      console.log(event, "hooks");
    },
  },
});

sdk.test.auth({ test: "" }, (message) => {
  console.log(message, 2);
});
sdk.test.auth({ test: "" }, (message) => {
  console.log(message, 1);
});
const sss = sdk.test.ticker("BTC-25DEC20", (message) => {
  // console.log("BTC-25DEC20001", message);
});
const sub = sdk.test.ticker("BTC-25DEC20", (message) => {
  // console.log("BTC-25DEC20002", message);
});
const subd = sdk.test.ticker("BTC-25DEC21", (message) => {
  // console.log("BTC-25DEC20002", message);
});

setTimeout(() => {
  // sss.unSubscribe();
  subd.unSubscribe();
}, 2000);

setTimeout(() => {
  sub.unSubscribe();
}, 5000);

setTimeout(() => {
  const sub = sdk.test.ticker("BTC-25DEC20", (message) => {
    // console.log("BTC-25DEC20003", message);
  });
}, 5000);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to load.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
