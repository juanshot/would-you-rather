import React from "react";
import PropTypes from "prop-types";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  avatar: {
    width: theme.spacing(4),
    height: theme.spacing(4),
  },
  button: {
    fontSize: theme.spacing(2),
  },
  buttonText: {
    marginRight: theme.spacing(1),
  },
  menuItem: {
    minWidth: "200px",
  },
}));

const UserMenu = (props) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const classes = useStyles();
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div style={{ marginLeft: "auto" }}>
      <IconButton
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
        color="inherit"
        className={classes.button}
      >
        <span className={classes.buttonText}>{props.user.name}</span>
        <Avatar
          alt="user avatar"
          src={props.user.avatarURL}
          className={classes.button}
        />
      </IconButton>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={props.onLogout} className={classes.menuItem}>
          Logout
        </MenuItem>
      </Menu>
    </div>
  );
};

UserMenu.propTypes = {
  onLogout: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
};

export default UserMenu;
