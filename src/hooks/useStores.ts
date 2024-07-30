import { createContext, useContext } from "react";
import RootStore, { rootStore } from "../store/rootStore";

const storeContext = createContext(rootStore);

export function useStores(): RootStore {
  return useContext(storeContext);
}
