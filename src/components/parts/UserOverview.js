import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Avatar from "@material-ui/core/Avatar";
import CardHeader from "@material-ui/core/CardHeader";
import Typography from "@material-ui/core/Typography";

import {
  checkIfUserHasAnswered,
  checkIfUserIsAuthor,
} from "./../../utilities/validators";

const UserOverview = (props) => {
  return (
    <CardHeader
      avatar={<Avatar src={props.user.avatarURL} aria-label="user" />}
      title={props.user.name}
      subheader={
        <Typography variant="subtitle1" componet="div">
          Asked: {props.questionsAskedCount} | Answered:
          {props.questionsAnsweredCount}
        </Typography>
      }
    />
  );
};

UserOverview.propTypes = {
  user: PropTypes.object,
};

const mapStateToProps = ({ questions }, { user }) => ({
  questionsAnsweredCount: Object.values(questions).filter(
    checkIfUserHasAnswered(user.id)
  ).length,
  questionsAskedCount: Object.values(questions).filter(
    checkIfUserIsAuthor(user.id)
  ).length,
});

export default connect(mapStateToProps)(UserOverview);
