import RouterClass from "./router.js";
import ProductsController from "../controllers/products.controller.js";

const {
  getProduct,
  getProducts,
  deleteProduct,
  newProduct,
  updateProduct,
} = new ProductsController();

export default class productsRouter extends RouterClass {
  init() {
    // Init controller

    // Products view
    this.get("/", ["USER", "USER_PREMIUM", "ADMIN"], getProducts);

    // Product view
    this.get("/:pid", ["USER", "USER_PREMIUM", "ADMIN"], getProduct);

    // New product endpoint
    this.post("/", ["ADMIN"], newProduct);

    // Update product endpoint
    this.put("/:pid", ["ADMIN"], updateProduct);

    // Delete product endpoint
    this.delete("/:pid", ["ADMIN"], deleteProduct);
  }
}
