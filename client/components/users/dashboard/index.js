import React from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
import { Row, Col, Panel } from 'react-bootstrap';
import Navbar from './Navbar';
import DayPicker from '../../../containers/DayPicker';
import { list } from '../../../actions/bookings';

class Dashboard extends React.Component {
  constructor(props){
    super(props);
    this.state = { reservations: null };
    this.onChange = this.onChange.bind(this);
  }

  componentWillReceiveProps() {
    console.log(this.props.reservations);
    this.setState({ reservations: this.props.reservations })
  }

  onChange(date) {
    const DATE = moment(date).format('DD-MM-YYYY');
    this.props.list(DATE);
  }

  render() {
    return (
      <div>
        <Navbar />
        <Row>
          <Col sm={4} smOffset={1}>
            <h3>Select Date</h3>
            <DayPicker onChange={this.onChange} />
          </Col>
          <Col sm={6}>
            <h3>Reservations</h3>
            { this.props.reservations ?
              (
                this.props.reservations.map((reservation) => (
                    <Panel>
                      <p>
                        {reservation.name}
                      </p>
                    </Panel>
                  )
                )
              )
                :
              <Panel>
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
};

function mapStateToProps(state) {
  return {
    reservations: state.reservation.list,
    date: state.reservation.date
  };
}

export default connect(mapStateToProps, { list })(Dashboard);
