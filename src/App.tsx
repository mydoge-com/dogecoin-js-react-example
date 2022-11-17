import { DogecoinJS } from "@mydogeofficial/dogecoin-js";
import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [state, setState] = useState({ privKey: "", pubKey: "" });

  useEffect(() => {
    (async () => {
      const dogecoin_js: DogecoinJS = await DogecoinJS.init();
      const [privKey, pubKey] = await dogecoin_js.generatePrivPubKeypair();
      setState({ privKey, pubKey });
    })();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <p data-testid="priv">{`privKey: ${state.privKey}`}</p>
        <p data-testid="pub">{`pubKey: ${state.pubKey}`}</p>
      </header>
    </div>
  );
}

export default App;
