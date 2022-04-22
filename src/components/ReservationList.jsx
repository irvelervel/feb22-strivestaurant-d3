// let's grab the reservations back from the API!
// if you need a state object, you need a class for your component
// if you need to work with the LIFECYCLE METHODS of a component, you need a class
// we need to work with a lifecycle method in order to FETCH DATA from the internet in our component

import { Component } from 'react'
import { Row, Col, ListGroup } from 'react-bootstrap'

// a fetch() is potentially an expensive operation: we want to perform it the least
// amount of times possible, and in the less intrusive way possible: after presenting the
// STATIC content of the component

// we want to perform the fetch() once, and AFTER we present the user the static parts of our component

class ReservationList extends Component {
  render() {
    // render() is already a lifecycle method!
    // render() in a class component is in charge of returning the JSX
    return (
      <Row className="justify-content-center my-4">
        <Col md={6} className="text-center">
          <h2>Booked Tables</h2>
          <ListGroup>
            <ListGroup.Item>Cras justo odio</ListGroup.Item>
            <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
            <ListGroup.Item>Morbi leo risus</ListGroup.Item>
            <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
            <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    )
  }
}

export default ReservationList
