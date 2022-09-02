import { getProducts } from '../DB/Products.DB';
import Product from '../Interfaces/Product';

export default class ProductItem {
  constructor(private product: Product) {}
  async render() {
    return `
    <div>
      <h3>Product: ${this.product.name}</h3>
      <p><img src="${this.product.image}" alt="${this.product.name}"></p>
      <p>$${this.product.price}</p>
    <?div>`;
  }
}
