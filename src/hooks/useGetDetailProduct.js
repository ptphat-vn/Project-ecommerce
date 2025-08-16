import useSWR from "swr";
import { API_DETAIL_PRODUCT_BY_ID } from "../constant/Apis";
import { getDetailProduct } from "../services/products_management";

const useGetDetailProduct = (id) => {
  const { data, mutate, isLoading } = useSWR(
    id ? [API_DETAIL_PRODUCT_BY_ID, id] : null,
    () => getDetailProduct(id),
    { dedupingInterval: 1000 }
  );
  return { detailProduct: data?.data, mutate, isLoading };
};
export default useGetDetailProduct;
