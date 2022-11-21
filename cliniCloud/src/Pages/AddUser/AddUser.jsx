import React from "react";
import Title from "../../components/Title/Title";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";
import S from "./AddUser.module.css";
import axios from "axios";

//validaçoes
// data de aniversario seletor de abre fecha a data é montada e enviada pro server
// cpf buscar regex
// endereço buscar endereço valido no busca cep ou correios
// email email deve conter pelo menos 3 letras antes da arroba, a arroba, o provedor, o ponto , e pelo menos dois digitos apos o ponto.
//**nome o nome é composto por dois campos, nome e sobrenome que sao unidos e enviados em camelcase pro servidor

const AddUser = () => {
  const [newUser, setNewUser] = useState({});

  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");

  console.log(day, month, year);

  console.log(newUser);

  function post() {
    axios
      .post("https://fd4faqc395.execute-api.sa-east-1.amazonaws.com/dev/user", {
        birthdate: `${year}-${month}-${day}`,
        cpf: newUser.cpf,
        address: newUser.address,
        email: newUser.email,
        name: newUser.name,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <>
      <CssBaseline />
      <div className="dashboard">
        <div className="table">
          <Title />

          <Box className={S.formCtn} component="form">
            <Typography variant="h5" component="h2" className={S.pageTitle}>
              Add Patient
            </Typography>

            <Typography component="h4" className={S.fieldTt}>
              Fullname
            </Typography>
            <div className={S.nameCtn}>
              <TextField
                value={newUser.name}
                onChange={(e) =>
                  setNewUser({ ...newUser, name: e.target.value })
                }
                className={S.fieldTypeOne}
                required
                id="name"
                label="Name"
                variant="outlined"
              />
            </div>

            <Typography component="h4" className={S.fieldTt}>
              Birthdate
            </Typography>
            <div className={S.birthdateCtn}>
              <TextField
              value={day}
                onChange={(e) => {
                  setDay(e.target.value);
                }}
                onBlur={(e) => {
                  setNewUser({
                    ...newUser,
                    birthday: `${day}-${month}-${year}`,
                  });
                }}
                className={S.fieldTypeTwo}
                id="day"
                label="Day"
                variant="outlined"
              />
              <TextField
              value={month}
                onChange={(e) => {
                  setMonth(e.target.value);
                }}
                onBlur={(e) => {
                  setNewUser({
                    ...newUser,
                    birthday: `${day}-${month}-${year}`,
                  });
                }}
                className={S.fieldTypeTwo}
                id="month"
                label="Month"
                variant="outlined"
              />
              <TextField
              value={year}
                onChange={(e) => {
                  setYear(e.target.value);
                }}
                onBlur={(e) => {
                  setNewUser({
                    ...newUser,
                    birthday: `${day}-${month}-${year}`,
                  });
                }}
                className={S.fieldTypeTwo}
                id="year"
                label="Year"
                variant="outlined"
              />
            </div>

            <div className={S.emailCtn}>
              <TextField
                onChange={(e) =>
                  setNewUser({ ...newUser, email: e.target.value })
                }
                value={newUser.email}
                className={S.fieldTypeThree}
                required
                id="email"
                label="Email"
                variant="outlined"
              />

              <TextField
                onChange={(e) =>
                  setNewUser({ ...newUser, address: e.target.value })
                }
                value={newUser.address}
                className={S.fieldTypeThree}
                id="address"
                label="Address"
                variant="outlined"
              />

              <TextField
                onChange={(e) =>
                  setNewUser({ ...newUser, cpf: e.target.value })
                }
                value={newUser.cpf}
                className={S.fieldTypeThree}
                id="cpf"
                label="CPF"
                variant="outlined"
              />
              <Button onClick={post} variant="contained">Add</Button>
            </div>
          </Box>
          <div className="cttCtn"></div>
        </div>
      </div>
    </>
  );
};

export default AddUser;
