import * as React from "react";
import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import { DataGrid,   GridColDef, GridRenderCellParams } from "@mui/x-data-grid";
import axios from "axios";
import Actions from "../Actions/Actions"

//usar funçao onEditRowsModelChange

const PatientTable = () => {
  
  const [ rows, setRows ] = useState([]);
  console.log(rows);

  const [ rowId, setRowId] =  useState('');

  const [ user, setUser ] = useState('');

  const [ fetch, setFetch ] = useState('');
  

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
      width: 170,
      editable: true,
    },
    {
      field: "email",
      headerName: "Email",
      width: 300,
      editable: true,
    },
    {
      field: "address",
      headerName: "Address",
      width: 250,
      editable: true,
    },
    // {
    //   field: "options",
    //   headerName: "Options",
      
    //   description: "This column shows save and cancel operations options.",
    //   editable: false,
    //   sortable: false,
    //   width: 100,
      
    // },
  ];

  return (
    <Box sx={{ margin: "0 auto", width: "99%"}}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10]}
        disableSelectionOnClick
        
        getRowId={(row) => row.id}
        onRowClick={(params)=> {setRowId(params.id); console.log(rowId);}}
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
