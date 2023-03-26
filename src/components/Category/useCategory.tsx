import { useMutation } from "@tanstack/react-query";
import api from "../../services/api";

import DB from "../../models/enums/db";
import Mutations from "../../models/enums/mutations";

import Category from "../../models/Category";

const createCatgory = (category: Category) => {
  return api.post(DB.category, category);
};

const useCategory = () => {
  const { mutate, isLoading } = useMutation(createCatgory, {
    mutationKey: [Mutations.CREATE_NEW_CATEGORY],
  });

  return {
    mutate,
    isLoading,
  };
};

export default useCategory;
