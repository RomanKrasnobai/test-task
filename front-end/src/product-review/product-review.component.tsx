import './product-review.styles.scss';
import '../custom.scss';
import {useEffect, useState} from 'react';
import Form from 'react-bootstrap/Form';
import ReviewCommentComponent from '../review-comment/review-comment.component';
import {Button, Container, Row} from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import {Review} from '../core/models/review.model';


function ProductReviewComponent() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [validated, setValidated] = useState<boolean>(false);
  const [reviewsAmount, setReviewsAmount] = useState<number>(1);
  const [description, setDescription] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');

  useEffect(() => {
    fetch(`http://localhost:3001/reviews`).then(res => res.json()
        .then((reviews: Review[]) => {
          setReviews(reviews);
        })
        .catch(error => console.log(error))
    )
  }, [])

  const handleLoadAllReviews = () => {
    setReviewsAmount(reviews.length);
  }

  const handleSubmit = (event: any) => {
    event.preventDefault();

    if (event.currentTarget.checkValidity() === false) {
      event.stopPropagation();
      setValidated(true);
      return;
    }

    const data: Review = {
      id: Number(Math.random().toString().substring(2, 5)),
      date: String(new Date()),
      description,
      email,
      name,
      phone,
      rating: 0
    }

    setReviews([...reviews, data]);
    setName('');
    setEmail('');
    setDescription('');
  }

  return(
     <div className="product-reviews">
       <Container>{
         reviews.slice(0, reviewsAmount).map((review: Review) =>
             <ReviewCommentComponent key={review.id} review={review} />)
        }
         <hr/>

         <button className="btn-underline" onClick={handleLoadAllReviews}>LOAD ALL REVIEWS</button>

         <div className="review-form">
           <h1>Leave a Review</h1>

           <Form noValidate validated={validated} onSubmit={handleSubmit}>
             <Row className="mb-8 form-row">
               <Form.Group as={Col} md="5" controlId="validationCustom01">
                 <Form.Label>Your email address will not be published. Required fields are marked *</Form.Label>
                 <Form.Control
                   required
                   className="comment"
                   as="textarea"
                   type="text"
                   placeholder="Comment *"
                   value={description}
                   onChange={e => setDescription(e.target.value)}
                   style={{ height: '100px' }}
                 />

                 <div className="name-block">
                   <Form.Control
                     required
                     className="name"
                     type="text"
                     placeholder="Name *"
                     value={name}
                     onChange={e => setName(e.target.value)}
                   />

                   <Form.Control
                     required
                     type="text"
                     placeholder="Email *"
                     value={email}
                     onChange={e => setEmail(e.target.value)}
                   />
                 </div>

                 <Form.Control
                   type="text"
                   className="phone"
                   placeholder="Phone (optional)"
                   value={phone}
                   onChange={e => setPhone(e.target.value)}
                 />

                 <Form.Check
                     type="checkbox"
                     label="Save my name, email, and website in this browser for the next time I comment"
                 />
               </Form.Group>
             </Row>
             <Button className="post-btn" type="submit">POST REVIEW</Button>
           </Form>
         </div>
       </Container>
     </div>
  );
}

export default ProductReviewComponent;
