import React from "react";
import S from "./SideMenu.module.css";
import { Button } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import Typography from "@mui/material/Typography";

import { Link as RouterLink } from "react-router-dom";

const SideMenu = () => {
  return (
    <div>
      <div className={S.sidebarCtn}>
        <nav className={S.sidebar}>
          <div className={S.menu}>
            <RouterLink to="/">
              <Button className={S.btn} color="primary" variant="contained">
                <HomeIcon />
                <Typography variant="p">Home</Typography>
              </Button>
            </RouterLink>
            <RouterLink to="/addUser">
              <Button className={S.btn} variant="contained">
                <PersonAddAlt1Icon />
                <Typography variant="p">New Patient</Typography>{" "}
              </Button>
            </RouterLink>
          </div>
          <div className={S.logOutCtn}>
            <Button className={S.btn} color="error" variant="contained">
              ❌Sair
            </Button>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default SideMenu;
