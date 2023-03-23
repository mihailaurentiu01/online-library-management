import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import api from "../../services/api";

import DB from "../../models/enums/db";
import Mutations from "../../models/enums/mutations";

import User from "../../models/User";

const createUser = (user: User) => {
  return api.post(DB.users, user);
};

const useSignup = () => {
  const { mutate, isLoading } = useMutation(createUser, {
    mutationKey: [Mutations.CREATE_NEW_USER],
  });

  return {
    mutate,
    isLoading,
  };
};

export default useSignup;
