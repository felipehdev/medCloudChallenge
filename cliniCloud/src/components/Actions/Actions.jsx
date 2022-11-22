import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import S from "./Actions.module.css";

const Actions = (rowId) => {
  console.log(rowId);

  const [user, setUser] = useState("");
  console.log(user);

  function update() {
    axios
      .put(
        `https://fd4faqc395.execute-api.sa-east-1.amazonaws.com/dev/user/${rowId.rowId.id}`,
        {
          birthdate: user.birthdate,
          cpf: user.cpf,
          address: user.address,
          email: user.email,
          name: user.name,
        }
      )
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  useEffect(() => {
    axios
      .get(
        `https://fd4faqc395.execute-api.sa-east-1.amazonaws.com/dev/user/${rowId.rowId.id}`
      )
      .then(function (response) {
        console.log(response);
        setUser(response.data.Item)
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [rowId]);

  function deleteUser() {
    axios.delete(
      `https://fd4faqc395.execute-api.sa-east-1.amazonaws.com/dev/user/${rowId.rowId.id}`
    );
  }

  return (
    <div> 
        <hr />
      <div className={S.formCtn}>       
        <div>
          <Typography variant="h6">Update User</Typography>
          <div className={S.nameCtn}>
            <div>
              <Typography >Name</Typography>
              <TextField
                onChange={(e) => setUser({ ...user, name: e.target.value })}
                value={user.name}
                size="small"
              ></TextField>
            </div>
            <div>
              <Typography>Birthdate</Typography>
              <TextField
                onChange={(e) =>
                  setUser({ ...user, birthdate: e.target.value })
                }
                value={user.birthdate}
                size="small"
              ></TextField>
            </div>
          </div>
          <div className={S.cpfCtn}>
            <div>
              <Typography>CPF</Typography>
              <TextField
                onChange={(e) => setUser({ ...user, cpf: e.target.value })}
                value={user.cpf}
                size="small"
              ></TextField>
            </div>
            <div>
              <Typography>Email</Typography>
              <TextField
                onChange={(e) => setUser({ ...user, email: e.target.value })}
                value={user.email}
                size="small"
              ></TextField>
            </div>
            <div>
              <Typography>Address</Typography>
              <TextField
                onChange={(e) => setUser({ ...user, address: e.target.value })}
                value={user.address}
                size="small"
              ></TextField>
            </div>
          </div>
        </div>
        <div className={S.btnsCtn}>
          <Button onClick={deleteUser} variant="outlined" size="small">
            {"Delete"}
          </Button>

          <Button onClick={update} variant="contained" size="small">
            {"Update"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Actions;
