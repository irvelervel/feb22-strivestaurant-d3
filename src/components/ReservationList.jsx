// let's grab the reservations back from the API!
// if you need a state object, you need a class for your component
// if you need to work with the LIFECYCLE METHODS of a component, you need a class
// we need to work with a lifecycle method in order to FETCH DATA from the internet in our component

// REACT FETCHING LOGIC STEPS
// 1) render() will fire, outputting into the DOM the static elements
// 2) componentDidMount(), if present, fires! will launch the fetching data function
// 3) the data is fetched, and once we have the array of reservations we set the state with them
// 4) because we just set the state, render() fires again (because render() fires every time the state is set or every time a prop changes)

import { Component } from 'react'
import { Row, Col, ListGroup } from 'react-bootstrap'

// a fetch() is potentially an expensive operation: we want to perform it the least
// amount of times possible, and in the less intrusive way possible: after presenting the
// STATIC content of the component

// we want to perform the fetch() once, and AFTER we present the user the static parts of our component

class ReservationList extends Component {
  state = {
    reservations: [],
    // singleObject: null // -> this can maybe become a real object, so let's put an explicit falsy value to begin with
  }

  componentDidMount = () => {
    console.log("I'm componentDidMount!")
    // this is the perfect place for fetching our remote data in a sneaky way :)
    // long story short: componentDidMount is a lifecycle method that happens just ONCE,
    // after the initial invocation of render()
    this.fetchData()
  }

  fetchData = async () => {
    try {
      const response = await fetch(
        'https://striveschool-api.herokuapp.com/api/reservation'
      )
      if (response.ok) {
        // our request was successfull!
        console.log(response)
        // response object looked fine, let's take the body out of it! (the array of reservations)
        let data = await response.json() // .json() extracts the body out of the response. it's ASYNCHRONOUS
        console.log('BODY OF THE RESPONSE', data)
        // GOLDEN RULE:
        // every time you grab some data from the internet, you're going to put it in the STATE of the component
        this.setState({
          reservations: data,
        })
        // every time you set the state, render() fires AGAIN.
      } else {
        // our request got a problem
        alert('something went wrong fetching the reservations :(')
      }
    } catch (error) {
      console.log('error!', error)
    }
  }

  render() {
    // render() is already a lifecycle method!
    // render() in a class component is in charge of returning the JSX
    console.log("I'm render")
    return (
      <Row className="justify-content-center my-4">
        <Col md={6} className="text-center">
          <h2>Booked Tables</h2>
          <ListGroup>
            {/* reservations initially is [] */}
            {/* after setting the state, reservations is NOT [] anymore! */}
            {this.state.reservations.map((r) => (
              <ListGroup.Item key={r._id}>{r.name}</ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
      </Row>
    )
  }
}

export default ReservationList
