import React, {Component} from 'react';
import {render} from 'react-dom';

// Add form validation
class CreateTrip extends Component {
  constructor(props) {
    super(props);
    this.state = { driverName: '',
                   tripDate: '',
                   startSt: '',
                   startCity: '',
                   startState: '',
                   endSt: '',
                   endCity: '',
                   endState: '',
                   numSeats: '',
                   seatPrice: '',
                   vehicleMake: '',
                   vehicleModel: '',
                   description: '',
                   driverId: ''
                   };
  }

  handleChange(name, e) {
    let change = {};
    change[name] = e.target.value;
    this.setState(change);
  }

  submitTrip() {
    let filled = true;
    for(var attr in this.state) {
      if(this.state[attr] === '') {
        filled = false;
      }
    }
    if(!filled) {
      render(<div> Please fill out all fields </div>, document.getElementById('create'));
    } else {
      render(<div></div>, document.getElementById('create'));
      this.props.makeTrip(this.state);
    }
  }

  render() {
    return (
      <form className="form-group">
      <div className="col-md-6" id="CreateAndSearchTripsLeft">

            <input
            placeholder = "Start street"
            className="form-control"
            value = {this.state.startSt}
            onChange = {this.handleChange.bind(this, 'startSt')} />

            <input
            placeholder = "Start city"
            className="form-control"
            value = {this.state.startCiy}
            onChange = {this.handleChange.bind(this, 'startCity')} />

            <input
            placeholder = "Start state"
            className="form-control"
            value = {this.state.startState}
            onChange = {this.handleChange.bind(this, 'startState')} />

          <input
            placeholder = "Trip Date"
            className="form-control"
            value = {this.state.tripDate}
            onChange = {this.handleChange.bind(this, 'tripDate')} />

          <input
            placeholder = "Driver name"
            className="form-control"
            value = {this.state.driverName}
            onChange = {this.handleChange.bind(this, 'driverName')} />

          <input
            placeholder = "Driver Id"
            className="form-control"
            value = {this.state.driverId}
            onChange = {this.handleChange.bind(this, 'driverId')} />

          <input
            placeholder = "Description"
            className="form-control"
            value = {this.state.description}
            onChange = {this.handleChange.bind(this, 'description')} />

        </div>
        <div className="col-md-6" id="CreateAndSearchTripsRight">

          <input
            placeholder = "End street"
            className="form-control"
            value = {this.state.endSt}
            onChange = {this.handleChange.bind(this, 'endSt')} />

          <input
            placeholder = "End city"
            className="form-control"
            value = {this.state.endCity}
            onChange = {this.handleChange.bind(this, 'endCity')} />

          <input
            placeholder = "End state"
            className="form-control"
            value = {this.state.endState}
            onChange = {this.handleChange.bind(this, 'endState')} />

          <input
            type = 'number'
            className="form-control"
            placeholder = "# of Seats"
            value = {this.state.numSeats}
            onChange = {this.handleChange.bind(this, 'numSeats')} />

          <input
            type = 'number'
            className="form-control"
            placeholder = "Price per Seats"
            value = {this.state.seatPrice}
            onChange = {this.handleChange.bind(this, 'seatPrice')} />

          <input
            placeholder = "Vehicle Make"
            className="form-control"
            value = {this.state.vehicleMake}
            onChange = {this.handleChange.bind(this, 'vehicleMake')} />

          <input
            placeholder = "Vehicle Model"
            className="form-control"
            value = {this.state.vehicleModel}
            onChange = {this.handleChange.bind(this, 'vehicleModel')} />

        </div>
          <input
            type="button"
            className="btn btn-primary"
            value="Create"
            onClick = {event => this.submitTrip()}/>
      </form>
    )
  }
}

export default CreateTrip
