import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';

export default class Editmovie extends Component {

  constructor(props) {
    super(props)

    this.onChangemoviename = this.onChangemoviename.bind(this);
    this.onChangemoviegener = this.onChangemoviegener.bind(this);
    this.onChangemoviedailyrental = this.onChangemoviedailyrental.bind(this);
    this.onChangemovienoofcopies = this.onChangemovienoofcopies.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    // State
    this.state = {
      name: '',
      gener: '',
      dailyrental: '',
      noofcopies: ''
    }
  }

  componentDidMount() {
    axios.get('http://localhost:4000/movies/edit-movie/' + this.props.match.params.id)
      .then(res => {
        this.setState({
          name: res.data.name,
          gener: res.data.gener,
          dailyrental: res.data.dailyrental,
          noofcopies: res.data.noofcopies
        });
      })
      .catch((error) => {
        console.log(error);
      })
  }

  onChangemoviename(e) {
    this.setState({ name: e.target.value })
  }
  onChangemoviegener(e) {
    this.setState({ gener: e.target.value })
  }
  onChangemoviedailyrental(e) {
    this.setState({ dailyrental: e.target.value })
  }

  onChangemovienoofcopies(e) {
    this.setState({ noofcopies: e.target.value })
  }

  onSubmit(e) {
    e.preventDefault()

    const movieObject = {
      name: this.state.name,
      gener: this.state.gener,
      dailyrental: this.state.dailyrental,
      noofcopies: this.state.noofcopies
    };

    axios.put('http://localhost:4000/movies/update-movie/' + this.props.match.params.id, movieObject)
      .then((res) => {
        console.log(res.data)
        console.log('movie successfully updated')
      }).catch((error) => {
        console.log(error)
      })

    // Redirect to movie List 
    this.props.history.push('/movie-list')
  }


  render() {
    return (<div className="form-wrapper">
      <Form onSubmit={this.onSubmit}>
        <Form.Group controlId="name">
          <Form.Label>First Name</Form.Label>
          <Form.Control type="text" value={this.state.name} onChange={this.onChangemoviename} />
        </Form.Group>

        <Form.Group controlId="gener">
          <Form.Label>Last Name</Form.Label>
          <Form.Control type="text" value={this.state.gener} onChange={this.onChangemoviegener} />
        </Form.Group>

        <Form.Group controlId="dailyrental">
          <Form.Label>dailyrental</Form.Label>
          <Form.Control type="dailyrental" value={this.state.dailyrental} onChange={this.onChangemoviedailyrental} />
        </Form.Group>

        <Form.Group controlId="noofcopies">
          <Form.Label>Phone No</Form.Label>
          <Form.Control type="text" value={this.state.noofcopies} onChange={this.onChangemovienoofcopies} />
        </Form.Group>

        <Button variant="danger" size="lg" block="block" type="submit">
          Update movie
        </Button>
      </Form>
    </div>);
  }
}
