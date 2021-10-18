import React from "react";
import MaterialTable from "material-table";
import { useState, useEffect } from "react";
import axios from "axios";

const Rentdetail = () => {
  const [userList, setUserList] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4000/movieusers")
      .then((response) => response.json())
      .then((result) => setUserList(result))
      .catch((error) => console.log("error"));
  }, []);

  return (
    <div>
      <MaterialTable
        title="Movie Rent Details"
        columns={[
          { title: "Movie Title ", field: "movietitle" },
          { title: "Date Rented", field: "daterented" },
          { title: "Date Returned", field: "datereturned" },
          { title: "Number of Days", field: "noofdays" },
          {
            title: "Daily Rent Amount",
            field: "dailyrental",
            type: "currency",
            currencySetting: { currencyCode: "INR" },
          },

          {
            title: "Total Rent Amount",
            field: "rentalamount",
            type: "currency",
            currencySetting: { currencyCode: "INR" },
          },
          { title: "ID ", field: "_id", hidden: true },
        ]}
        data={userList}
        options={{
          actionsColumnIndex: -1,
          exportButton: true,
          filtering: true,
        }}
        editable={{
          onRowDelete: (selectedRow, event) =>
            axios
              .delete(
                "http://localhost:4000/movieusers/delete-movieuser/" +
                  selectedRow._id
              )
              .then((res) => {
                console.log("Details successfully deleted!");
                console.log(selectedRow);
              })
              .catch((error) => {
                console.log(error);
              }),
        }}
      />
    </div>
  );
};

export default Rentdetail;
