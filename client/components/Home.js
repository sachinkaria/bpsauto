import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import { browserHistory, Link } from 'react-router';
import { connect } from 'react-redux';

const Home = () => {
    return (
      <div>
        <section className="section-main">
          <Row>
            <Col xs={10} xsOffset={1} md={8} mdOffset={2} >
              <h1 className="text-left gc-title">BPS Autocare</h1>
            </Col>
          </Row>
        </section>
      </div>
    );
};

export default Home;

