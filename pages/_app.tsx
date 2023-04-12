import "@/styles/globals.css";

import type { AppProps } from "next/app";
import Layout from "@/components/layout/Layout";
import { Provider } from "react-redux";
import store from "../redux/store";

export default function App({ Component, pageProps }: AppProps) {
  if (Component.getLayout) {
    return Component.getLayout(<Component {...pageProps} />);
  }
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}
