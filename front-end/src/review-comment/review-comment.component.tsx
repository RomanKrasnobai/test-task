// @ts-ignore
import ReactStars from "react-rating-stars-component";
import '../custom.scss';
import './review-comment.styles.scss';
import {Review} from '../core/models/review.model';
import {Row} from 'react-bootstrap';
import {useState} from 'react';

function ReviewCommentComponent(props: { review: Review }) {
  const { name, rating, date, description }: Review = props.review;

  const [height, setHeight] = useState<number>(45);

  const handleHeight = () => {
    setHeight(75);
  }

  return(
      <>
        <Row className="mb-3">
          <h1>{name}</h1>
          <div>{date}</div>
          <ReactStars
            edit={false}
            count={5}
            size={24}
            value={Number(rating)}
            activeColor="#446671"
          />

          <div>
            <div className="description" style={{height: `${height}%`}}>{description}</div>
            <div className="button-block">
              <button onClick={handleHeight} className="btn-underline">READ MORE</button>
            </div>
          </div>
        </Row>
      </>
  )
}

export default ReviewCommentComponent;
