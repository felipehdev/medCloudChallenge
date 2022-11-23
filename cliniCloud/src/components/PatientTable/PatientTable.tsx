import * as React from "react";
import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import axios from "axios";
import Actions from "../Actions/Actions"

//usar funçao onEditRowsModelChange

const PatientTable = () => {
  
  const [ rows, setRows ] = useState([]);
  console.log(rows);

  const [ rowId, setRowId] =  useState('');
  console.log(rowId)  
  

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
      width: 150,
      description: "This column can`t be changed.",
      
    },
    {
      field: "cpf",
      headerName: "CPF",
      width: 150,
      editable: false,
    },
    {
      field: "name",
      headerName: "Name",
      width: 300,
      editable: false,
    },
    {
      field: "birthdate",
      headerName: "Birthdate",
      type: "string",
      width: 170,
      editable: false,
    },
    {
      field: "email",
      headerName: "Email",
      width: 300,
      editable: false,
    },
    {
      field: "address",
      headerName: "Address",
      width: 250,
      editable: false,
    },
  ];

  return (
    <Box sx={{ margin: "0 auto", width: "99%"}}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={9}
        rowsPerPageOptions={[9]}
        disableSelectionOnClick

        onRowClick={(params)=> {setRowId(params);}}
        autoHeight= {true}
        density	= {"standard"}
        editMode = { "row"}
        experimentalFeatures={{ newEditingApi: true }}
        headerHeight= {65}
      />
      
      {rowId ? ( <Actions rowId={rowId} />) : null}
    </Box>
  );
};

export default PatientTable;
