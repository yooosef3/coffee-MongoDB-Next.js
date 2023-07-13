import "@/styles/globals.css";

import { persistor, store } from "../redux/store";

import Layout from "@/components/layout/Layout";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";

// import type { AppProps } from "next/app";

export default function App({ Component, pageProps }) {
  if (Component.getLayout) {
    return Component.getLayout(<Component {...pageProps} />);
  }
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </PersistGate>
    </Provider>
  );
}
