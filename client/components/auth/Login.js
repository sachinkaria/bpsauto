import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router';
import { Col, Row, Button } from 'react-bootstrap';
import { loginUser } from '../../actions/auth';

const form = reduxForm({
  form: 'login'
});

class Login extends Component {
  handleFormSubmit(formProps) {
    this.props.loginUser(formProps);
  }

  renderAlert() {
    if (this.props.errorMessage) {
      return (
        <div>
          <strong>{this.props.errorMessage}</strong>
        </div>
      );
    }
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <Col sm={8} smOffset={2} md={4} mdOffset={4}>
        <div className="bp-center">
          <h4 className="bp-profile-heading-md bp-margin-bottom--lg">Login</h4>
          <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
            <Row>
              <Col sm={8} smOffset={2}>
                <Field placeholder="Email" name="email" className="form-control bp-input bp-margin-bottom" component="input" type="text" />
              </Col>
            </Row>
            <Row>
              <Col sm={8} smOffset={2}>
                <Field placeholder="Password" name="password" className="form-control bp-input bp-margin-bottom--lg" component="input" type="password" />
              </Col>
            </Row>
            <Row>
              <Col sm={8} smOffset={2}>
                {this.renderAlert()}
              </Col>
            </Row>
            <Row className="bp-margin-bottom--lg">
              <Col>
                <Link className="bp-text bp-bold" to="/register">Don&apos;t have an account?</Link>
              </Col>
            </Row>
            <Row>
              <Col sm={4} smOffset={4}>
                <Button type="submit" block bsSize="large" className="btn bp-btn bp-btn--orange bp-margin-bottom">Login</Button>
              </Col>
            </Row>
          </form>
        </div>
      </Col>
    );
  }
}

function mapStateToProps(state) {
  return {
    errorMessage: state.auth.error,
    message: state.auth.message
  };
}

export default connect(mapStateToProps, { loginUser })(form(Login));
