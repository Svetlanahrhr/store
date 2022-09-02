import Product from '../Interfaces/Product';
import ProductsModel, { productModel } from '../Models/ProductsModel';
import ProductItem from './ProductItem';

export default class ProductsList {
  private loading: boolean = false;
  private error: Error | null = null;
  private products: Product[] = [];

  constructor() {
    this.fetchProducts();
  }

  fetchProducts() {
    this.loading = true;
    productModel
      .getProducts()
      .then((products) => {
        this.products = products;
      })
      .catch((error) => {
        this.error = error;
      });
  }
  render() {
    return `<h2>Products List</h2>
    ${this.products
      .map((product) => new ProductItem(product))
      .map((product) => product.render())
      .join('')}
    ${this.loading ? `<p>Loading....</p>` : ``}
    ${this.error ? `<p>Error....</p>` : ``}
    <button>Prev</button>
    <button>Next</button>`;
  }
}
