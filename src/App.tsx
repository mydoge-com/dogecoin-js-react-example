import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [state, setState] = useState({ pub: "", priv: "" });

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "dogecoin-js.js";
    script.id = "dogecoin-js";
    document.body.appendChild(script);
    script.onload = async () => {
      console.log("script loaded");
      // const libdogecoin: any = await window.loadWASM();
      // libdogecoin._dogecoin_ecc_start();
      // const privatePtr = libdogecoin.allocate(
      //   libdogecoin.intArrayFromString(""),
      //   libdogecoin.ALLOC_NORMAL
      // );
      // const publicPtr = libdogecoin.allocate(
      //   libdogecoin.intArrayFromString(""),
      //   libdogecoin.ALLOC_NORMAL
      // );
      // libdogecoin._generatePrivPubKeypair(privatePtr, publicPtr, false);
      // const privKey = `${libdogecoin.UTF8ToString(privatePtr)}`;
      // const pubKey = `${libdogecoin.UTF8ToString(publicPtr)}`;
      // libdogecoin._dogecoin_ecc_stop();
      // setState({ pub: pubKey, priv: privKey });
    };
  }, [setState]);

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
