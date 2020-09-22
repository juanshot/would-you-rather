import React, { useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
} from "@material-ui/core";
import DialogTitle from "./parts/DialogTitle";
import NewUser from "./parts/NewUser";
import { addUser } from "./../store/actions/users";
import { formatUserRequest } from "./../utils/formatters";

const RegistrationDialog = (props) => {
  const [newUserReq, setNewUserReq] = useState({});
  const isUserValid = () => {
    const newUserReqValues = Object.values(newUserReq);
    return (
      newUserReqValues.length &&
      newUserReqValues.every((value) => Boolean(value))
    );
  };
  const saveUser = () => {
    const { dispatch } = props;
    dispatch(addUser(formatUserRequest(newUserReq)));
    props.onChange(false);
  };
  return (
    <Dialog
      onClose={() => props.onChange(false)}
      aria-labelledby="simple-dialog-title"
      open={props.isOpen}
      maxWidth="md"
      fullWidth={true}
    >
      <DialogTitle onClose={() => props.onChange(false)} />
      <DialogContent>
        <NewUser onChange={(user) => setNewUserReq(user)} />
      </DialogContent>
      <DialogActions>
        <Button onClick={() => props.onChange(false)}>Cancel</Button>
        <Button
          disabled={!isUserValid()}
          color="primary"
          autoFocus
          onClick={saveUser}
        >
          Create
        </Button>
      </DialogActions>
    </Dialog>
  );
};

RegistrationDialog.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default connect()(RegistrationDialog);
