import {
  API_CREATE_CATE,
  API_DETAIL_CATE_BY_ID,
  API_GET_LIST_CATE,
  API_REMOVE_CATE_BY_ID,
  API_UPDATE_CATE_BY_ID,
} from "../constant/Apis";
import axiosClient from "./axiosClient";

export const getAllCategories = async (params) => {
  const res = await axiosClient.get(API_GET_LIST_CATE, { params });
  return res.data;
};

export const createCategories = async (data) => {
  return await axiosClient.post(API_CREATE_CATE, { data });
};

export const getDetailCategory = async (id) => {
  return await axiosClient.get(API_DETAIL_CATE_BY_ID, { pathParams: { id } });
};

export const updateCategory = async (id) => {
  return await axiosClient.put(API_UPDATE_CATE_BY_ID, { pathParams: { id } });
};

export const removeCategory = async (id) => {
  return await axiosClient.delete(API_REMOVE_CATE_BY_ID, {
    pathParams: { id },
  });
};
