import Card from 'react-bootstrap/Card';
import './product-item.styles.scss';
import {Link} from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import {Product} from '../core/models/product.model';

function ProductItemComponent(props: { product: Product }) {
  const { availability, id, img, name, price, type }: Product = props.product;

  return (
    <Link to={`product-item/${id}`}>
      <Card>
        <Card.Img variant="top" src={img} />
        <img className="heart-icon" alt="heart" src="./images/heart.png" />
        <div className="details-title">Product Details</div>

        <Card.Body>
          <div className='card-title'>
            <div>{name}</div>
            <div>{price}</div>
          </div>

          <div className="card-type">{type}</div>

          <div className="card--footer">
            <div>
              <span className="round"></span>
              Available now {availability}
            </div>
            <div>
              <Form.Check
                type="checkbox"
                id={String(id)}
                label="Compare"
              />
            </div>
          </div>
        </Card.Body>
      </Card>
    </Link>
  )
}
export default ProductItemComponent;
