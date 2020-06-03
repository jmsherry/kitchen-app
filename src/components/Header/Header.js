import React, { useContext } from "react";
// import { NavLink } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
// import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import NavDrawer from "../NavDrawer/NavDrawer";
import { Context as NavDrawerContext } from "./../../contexts/navdrawer.context";

import "./Header.css";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    paddingRight: "64px",
  },
}));

export default function Header() {
  const classes = useStyles();
  const [, setNavDrawerOpen] = useContext(NavDrawerContext);
  const toggleMenu = () => {
    console.log("toggling commanded");
    setNavDrawerOpen(true);
  };
  return (
    <div className={classes.root}>
      <NavDrawer />
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={toggleMenu}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="span" className={classes.title}>
            Kitchen App
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
