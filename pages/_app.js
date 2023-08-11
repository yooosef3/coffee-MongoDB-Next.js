import "@/styles/globals.css";

import { persistor, store } from "../redux/store";

import CrispProvider from "@/components/crisp-provider";
import Layout from "@/components/layout/Layout";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import { SessionProvider } from "next-auth/react";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  if (Component.getLayout) {
    return Component.getLayout(<Component {...pageProps} />);
  }
  return (
    <SessionProvider session={session}>
      <CrispProvider />
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </PersistGate>
      </Provider>
    </SessionProvider>
  );
}
