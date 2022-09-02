import ProductsList from './Components/ProductsList';

export default class App {
  private productList = new ProductsList();
  constructor() {}
  render() {
    return `<h1>Online-store1111</h1>
            <div>${this.productList.render()}</div>`;
  }
}
