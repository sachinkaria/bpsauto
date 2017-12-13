import React from 'react';
import {Row, Col} from 'react-bootstrap';
import BookingForm from '../containers/BookingForm';

const Home = () => {
  return (
    <div>
      <section className="section-main">
        <Row>
          <Col xs={10} xsOffset={1} md={4} mdOffset={4}>
            <h1 className="text-left bp-profile-heading">Book your MOT online now.</h1>
            <BookingForm />
          </Col>
        </Row>
      </section>
    </div>
  );
};

export default Home;

