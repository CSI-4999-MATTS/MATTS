import React from "react";
import { makeStyles } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import ListItemText from "@material-ui/core/ListItemText";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "react-router-dom";
import LogInButton from "../components/LogInButton";
import LogoutButton from "../components/LogoutButton.js";
import delve from "../images/Delve.png";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { Button } from "@material-ui/core";

function NavBar(props) {
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },

    menuButton: {
      marginRight: theme.spacing(5),
      color: "#32E0C4",
      "&:hover": {
        backgroundColor: "#32E0C4",
        color: "#0D7377",
      },
    },

    title: {
      flexGrow: 1,
      textAlign: "center",
    },

    toolbar: {
      backgroundColor: "#0D7377",
      height: 25,
      width: "100%",
    },

    link: {
      color: "#32E0C4",
      textDecoration: "none",
    },

    delvelogo: {
      width: 350,
      marginTop: 75,
    },

    menulist: {
      color: "#32E0C4",
      "&:hover": {
        backgroundColor: "#32E0C4",
        color: "#0D7377",
      },
    },
  }));

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };


  const StyledMenu = withStyles({
    paper: {
      border: "5px solid #0D7377",
      width: "300px",
      height: "100%",
      borderRadius: 10,
    },
  })((props) => (
    <Menu
      elevation={0}
      getContentAnchorEl={null}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "center",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "center",
      }}
      {...props}
    />
  ));

  const StyledMenuItem = withStyles((theme) => ({
    root: {
      color: "#0D7377",
      textAlign: "center",
      paddingTop: "20px",
      paddingBottom: "20px",
      "&:hover": {
        backgroundColor: "#0D7377",
        "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
          color: "#32E0C4",
        },
      },
    },
  }))(MenuItem);

  const classes = useStyles();

  const isLoggedIn = props.loggedIn;

  return (
    <AppBar position="static" elevation={3}>
      <Toolbar className={classes.toolbar}>
        <div>
          {isLoggedIn ? (
            <Button
              aria-controls="customized-menu"
              aria-haspopup="true"
              onClick={handleClick}
              className={classes.menuButton}
            >
              {" "}
              <MenuIcon />
            </Button>
          ) : (
            <div></div>
          )}
          <StyledMenu
            id="costumized-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <StyledMenuItem>
              <Link to={`/Articles/Planning`} style={{textDecoration: 'none', color: "#0D7377", marginLeft: '36%'}}><ListItemText primary="Planning"/></Link>
            </StyledMenuItem>
            <StyledMenuItem>
              <Link to={`/Articles/Design`} style={{textDecoration: 'none', color: "#0D7377", marginLeft: '39%'}}><ListItemText primary="Design"/></Link>
            </StyledMenuItem>
            <StyledMenuItem>
              <Link to={`/Articles/Implementation`} style={{textDecoration: 'none', color: "#0D7377", marginLeft: '30%'}}><ListItemText primary="Implementation"/></Link>
            </StyledMenuItem>
            <StyledMenuItem>
              <Link to={`/Articles/Test&Deploy`} style={{textDecoration: 'none', color: "#0D7377", marginLeft: '19%'}}><ListItemText primary="Testing and Deployment"/></Link>
            </StyledMenuItem>
            <StyledMenuItem>
              <Link to={`/Articles/Maintenance`} style={{textDecoration: 'none', color: "#0D7377", marginLeft: '33%'}}><ListItemText primary="Maintenance"/></Link>
            </StyledMenuItem>
          </StyledMenu>
        </div>

        <Typography variant="h3" className={classes.title}>
          <Link to="/Home" className={classes.link}>
            <img className={classes.delvelogo} src={delve} alt={"Delve Logo"} />
          </Link>
        </Typography>
        <div className={classes.link}>
          {isLoggedIn ? <LogoutButton /> : <LogInButton />}
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
