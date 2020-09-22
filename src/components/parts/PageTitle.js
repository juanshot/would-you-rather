import React from "react";
import PropTypes from "prop-types";
import { Typography } from "@material-ui/core";

const PageTitle = (props) => (
  <Typography variant="h6" component="h6">
    {props.title}
  </Typography>
);

PageTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

export default PageTitle;
