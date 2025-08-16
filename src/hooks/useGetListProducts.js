import { useEffect, useState } from "react";
import { API_GET_LIST_PRODUCT } from "../constant/Apis";
import { getAllProducts } from "../services/products_management";
import useSWR from "swr";
const convertToJsonObject = (data) => {
  const a = JSON.stringify(data);
  return JSON.parse(a);
};

const useGetListProducts = (dataFilter) => {
  const [dataFilterUrlParams, setDataFilterUrlParams] = useState("");

  const { data, mutate, isLoading } = useSWR(
    dataFilterUrlParams ? [API_GET_LIST_PRODUCT, dataFilterUrlParams] : null,
    () => getAllProducts(dataFilter),
    { dedupingInterval: 60, revalidateOnFocus: false, revalidateIfStale: false }
  );
  useEffect(() => {
    if (dataFilter) {
      const urlParam = new URLSearchParams(
        convertToJsonObject(dataFilter)
      ).toString();
      setDataFilterUrlParams(urlParam);
    }
  }, [dataFilter]);
  return { data, handleGetListProduct: mutate, isLoading };
};
export default useGetListProducts;
