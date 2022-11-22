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

const AddUser = () => {

  //usuario a ser criado
  const [newUser, setNewUser] = useState({});
  console.log(newUser);

  //construtor da data (poderia ser um objeto)
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  console.log(day, month, year);

  const [ successText, setSuccessText] = useState('')

  //VALIDAÇOES
  const [error, setError] = useState({
    name: false,    
    email: false,
  });
  console.log(error);

  const [helperText, setHelperText] = useState({
    name: "",
    email: "",
  });

  const [ btnOff, setBtnOff ] = useState(false)  

  const rgex = {
    name: /^[a-zA-Z]+ [a-zA-Z]+$/,    
    email: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
  };

  const validateName = () => {
    if (rgex.name.test(newUser.name) === true) {
      setError({ ...error, name: false });
      setHelperText({ ...error, name: "✔ That's a valid fullname." });      
      setBtnOff(false);
    } else {
      setError({ ...error, name: true });
      setHelperText({ ...error, name: "Invalid fullname." });
      setBtnOff(true)
    }
  };

  const validateEmail = () => {
    if (rgex.email.test(newUser.email) === true) {
      setError({ ...error, email: false });
      setHelperText({ ...error, email: "✔ That's a valid email." });
      setBtnOff(false);
    } else {
      setError({ ...error, email: true });
      setHelperText({ ...error, email: "Invalid email" });
      setBtnOff(true);
    }
  };

  //post function
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
      if (response.status = 200) {
        setSuccessText('Patient created')
      }
      else {
        setSuccessText('Something went wrong')
      }
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });


  }

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
                error={error.name}
                helperText={helperText.name}
                value={newUser.name}
                onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
                onBlur={validateName}
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
                onChange={(e) => { setDay(e.target.value);}}
                onBlur={() => { setNewUser({...newUser, birthday: `${day}-${month}-${year}`});}}
                className={S.fieldTypeTwo}
                id="day"
                label="Day"
                variant="outlined"
              />
              <TextField
                value={month}
                onChange={(e) => { setMonth(e.target.value);}}
                onBlur={() => {setNewUser({...newUser, birthday: `${day}-${month}-${year}`});}}
                className={S.fieldTypeTwo}
                id="month"
                label="Month"
                variant="outlined"
              />
              <TextField
                value={year}
                onChange={(e) => {setYear(e.target.value);}}
                onBlur={() => {setNewUser({...newUser, birthday: `${day}-${month}-${year}`});}}
                className={S.fieldTypeTwo}
                id="year"
                label="Year"
                variant="outlined"
              />
            </div>

            <div className={S.emailCtn}>
              <TextField
                error={error.email}
                helperText={helperText.email}
                value={newUser.email}
                onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
                onBlur={validateEmail}
                className={S.fieldTypeThree}
                required
                id="email"
                label="Email"
                variant="outlined"
              />

              <TextField
                error={error.address}
                helperText={helperText.address}
                onChange={(e) => setNewUser({ ...newUser, address: e.target.value })}
                value={newUser.address}
                className={S.fieldTypeThree}
                id="address"
                label="Address"
                variant="outlined"
              />

              <TextField
                error={error.cpf}
                helperText={helperText.cpf}
                value={newUser.cpf}
                onChange={(e) => setNewUser({ ...newUser, cpf: e.target.value })}
                className={S.fieldTypeThree}
                id="cpf"
                label="CPF"
                variant="outlined"
              />
              <Button disabled={btnOff} onClick={post} variant="contained">
                Add
              </Button>
              <p>{successText}</p>
            </div>
          </Box>
          <div className="cttCtn"></div>
        </div>
      </div>
    </>
  );
};

export default AddUser;
