import * as React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import {
  createCategories,
  updateCategory,
} from "../../../services/category_management";
import { toSlug } from "../../../libs/utils/toSlug";
import CircularProgress from "@mui/material/CircularProgress";
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

export default function DialogCategory(props) {
  const { open, onClose, onSuccess, detailCate } = props;
  const [formCate, setFormCate] = React.useState({
    name: "",
    description: "",
    image: "",
  });
  const [isLoading, setIsLoading] = React.useState(false);
  const handleClose = () => {
    onClose();
    setFormCate({
      name: "",
      description: "",
      image: "",
    });
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormCate((oldData) => ({
      ...oldData,
      [name]: value,
    }));
  };
  const handleAddCate = async () => {
    setIsLoading(true);
    const data = {
      ...formCate,
      slug: toSlug(formCate.name),
    };
    console.log(data);

    if (detailCate && detailCate._id) {
      const res = await updateCategory(detailCate._id, data);
      setIsLoading(false);
      onSuccess();
      handleClose();
    } else {
      const res = await createCategories(data);
      if (res.status === 201) {
        setIsLoading(false);
        onSuccess();
        handleClose();
      }
    }
  };
  return (
    <React.Fragment>
      <BootstrapDialog
        // onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          {detailCate && detailCate._id ? "Sửa danh mục" : "Thêm danh mục"}
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={(theme) => ({
            position: "absolute",
            right: 8,
            top: 8,
            color: theme.palette.grey[500],
          })}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>
          <div className="flex flex-col gap-3 w-96">
            <TextField
              fullWidth
              label="Tên danh mục"
              name="name"
              value={formCate.name}
              onChange={handleChange}
              required
            />
            <TextField
              disabled
              fullWidth
              label="Slug"
              name="slug"
              value={toSlug(formCate.name)}
              onChange={handleChange}
              required
            />
            <TextField
              fullWidth
              label="Mô tả"
              name="description"
              value={formCate.description}
              onChange={handleChange}
              multiline
              rows={3}
            />

            <TextField
              fullWidth
              label="Link ảnh"
              name="image"
              value={formCate.image}
              onChange={handleChange}
              required
            />
            {formCate.image && (
              <div className="mt-2">
                <img
                  src={formCate.image}
                  alt="preview"
                  className="h-32 object-cover rounded border"
                />
              </div>
            )}
          </div>
        </DialogContent>
        <DialogActions>
          <Button
            sx={{
              color: "gray",
            }}
            autoFocus
            onClick={handleClose}
            variant="text"
            className={`${isLoading ? "bg-gray-50" : ""}`}
          >
            Quay lại
          </Button>
          <Button
            disabled={isLoading}
            autoFocus
            onClick={handleAddCate}
            variant="contained"
          >
            {isLoading ? <CircularProgress size={20} /> : ""}{" "}
            {detailCate && detailCate._id ? "Sửa" : "Thêm"}
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </React.Fragment>
  );
}
