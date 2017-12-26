import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import moment from 'moment';
import { Col, Panel, Row, Button } from 'react-bootstrap';
import { create, getAvailableSlots } from '../actions/bookings';
import renderField from '../components/forms/renderField';
import DatePicker from './DatePicker';

const form = reduxForm({
  form: 'booking-form',
  fields: ['name', 'email', 'contactNumber', 'reservationTime'],
  validate
});

function validate(formProps) {
  const errors = {};

  if (!formProps.name) {
    errors.name = 'Please enter your full name';
  }

  if (!formProps.email) {
    errors.email = 'Please enter an email address';
  }

  if (!formProps.contactNumber) {
    errors.contactNumber = 'Please enter a contact number';
  }

  if (!formProps.reservationTime) {
    errors.reservationTime = 'Please select a time';
  }

  return errors;
}

class BookingForm extends Component {
  constructor(props) {
    super(props);
    this.state = { reservationTime: null, availableSlots: this.props.timeSlots };
    this.setDate = this.setDate.bind(this);
    this.setTime = this.setTime.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.componentWillReceiveProps = this.componentWillReceiveProps.bind(this);
  }

  componentWillReceiveProps(){
    this.setState({ availableSlots: this.props.timeSlots });
  }

  setDate(date) {
    this.setState({ reservationTime: date }, () => {
      this.props.getAvailableSlots(moment(this.state.reservationTime).format('DD-MM-YYYY'));
    });
  }

  setTime(e) {
    const TIME = moment(this.state.reservationTime).format('DD-MM-YYYY').concat(' ').concat(e.target.value);
    this.setState({ reservationTime: TIME });
  }

  handleFormSubmit(formProps) {
    formProps.reservationTime = moment.utc(this.state.reservationTime, 'DD-MM-YYYY HH:mm');
    this.props.create(formProps);
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <Panel className="bp-background-dark-grey">
        <Row>
          <Col sm={12} smOffset={0}>
            <div className="bp-panel-light">
              <form onSubmit={handleSubmit(this.handleFormSubmit)}>
                <label className="bp-light-grey">Full Name</label>
                <Field name="name" placeholder="e.g John Smith" className="form-control bp-input bp-margin-bottom" component={renderField} type="string" />
                <label className="bp-light-grey">Email</label>
                <Field name="email" placeholder="e.g example@example.com" className="form-control bp-input bp-margin-bottom" component={renderField} type="string" />
                <label className="bp-light-grey">Contact Number</label>
                <Field name="contactNumber" placeholder="e.g 07123456789" className="form-control bp-input" component={renderField} type="string" />
                <label className="bp-light-grey">Date</label>
                <DatePicker name="date" onChange={this.setDate} />
                {
                  this.state.availableSlots &&
                    <div>
                      <label className="bp-light-grey">Time (approx. 45 minutes)</label>
                      <Row>
                        <Col xs={6}>
                          <Field
                            onChange={this.setTime}
                            name="reservationTime"
                            className="form-control bp-input"
                            component="select"
                          >
                            {this.state.availableSlots.map(code =>
                              (
                                <option key={code} value={code}>
                                  {code}
                                </option>
                              )
                            )}
                          </Field>
                        </Col>
                      </Row>
                    </div>
                }
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
    message: state.auth.message,
    timeSlots: state.public.timeSlots
  };
}

export default connect(mapStateToProps, { create, getAvailableSlots })(form(BookingForm));
