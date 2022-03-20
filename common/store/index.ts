import React from "react";
import { Store } from "./store";
export * from "./store";

interface State {
  store: Store;
}

export const store = new Store();

export const StoreContext = React.createContext<State>({ store });
