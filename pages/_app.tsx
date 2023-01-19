import "../styles/globals.css";
import type { AppProps } from "next/app";
import "../styles/customize-theme-antd/variables.less";
import "../styles/antd/index.less";
import Layouts from "../layout/Layouts";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  const { pathname, push } = useRouter();
  useEffect(() => {
    const token = sessionStorage.getItem("token");
    if (!token) push("/login");
  }, [pathname]);

  if (pathname === "/login") return <Component {...pageProps} />;
  return (
    <Layouts>
      <Component {...pageProps} />
    </Layouts>
  );
}

export default MyApp;
