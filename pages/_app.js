import "@/styles/globals.css";

import { persistor, store } from "../redux/store";

import { AuthProvider } from "@/context/authContext";
import Layout from "@/components/layout/Layout";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import { SessionProvider } from "next-auth/react";

// import type { AppProps } from "next/app";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  if (Component.getLayout) {
    return Component.getLayout(<Component {...pageProps} />);
  }
  return (
    <SessionProvider session={session}>
      <Provider store={store}>
        <AuthProvider>
          <PersistGate loading={null} persistor={persistor}>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </PersistGate>
        </AuthProvider>
      </Provider>
    </SessionProvider>
  );
}
