import React from "react";
import S from "./SideMenu.module.css";
import { Button } from "@mui/material";

import { Link as RouterLink } from "react-router-dom";

const SideMenu = () => {
  return (
    <div>
      <div className={S.sidebarCtn}>
        <nav className={S.sidebar}>
          <div className={S.menu}>
            <Button className={S.btn} variant="contained">
              <RouterLink to="/">🏚 Home</RouterLink>
            </Button>
            <Button className={S.btn} variant="contained">
              <RouterLink to="/addUser">➕ New Patient</RouterLink>
            </Button>
          </div>
          <div className={S.logOutCtn}>
            <Button className={S.btn} variant="contained">
              ❌Sair
            </Button>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default SideMenu;
