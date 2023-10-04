// Nhập khẩu component 'Product' để sử dụng
import Product from "./components/Product";

const products = [
  {'id': 1, 'name': 'Macbook Pro M1', 'cat_id': 1},
  {'id': 2, 'name': 'Samsung Note 9', 'cat_id': 1},
  {'id': 3, 'name': 'IPhone 15 ProMax', 'cat_id': 2}
]

// Component
function App() {
  return (
    <div>
      <h1>Welcome to React application</h1>
      {/* Gọi component */}
      {/* <Product id='P001' name='Iphone 15 ProMax Titan'/> */}
      
      <Product data={products}/>
    </div>
  );
}

export default App;
