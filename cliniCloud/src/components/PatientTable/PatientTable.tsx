import * as React from "react";
import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import axios from "axios";
import { autocompleteClasses } from "@mui/material";


//usar funçao onEditRowsModelChange

const PatientTable = () => {
  
  const [ rows, setRows ] = useState([]);
  console.log(rows);
  

  // axios method that reqs all the patients on load
  useEffect(() => {

    axios
      .get("https://fd4faqc395.execute-api.sa-east-1.amazonaws.com/dev/user/")
      .then(function (response) {
        setRows(response.data.Items)
      })
      .catch(function (error) {
        console.log(error);
      })

  }, []);

  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 200,
      description: "This column can`t be changed.",
    },
    {
      field: "cpf",
      headerName: "CPF",
      width: 200,
      editable: true,
    },
    {
      field: "name",
      headerName: "Name",
      width: 300,
      editable: true,
    },
    {
      field: "birthdate",
      headerName: "Birthdate",
      type: "string",
      width: 200,
      editable: true,
    },
    {
      field: "email",
      headerName: "Email",
      width: 250,
      editable: true,
    },
    {
      field: "address",
      headerName: "Address",
      editable: true,
      width: 250,
    },
    {
      field: "options",
      headerName: "Options",
      description: "This column shows save and cancel operations options.",
      editable: true,
      sortable: false,
      width: 160,
    },
  ];

  return (
    <Box sx={{ margin: "0 auto", height: 400, width: "95%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={6}
        rowsPerPageOptions={[9]}
        disableSelectionOnClick

        autoHeight= {true}
        autoPageSize= {true}
        density	= {"standard"}
        editMode = { "row"}
        experimentalFeatures={{ newEditingApi: true }}
        headerHeight= {65}
      />
    </Box>
  );
};

export default PatientTable;
