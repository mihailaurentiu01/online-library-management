import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { BASE_URL } from "../../js/constants";
import db from "../../js/db";

import User from "../../models/User";

const createUser = (user: User) => {
  return axios.post(BASE_URL + db.users, user);
};

const useSignup = () => {
  const { mutate, isLoading } = useMutation(createUser, {
    mutationKey: ["postCreateUser"],
  });

  return {
    mutate,
    isLoading,
  };
};

export default useSignup;
