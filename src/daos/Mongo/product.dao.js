import productModel from "../../models/product.model.js";

export default class ProductDaoMongo {
  // manager
  constructor() {
    this.model = productModel;
  }

  async get(limit, page, sort) {
    if (!sort) {
      return await this.model.paginate({}, { limit, page, lean: true });
    } else {
      return await this.model.paginate(
        {},
        { limit, page, lean: true, sort: { price: sort } }
      );
    }
  }

  async getBy(id) {
    return await this.model.findById({ _id: id }).lean();
  }

  async create(newProduct) {
    return await this.model.create(newProduct);
  }

  async update(id, newProduct) {
    return await this.model.findByIdAndUpdate({ _id: id }, newProduct);
  }

  async delete(id) {
    return await this.model.findByIdAndDelete({ _id: id });
  }
}
