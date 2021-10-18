import React from "react";
import { useState, useEffect } from "react";
import MaterialTable from "material-table";
import axios from "axios";

const Customerdetail = () => {
  const [customerList, setCustomerList] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4000/customers/")
      .then((response) => response.json())
      .then((result) => setCustomerList(result))
      .catch((error) => console.log("error"));
  }, []);
  return (
    <div>
      <MaterialTable
        title="Customer Details"
        columns={[
          { title: "First Name ", field: "fname" },
          { title: "Last Name", field: "lname" },
          { title: "Email", field: "email" },
          { title: "Password", field: "password" },
          { title: "Phone Number", field: "phoneno" },
          { title: "ID ", field: "_id", hidden: true },
        ]}
        data={customerList}
        options={{
          actionsColumnIndex: -1,
          exportButton: true,
          filtering: true,
        }}
        editable={{
          onRowDelete: (selectedRow, event) =>
            axios
              .delete(
                "http://localhost:4000/customers/delete-customer/" +
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

export default Customerdetail;
