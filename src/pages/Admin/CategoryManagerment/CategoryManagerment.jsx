import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import CircularProgress from "@mui/material/CircularProgress";
import React, { useState } from "react";
import useGetListCate from "../../../hooks/useGetListCategory";
import Pagination from "@mui/material/Pagination";
import DialogCategory from "./DialogCategory";
import {
  getDetailCategory,
  removeCategory,
} from "../../../services/category_management";
const LIMIT_RECORD_PER_PAGE = 10;

export const CategoryManagerment = () => {
  const { data, handleGetList, isLoading } = useGetListCate({
    page: 1,
    limit: LIMIT_RECORD_PER_PAGE,
  });
  const [detailCate, setDetailCate] = useState(null);
  const [isOpenCate, setIsOpenCate] = useState(false);

  const handleOpenCategory = () => {
    setIsOpenCate(true);
  };
  const handleRemoveCategory = async (id) => {
    console.log(id);
    const res = await removeCategory(id);
    if (res.status === 204) {
      handleGetList();
    }
  };
  const handleDetail = async (id) => {
    const res = await getDetailCategory(id);
    console.log(res, "resss");

    if (res.status === 200) {
      setIsOpenCate(true);
      setDetailCate(res.data);
    }
  };
  const handleChangePage = () => {};
  return (
    <Paper sx={{ p: 3, boxShadow: 3, borderRadius: 3 }}>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        mb={2}
      >
        <Typography variant="h5" fontWeight={700}>
          Quản lý danh mục
        </Typography>
        <Button variant="contained" onClick={handleOpenCategory}>
          Thêm danh mục
        </Button>
      </Stack>
      <TableContainer>
        <Table sx={{ minWidth: 700 }} aria-label="category table">
          <TableHead>
            <TableRow sx={{ backgroundColor: "#f5f5f5" }}>
              <TableCell>
                <b>Tên danh mục</b>
              </TableCell>
              <TableCell align="center">
                <b>Hình ảnh</b>
              </TableCell>
              <TableCell align="center">
                <b>Mô tả</b>
              </TableCell>
              <TableCell align="center">
                <b>Ngày tạo</b>
              </TableCell>
              <TableCell align="center">
                <b>Chức năng</b>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {isLoading ? (
              <TableRow>
                <TableCell colSpan={5} align="center">
                  <CircularProgress />
                </TableCell>
              </TableRow>
            ) : data && data.data && data.data.length > 0 ? (
              data.data.map((item) => (
                <TableRow
                  key={item._id}
                  hover
                  sx={{
                    "&:last-child td, &:last-child th": { border: 0 },
                    transition: "background 0.2s",
                  }}
                >
                  <TableCell component="th" scope="row">
                    <Typography
                      fontWeight={600}
                      fontSize={16}
                      color="text.primary"
                      sx={{
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        maxWidth: 180,
                      }}
                    >
                      {item.name}
                    </Typography>
                  </TableCell>
                  <TableCell align="center">
                    {item.image ? (
                      <Avatar
                        src={item.image}
                        alt={item.name}
                        variant="rounded"
                        sx={{ width: 56, height: 56, margin: "auto" }}
                      />
                    ) : (
                      <Avatar
                        variant="rounded"
                        sx={{ width: 56, height: 56, margin: "auto" }}
                      >
                        ?
                      </Avatar>
                    )}
                  </TableCell>
                  <TableCell align="center">
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{
                        maxWidth: 200,
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                      }}
                    >
                      {item.description || "-"}
                    </Typography>
                  </TableCell>
                  <TableCell align="center">
                    <Typography variant="body2" color="text.secondary">
                      {item.createdAt
                        ? new Date(item.createdAt).toLocaleString()
                        : "-"}
                    </Typography>
                  </TableCell>
                  <TableCell align="center">
                    <Stack direction="row" spacing={1} justifyContent="center">
                      <Button
                        size="small"
                        variant="outlined"
                        color="primary"
                        onClick={() => handleDetail(item._id)}
                      >
                        Sửa
                      </Button>
                      <Button
                        size="small"
                        variant="outlined"
                        color="error"
                        onClick={() => handleRemoveCategory(item._id)}
                      >
                        Xóa
                      </Button>
                    </Stack>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={5} align="center">
                  <Typography color="text.secondary">
                    Không có dữ liệu
                  </Typography>
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
      {data && data.data.length ? (
        <div className="flex justify-between items-center px-3 py-5">
          <div className="j-text-xs">
            <span>
              Hiển thị danh mục thứ{" "}
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
      <DialogCategory
        open={isOpenCate}
        onClose={() => {
          setIsOpenCate(false);
          setDetailCate(null);
        }}
        onSuccess={() => handleGetList()}
        detailCate={detailCate}
      />
    </Paper>
  );
};
