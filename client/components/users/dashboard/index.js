import React from 'react';
import moment from 'moment';
import {connect} from 'react-redux';
import {Row, Col, Panel } from 'react-bootstrap';
import Navbar from './Navbar';
import DayPicker from '../../../containers/DayPicker';
import {list} from '../../../actions/bookings';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { reservations: null };
    this.onChange = this.onChange.bind(this);
  }

  componentWillReceiveProps() {
    console.log(this.props.reservations);
    this.setState({
      reservations: this.props.reservations
    });
  }

  onChange(date) {
    const DATE = moment(date).format('DD-MM-YYYY');
    this.props.list(DATE);
  }

  render() {
    return (
      <div>
        <Row>
          <Col sm={4} smOffset={1}>
            <h3>Select Date</h3>
            <DayPicker onChange={this.onChange} />
          </Col>
          <Col sm={6}>
            <h3>Reservations</h3>
            { this.props.reservations && this.props.reservations.length ?
              (
                this.props.reservations.map(reservation => (
                  <Panel key={reservation._id} id="collapsible-panel-example-2">
                    <Panel.Heading>
                      <Panel.Title toggle>
                        <p className="pull-left">{reservation.name}</p><span className="pull-right">{moment(reservation.reservationTime).format("HH:mm")}</span>
                        <br />
                      </Panel.Title>
                    </Panel.Heading>
                    <Panel.Collapse>
                      <Panel.Body>
                        <p>Name: {reservation.name}</p>
                        <p>Email: {reservation.email}</p>
                        <p>Contact Number: {reservation.contactNumber}</p>
                      </Panel.Body>
                    </Panel.Collapse>
                  </Panel>
                  )
                )
              )
              :
              <Panel className="bp-padding-small">
                <p>
                  There are no reservations on this date.
                </p>
              </Panel>
            }
          </Col>
        </Row>
      </div>
    );
  }
}
;

function mapStateToProps(state) {
  return {
    reservations: state.reservation.list,
    date: state.reservation.date
  };
}

export default connect(mapStateToProps, {list})(Dashboard);
