import libdogecoin from "@mydogeofficial/dogecoin-js";
import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [state, setState] = useState({ pub: "", priv: "" });

  useEffect(() => {
    (async () => {
      const [pub, priv] = await libdogecoin.generatePrivPubKeypair();
      setState({ pub, priv });
    })();
  }, [setState]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {`pub: ${state.pub} priv: ${state.priv}`}
        </a>
      </header>
    </div>
  );
}

export default App;
