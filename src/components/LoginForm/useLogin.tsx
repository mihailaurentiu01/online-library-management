import { useQuery } from "@tanstack/react-query";
import { AxiosResponse } from "axios";

import api from "../../services/api";
import { createNotification } from "../../js/helpers";

import DB from "../../models/enums/db";
import User from "../../models/User";
import { transformData } from "../../js/helpers";
import { useState, useCallback } from "react";

const getAllUsers = (): Promise<AxiosResponse<User[]>> => {
  return api.get<User[]>(DB.users);
};

const useLogin = () => {
  const [users, setUsers] = useState<User[]>();

  const { data, isFetching } = useQuery(["users"], getAllUsers, {
    select: useCallback((response: AxiosResponse) => {
      const allUsersUnformatted = response.data;

      const allUsersFormatted: User[] = transformData(allUsersUnformatted);
      setUsers(allUsersFormatted);

      return allUsersFormatted;
    }, []),
  });

  const performLoginAsUser = (email: string, password: string) => {
    const foundUser = users?.find((user: User) => user.email === email);

    if (foundUser && foundUser.type === "user") {
      // password check

      if (foundUser.password === password) return true;

      createNotification("Provided data does not match", "error");

      return false;
    }

    createNotification("Provided data does not match", "error");

    return false;
  };

  return {
    data,
    isFetching,
    performLoginAsUser,
  };
};

export default useLogin;
