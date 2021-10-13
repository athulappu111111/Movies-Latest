import React, { Component } from "react";
import axios from "axios";
import RentdetailsTable from "./RentdetailsTable";
import Table from "react-bootstrap/Table";
import "react-bootstrap-table2-filter/dist/react-bootstrap-table2-filter.min.css";
import BootstrapTable from "react-bootstrap-table-next";
import filterFactory, { textFilter } from "react-bootstrap-table2-filter";

export default class Movielist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movieusers: [],
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:4000/movieusers")
      .then((res) => {
        this.setState({
          movieusers: res.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  DataTable() {
    return this.state.movieusers.map((res, i) => {
      return <RentdetailsTable obj={res} key={i} />;
    });
  }

  render() {
    return (
      <div className="table-wrapper">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Movie Title</th>
              <th>Date Rented</th>
              <th>Date Returned</th>
              <th>Daily Rent Amount</th>
              <th>Number of Days</th>
              <th>Total Rent Amount</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>{this.DataTable()}</tbody>
        </Table>
      </div>
    );
  }
}
