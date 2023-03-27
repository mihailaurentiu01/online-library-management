import axios from "axios";

import { BASE_URL } from "../js/constants";
import { transformData } from "../js/helpers";

import store from "../store/index";

const instance = axios.create({
  baseURL: BASE_URL,
});

instance.interceptors.response.use((response) => {
  const state = store.getState();
  const userId = state.user?.user?.id;

  const transformedData = transformData(response.data);

  if (userId) {
    if (transformedData.some((element) => element?.createdBy)) {
      const dataByCreatedUser = transformedData.filter(
        (el) => el.createdBy === userId
      );

      response.data = dataByCreatedUser;

      return response;
    }
  }

  response.data = transformedData;

  return response;
});

export default instance;
