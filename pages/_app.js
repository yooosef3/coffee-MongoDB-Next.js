import "@/styles/globals.css";

import Layout from "@/components/layout/Layout";
import { Provider } from "react-redux";
import store from "../redux/store";

// import type { AppProps } from "next/app";




export default function App({ Component, pageProps }) {
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
