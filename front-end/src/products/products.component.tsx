import ProductItemComponent from '../product-item/product-item.component';
import './products.styles.scss';
import {Product} from '../core/models/product.model';


function ProductsComponent(props: { products: Product[] }) {
  const { products } = props;

  return (
      <div className="product-cards">{
        products.map((product: Product) =>
          <ProductItemComponent key={product.id} product={product} />
        )
      }</div>
  )
}
export default ProductsComponent;
