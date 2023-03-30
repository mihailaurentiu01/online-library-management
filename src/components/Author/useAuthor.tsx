import { useMutation, useQuery } from "@tanstack/react-query";
import { useCallback, useState } from "react";

import { AxiosResponse } from "axios";

import DB from "../../models/enums/db";
import Mutations from "../../models/enums/mutations";

import api from "../../services/api";
import Author from "../../models/Author";

const createAuthor = (author: Author) => {
  return api.post(DB.authors, author);
};

const getAllCategories = (): Promise<AxiosResponse<Author[]>> => {
  return api.get<Author[]>(DB.authors);
};

const useAuthor = () => {
  const [authors, setAllAuthors] = useState<Author[]>();

  const { mutate, isLoading } = useMutation(createAuthor, {
    mutationKey: [Mutations.CREATE_NEW_AUTHOR],
  });

  const { data, isFetching } = useQuery(["authors"], getAllCategories, {
    select: useCallback((response: AxiosResponse) => {
      setAllAuthors(response.data);

      return response.data;
    }, []),
  });

  return {
    mutate,
    isLoading,
    authors,
    isFetching,
  };
};

export default useAuthor;
