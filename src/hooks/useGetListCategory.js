import { useState } from "react";
import useSWR from "swr";
import { getAllCategories } from "../services/category_management";
const convertToJsonObject = (data) => {
  const a = JSON.stringify(data);
  return JSON.parse(a);
};

const useGetListCate = (dataFilter) => {
  const [dataFilterUrlParams, setDataFilterUrlParams] = useState("");
  const { data, mutate, isLoading } = useSWR(
    "API_GET_LIST_CATE",
    () => getAllCategories(dataFilter),
    { dedupingInterval: 60, revalidateOnFocus: false, revalidateIfStale: false }
  );
  //dedupingInterval: giới hạn thời gian gọi API
  //revalidateFocus: không tự động refetch khi chuyển tab.
  // revalidateIfState: không tự động refetch khi dữ liệu cũ
  return { data, handleGetList: mutate, isLoading };
};
export default useGetListCate;
