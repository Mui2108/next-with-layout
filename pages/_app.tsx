import "../styles/globals.css";
import type { AppProps } from "next/app";
import "../styles/customize-theme-antd/variables.less";
import "../styles/antd/index.less";
import Layouts from "../layout/Layouts";
import Login from "../components/Login";
function MyApp({ Component, pageProps }: AppProps) {
  const token = "ddd";
  if (token) {
    return (
      <Layouts>
        <Component {...pageProps} />
      </Layouts>
    );
  } else {
    return <Login />;
  }
}

export default MyApp;
