import React, { Component } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import MaterialTable from "material-table";
import { SSL_OP_DONT_INSERT_EMPTY_FRAGMENTS } from "constants";
// import { useGlobalFilter } from "react-table";
// import { Globalfilter } from "./Globalfilter";

export default class Tablerowdetails extends Component {
  constructor(props) {
    super(props);
    this.deletemovieuser = this.deletemovieuser.bind(this);
  }

  deletemovieuser() {
    axios
      .delete(
        "http://localhost:4000/movieusers/delete-movieuser/" +
          this.props.obj._id
      )
      .then((res) => {
        console.log("Details successfully deleted!");
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <>
        data=
        {[
          {
            movietitle: this.props.obj.movietitle,
            daterented: this.props.obj.daterented,
            datereturned: this.props.obj.datereturned,
            dailyrental: this.props.obj.dailyrental,
            noofdays: this.props.obj.noofdays,
            rentalamount: this.props.obj.rentalamount,
          },
        ]}
      </>
    );
  }
}
