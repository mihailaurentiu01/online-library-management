import { useMutation, useQuery } from "@tanstack/react-query";
import { useCallback, useState } from "react";

import { AxiosResponse } from "axios";

import DB from "../../models/enums/db";
import Mutations from "../../models/enums/mutations";

import api from "../../services/api";
import Author from "../../models/Author";
import Book from "../../models/Book";

const createBook = (book: Book) => {
  return api.post(DB.books, book);
};

const useBook = () => {
  const { mutate: postCreateBook, isLoading: isCreateBookLoading } =
    useMutation(createBook, {
      mutationKey: [Mutations.CREATE_BOOK],
    });

  return {
    postCreateBook,
    isCreateBookLoading,
  };
};

export default useBook;
