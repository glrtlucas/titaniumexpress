import "./style.css";
import React from "react";
import {
  makeStyles,
  AppBar, 
  Toolbar, 
  IconButton, 
  Typography,
  Button
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
  root: {
    background: theme.palette.primary.main,
  },
  title: {
    color: theme.palette.primary.main,
    fontSize: 22,
  },
  subtitle: {
    color: '#fff',
    fontSize: 22,
  },
  appbar: {
    background: 'rgb(32, 35, 42)',
    boxShadow: 'none',
    color: '#fff',
    position: 'static',
  },
  grow: {
    flexGrow: 1,
  }
}));

export default function Header() {
  const classes = useStyles();
  return (
    <>
      <AppBar className={classes.appbar}>
          <Toolbar>
            <h1 className={classes.title}>Titanium</h1><h1 className={classes.subtitle}>Express</h1>
            <div className={classes.grow} />
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
    </>
  );
}
