import React from "react";
import PropTypes from "prop-types";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
} from "@material-ui/core";
import DialogTitle from "./parts/DialogTitle";

import NewUser from "./parts/NewUser";

const RegistrationDialog = (props) => {
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
        <NewUser />
      </DialogContent>
      <DialogActions>
        <Button onClick={() => props.onChange(false)}>Cancel</Button>
        <Button color="primary" autoFocus>
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

export default RegistrationDialog;
