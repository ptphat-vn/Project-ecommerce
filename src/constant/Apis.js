//auth
export const API_REGISTER = "/auth/register";
export const API_LOGIN = "/auth/login";
export const API_REFRESH_TOKEN = "/auth/refresh";
export const API_LOGOUT = "/auth/logout";
//category
export const API_CREATE_CATE = "/categories";
export const API_GET_LIST_CATE = "/categories";
export const API_DETAIL_CATE_BY_ID = "/categories/id";
export const API_UPDATE_CATE_BY_ID = "/categories/id";
export const API_REMOVE_CATE_BY_ID = "/categories/id";

//product
export const API_GET_LIST_PRODUCT = "/products";
export const API_CREATE_PRODUCT = "/products";
export const API_DETAIL_PRODUCT_BY_ID = "/products/id";
export const API_UPDATE_PRODUCT_BY_ID = "/products/id";
export const API_REMOVE_PORUDCT_BY_ID = "/products/id";
export const API_GET_PRODUCT_BY_CATE = "/products/category/categoryId";
export const API_UPLOAD_PRODUCT = "/products/upload";

// carts
export const API_GET_CARTS = "/cart";
export const API_ADD_TO_CARRTS = "/cart/add";
export const API_UPDATE_CARTS = "/cart/update";
export const API_REMOVE_CART_BY_PRODUCT = "/cart/remove/:productId";
export const API_REMOVE_ALL_CART = "/cart/clear";

// users
export const API_GET_USERS = "/user";
export const API_CREATE_USER = "/user/admin-create-user";

//orders
export const API_CREATE_ORDER = "/orders";
export const API_GET_LIST_ORDERS = "/orders";
export const API_DETAIL_ORDER_BY_ID = "/orders/:id";
export const API_UPDATE_ORDER_BY_ID = "/orders/:id";
export const API_REMOVE_ORDER_BY_ID = "/orders/:id";
