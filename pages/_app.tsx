import { store, StoreContext } from "@/common";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <StoreContext.Provider value={{ store }}>
      <Component {...pageProps} />
    </StoreContext.Provider>
  );
}

export default MyApp;
