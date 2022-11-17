import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import App from "./App";

test("renders private and public keys", async () => {
  render(<App />);
  await waitFor(() => {
    const pubElem = screen.getByTestId("pub");
    expect(pubElem.textContent?.length).toBeGreaterThan("pubKey: ".length);
  });
  await waitFor(() => {
    const privElem = screen.getByTestId("priv");
    expect(privElem.textContent?.length).toBeGreaterThan("privKey: ".length);
  });
});
