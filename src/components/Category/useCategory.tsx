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

const updateCategory = (data: any) => {
  return api.put(DB.categoryNoJson + "/" + data.id + ".json", data.data);
};

const deleteCategory = (id: string) => {
  return api.delete(DB.categoryNoJson + "/" + id + ".json");
};

const useCategory = () => {
  const [categories, setCategories] = useState<Category[]>();

  const { mutate, isLoading } = useMutation(createCatgory, {
    mutationKey: [Mutations.CREATE_NEW_CATEGORY],
  });

  const { mutate: updateCategoryData, isLoading: isUpdateCategoryDataLoading } =
    useMutation(updateCategory, {
      mutationKey: [Mutations.UPDATE_CATEGORY],
    });

  const { mutate: deleteCategoryData, isLoading: isDeleteCategoryDataLoading } =
    useMutation(deleteCategory, {
      mutationKey: [Mutations.DELETE_CATEGORY],
    });

  const { data, isFetching } = useQuery(["categories"], getAllCategories, {
    select: useCallback((response: AxiosResponse) => {
      setCategories(response.data);

      return response.data;
    }, []),
  });

  const getAllActiveCategories = () => {
    return categories?.filter((category) => category.status === "Active");
  };

  return {
    mutate,
    isLoading,
    isFetching,
    categories,
    updateCategoryData,
    isUpdateCategoryDataLoading,
    deleteCategoryData,
    isDeleteCategoryDataLoading,
    getAllActiveCategories,
  };
};

export default useCategory;
