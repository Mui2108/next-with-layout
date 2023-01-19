import type { NextPage } from "next";

import { Button } from "antd";
import { useEffect } from "react";
import useAuth from "../components/hooks/auth/useAuth";

const Home: NextPage = () => {
  const { GET_ME } = useAuth();
  useEffect(() => {
    getMe();
  }, []);

  const getMe = async () => {
    try {
      const res = await GET_ME();
    } catch (error) {}
  };
  return <Button type="primary">Click</Button>;
};

export default Home;
