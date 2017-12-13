import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { Col, Panel, Row, Button } from 'react-bootstrap';
import { createBooking } from '../actions/bookings';
import renderField from '../components/forms/renderField';
import DatePicker from './DatePicker';
import TIMES from '../utils/bookings';

const form = reduxForm({
  form: 'booking-form',
  validate
});

function validate(formProps) {
  const errors = {};

  if (!formProps.fullName) {
    errors.fullName = 'Please enter your full name';
  }

  if (!formProps.email) {
    errors.email = 'Please enter an email address';
  }

  if (!formProps.contactNumber) {
    errors.contactNumber = 'Please enter a contact number';
  }

  if (!formProps.time) {
    errors.time = 'Please select a time';
  }

  return errors;
}

class BookingForm extends Component {
  handleFormSubmit(formProps) {
    this.props.createBooking(formProps);
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <Panel className="bp-background-dark-grey">
        <Row>
          <Col sm={12} smOffset={0}>
            <div className="bp-panel-light">
              <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
                <label className="bp-light-grey">Full Name</label>
                <Field name="fullName" placeholder="e.g John Smith" className="form-control bp-input bp-margin-bottom" component={renderField} type="string" />
                <label className="bp-light-grey">Email</label>
                <Field name="email" placeholder="e.g example@example.com" className="form-control bp-input bp-margin-bottom" component={renderField} type="string" />
                <label className="bp-light-grey">Contact Number</label>
                <Field name="contactNumber" placeholder="e.g 07123456789" className="form-control bp-input" component={renderField} type="string" />
                <label className="bp-light-grey">Date</label>
                <DatePicker />
                <label className="bp-light-grey">Time (approx. 45 minutes)</label>
                <Field
                  name="time"
                  className="form-control gc-input text-capitalize"
                  component="select"
                >
                  {TIMES.map(code =>
                    (
                      <option key={code} value={code}>
                        {code}
                      </option>
                    )
                  )}
                </Field>
                <Button type="submit" bsSize="large" block bsStyle="success" className="btn bp-btn bp-margin-top">Next</Button>
              </form>
            </div>
          </Col>
        </Row>
      </Panel>
    );
  }
}

function mapStateToProps(state) {
  return {
    errorMessage: state.auth.error,
    message: state.auth.message
  };
}

export default connect(mapStateToProps, { createBooking })(form(BookingForm));
