import useFetch from "../fetch/useFetch";
import { ILogin } from "../../../services/interface/auth";

const useAuth = () => {
  const { Fetch } = useFetch();

  const LOGIN = async (data: ILogin) => {
    const res = await Fetch({
      method: "POST",
      path: "/login",
      data: data,
    });
    return res;
  };

  const GET_ME = async () => {
    const res = await Fetch({
      method: "GET",
      path: "/user/me",
    });
    return res;
  };

  return { LOGIN, GET_ME };
};

export default useAuth;
