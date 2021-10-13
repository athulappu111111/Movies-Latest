import React, { Component } from "react";
import axios from "axios";
import RentdetailsTable from "./RentdetailsTable";
import Table from "react-bootstrap/Table";
import MaterialTable from "material-table";
import Tablerowdetails from "./Tablerowdetails";

export default class Tabledata extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movieusers: [],
    };
    console.log(this.state.movieusers);
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
      return <Tablerowdetails obj={res} key={i} />;
    });
  }

  render() {
    return (
      <div>
        <MaterialTable
          title="Rent Details"
          columns={[
            { title: "Movie Title ", field: "movietitle" },
            { title: "Date Rented", field: "daterented" },
            { title: "Date Returned", field: "datereturned" },
            { title: "Daily Rent Amount", field: "dailyrental" },
            { title: "Number of Days", field: "noofdays" },
            { title: "Total Rent Amount", field: "rentalamount" },
            { title: "Action" },
          ]}
          data={[this.DataTable()]}
          options={{
            filtering: true,
          }}
        />
      </div>
    );
  }
}
