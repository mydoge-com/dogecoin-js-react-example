import * as dogecoin_js from "@mydogeofficial/dogecoin-js";
import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [state, setState] = useState({ pub: "", priv: "" });

  useEffect(() => {
    (async () => {
      const [pubKey, privKey] = await dogecoin_js.generatePrivPubKeypair();
      setState({ pub: pubKey, priv: privKey });
    })();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <p>{`pub: ${state.pub}`}</p>
        <p>{`priv: ${state.priv}`}</p>
      </header>
    </div>
  );
}

export default App;
