import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import useReducerUpdateFilterProducts, {
  UPDATE_FILTER_ACTION_PRODUCT,
} from "../../../hooks/useReducerUpdateFIlterProducts";
import useGetListProducts from "../../../hooks/useGetListProducts";
import TableContainer from "@mui/material/TableContainer";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import { formatBigNumber } from "../../../libs/utils/format-big-number";
import dayjs from "dayjs";
import Typography from "@mui/material/Typography";
import { DialogRemoveProduct } from "./DialogRemoveProduct";
import Pagination from "@mui/material/Pagination";
const LIMIT_RECORD_PER_PAGE = 10;
export const ProductManagement = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const { state, dispatch } = useReducerUpdateFilterProducts();
  const { data, handleGetListProduct, isLoading } = useGetListProducts(state);
  const [productId, setProductId] = useState("");

  const handleChangePage = (e, page) => {
    dispatch({
      type: UPDATE_FILTER_ACTION_PRODUCT.CHANGE_PAGE,
      payload: { page },
    });
  };
  const handleAddProduct = () => {
    navigate("add");
  };
  useEffect(() => {
    let tmpDataFilter = {
      page: 1,
      limit: LIMIT_RECORD_PER_PAGE,
      order: "desc",
      sortBy: "createAt",
    };
    if (searchParams.size > 0) {
      const dataFromSearchParams = JSON.parse(
        '{"' +
          decodeURI(
            searchParams.toString().replace(/&/g, '","').replace(/=/g, '":"')
          ) +
          '"}'
      );
      console.log(
        dataFromSearchParams,
        "dataFromSearchParams",
        searchParams,
        "searchParams"
      );
      tmpDataFilter = {
        page: parseInt(dataFromSearchParams["page"]) || 1,
        limit: dataFromSearchParams["limit"] || LIMIT_RECORD_PER_PAGE,
        order: "desc",
        sortBy: "createdAt",
      };
      if (dataFromSearchParams["id"]) {
        tmpDataFilter.id = dataFromSearchParams["id"];
      }
      dispatch({
        type: UPDATE_FILTER_ACTION_PRODUCT.INITIAL,
        payload: { ...tmpDataFilter },
      });
    } else {
      dispatch({
        type: UPDATE_FILTER_ACTION_PRODUCT.INITIAL,
        payload: tmpDataFilter,
      });
    }
  }, []);
  useEffect(() => {
    if (state) {
      const stringJson = JSON.stringify({
        ...state,
        limit: LIMIT_RECORD_PER_PAGE,
      });
      console.log(state, "state");

      const dataFilterJson = JSON.parse(stringJson);
      console.log(dataFilterJson, "stringJson");

      setSearchParams(new URLSearchParams(dataFilterJson));
    }
  }, [state]);
  return (
    <div>
      <TableContainer>
        <Typography variant="h5" fontWeight={700}>
          Quản lý danh mục
        </Typography>
        <div className="flex justify-end gap-3 pb-4" onClick={handleAddProduct}>
          <Button variant="contained">Thêm sản phẩm</Button>
        </div>
        <Divider />
        <Table>
          <TableHead>
            <TableRow>
              <TableCell className="whitespace-normal p-3 text-base font-semibold text-text-sub">
                Tên danh mục
              </TableCell>
              <TableCell className="whitespace-normal p-3 text-base font-semibold text-text-sub">
                Hình ảnh
              </TableCell>
              <TableCell className="whitespace-normal p-3 text-base font-semibold text-text-sub">
                Thuộc tính
              </TableCell>
              <TableCell className="whitespace-normal p-3 text-base font-semibold text-text-sub">
                Giá
              </TableCell>
              <TableCell className="whitespace-normal p-3 text-base font-semibold text-text-sub">
                Số lượng
              </TableCell>
              <TableCell className="whitespace-normal p-3 text-base font-semibold text-text-sub">
                Mô tả
              </TableCell>
              <TableCell className="whitespace-normal p-3 text-base font-semibold text-text-sub">
                Thời gian tạo
              </TableCell>
              <TableCell className="whitespace-normal p-3 text-base font-semibold text-text-sub">
                Trạng thái
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data &&
              data.products.map((item) => {
                return (
                  <TableRow key={item._id}>
                    <TableCell>
                      {item.name} {item.id}
                    </TableCell>
                    <TableCell>
                      <img
                        width={"100px"}
                        src={item.images[0]}
                        alt={item.name}
                      />
                    </TableCell>
                    <TableCell>Thuộc tính</TableCell>
                    <TableCell>{item.quantity}</TableCell>
                    <TableCell>{formatBigNumber(item.price, true)}</TableCell>
                    <TableCell>
                      <div className="whitespace-nowrap line-clamp-1 truncate w-36">
                        {item.description ? item.description : "-"}
                      </div>
                    </TableCell>
                    <TableCell>
                      {dayjs(item.createAt).format("YYYY-MM-DD HH:mm")}
                    </TableCell>
                    <TableCell>
                      <Button onClick={() => navigate(`add?id=${item._id}`)}>
                        Sửa
                      </Button>
                      <Button onClick={() => setProductId(item._id)}>
                        Xóa
                      </Button>
                    </TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      {data && data.products.length ? (
        <div className="flex justify-between items-center px-3 py-5">
          <div className="j-text-xs">
            <span>
              Hiển thị sản phẩm thứ{" "}
              {((data?.page || 1) - 1) * LIMIT_RECORD_PER_PAGE + 1} đến{" "}
              {(data?.page || 1) < Math.ceil(data.total / LIMIT_RECORD_PER_PAGE)
                ? (data?.page || 1) * LIMIT_RECORD_PER_PAGE
                : data.total}{" "}
              trong tổng số {data.total}
            </span>
          </div>
          <Pagination
            page={data?.page || 1}
            onChange={handleChangePage}
            count={Math.ceil(data.total / LIMIT_RECORD_PER_PAGE)}
            shape="rounded"
          />
        </div>
      ) : (
        ""
      )}
      <DialogRemoveProduct
        productId={productId}
        onClose={() => {
          setProductId("");
        }}
        onSuccess={() => handleGetListProduct()}
      />
    </div>
  );
};
