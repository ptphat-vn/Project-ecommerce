import React, { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import useGetDetailProduct from "../../../hooks/useGetDetailProduct";
import useGetListCate from "../../../hooks/useGetListCategory";
export const AddProduct = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");
  console.log(id);
  const { detailProduct } = useGetDetailProduct(id);
  const { data } = useGetListCate({
    page: 1,
    limit: 10,
  });
  const [form, setFrom] = useState({
    name: "",
    description: "",
    price: "",
    salePercent: "",
    image: [""],
    categoryId: "",
    amount: "",
    attributes: {},
  });

  return <div>AddProduct</div>;
};
