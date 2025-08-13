import {
  API_CREATE_PRODUCT,
  API_DETAIL_PRODUCT_BY_ID,
  API_GET_LIST_PRODUCT,
  API_GET_PRODUCT_BY_CATE,
  API_REMOVE_PORUDCT_BY_ID,
  API_UPDATE_PRODUCT_BY_ID,
} from "../constant/Apis";
import axiosClient from "./axiosClient";

export const getAllProducts = async (params) => {
  const res = await axiosClient.get(API_GET_LIST_PRODUCT, { params });
  return res.data;
};

export const createProducts = async (data) => {
  return await axiosClient.post(API_CREATE_PRODUCT, { data });
};

export const getDetailProduct = async (id) => {
  return await axiosClient.get(API_DETAIL_PRODUCT_BY_ID, {
    pathParams: { id },
  });
};

export const updateProduct = async (id) => {
  return await axiosClient.patch(API_UPDATE_PRODUCT_BY_ID, {
    pathParams: { id },
  });
};

export const removeProduct = async (id) => {
  return await axiosClient.delete(API_REMOVE_PORUDCT_BY_ID, {
    pathParams: { id },
  });
};

export const getProductByCategoryId = async (cateId) => {
  return await axiosClient.get(API_GET_PRODUCT_BY_CATE, {
    pathParams: { cateId },
  });
};
