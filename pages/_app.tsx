import { store, StoreContext } from "@/common";
import type { AppProps } from "next/app";

import "@/styles/index.css";
import { Header } from "@/components";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <StoreContext.Provider value={{ store }}>
      <Header />
      <main>
        <Component {...pageProps} />
      </main>
      <div id="portal" />
    </StoreContext.Provider>
  );
}

export default MyApp;
