import { useMutation, useQuery } from "@tanstack/react-query";
import { useCallback, useState } from "react";

import { AxiosResponse } from "axios";

import DB from "../../models/enums/db";
import Mutations from "../../models/enums/mutations";

import Category from "../../models/Category";

import api from "../../services/api";

const createCatgory = (category: Category) => {
  return api.post(DB.category, category);
};

const getAllCategories = (): Promise<AxiosResponse<Category[]>> => {
  return api.get<Category[]>(DB.category);
};

const useCategory = () => {
  const [categories, setCategories] = useState<Category[]>();

  const { mutate, isLoading } = useMutation(createCatgory, {
    mutationKey: [Mutations.CREATE_NEW_CATEGORY],
  });

  const { data, isFetching } = useQuery(["categories"], getAllCategories, {
    select: useCallback((response: AxiosResponse) => {
      setCategories(response.data);

      return response.data;
    }, []),
  });

  return {
    mutate,
    isLoading,
    isFetching,
    categories,
  };
};

export default useCategory;
