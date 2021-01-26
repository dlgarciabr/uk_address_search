import React from "react";
import { render as rtlRender } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter, Switch } from "react-router-dom";
import { SnackbarProvider } from "notistack";

import { initializeStore } from "./redux";
import App from "../App";

const store = initializeStore();

function render(ui, { ...renderOptions } = {}) {
  const Wrapper = ({ children }) => {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <SnackbarProvider maxSnack={3}>
              <App />
            </SnackbarProvider>
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  };
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}

export * from "@testing-library/react";

export { render };
