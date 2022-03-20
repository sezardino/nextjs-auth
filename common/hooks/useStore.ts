import { useContext } from "react";
import { StoreContext } from "@/common";
import { Store } from "@/common";

export const useStore = (): Store => {
  const { store } = useContext(StoreContext);

  return store;
};
