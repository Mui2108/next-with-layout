import { useRouter } from "next/router";
import { useState } from "react";

const apiURL = "http://192.168.2.38:8000";
interface fetchConfig {
  method: "GET" | "PATCH" | "PUT" | "DELETE" | "POST";
  path: string;
  data?: object | null;
  isBasic?: boolean;
  token?: string;
  formData?: any;
}

const useFetch = () => {
  const { push } = useRouter();
  const [token, setToken] = useState("");
  const Fetch = async (FetchConfig: fetchConfig) => {
    try {
      const url = `${apiURL}${FetchConfig.path}`;
      const accessToken = sessionStorage.getItem("token");
      setToken(accessToken || "");
      const res = await fetch(url, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
        method: FetchConfig.method,
        body:
          FetchConfig.method === "PATCH" ||
          FetchConfig.method === "POST" ||
          FetchConfig.method === "PUT"
            ? JSON.stringify(FetchConfig.data)
            : null,
      });

      if (res.status === 403) {
        sessionStorage.removeItem("token");
        push("/login");
      }
      const dataResponse = await res.json();
      return { code: res.status, result: dataResponse };
    } catch (error) {
      return { res: null, message: error };
    }
  };

  return { Fetch, apiURL, token } as const;
};

export default useFetch;
