import React from "react";
import { connect } from "react-redux";
import { makeStyles, List } from "@material-ui/core";
import PageTitle from "./parts/PageTitle";
import UserOverview from "./parts/UserOverview";
import WithNavbar from "./hoc/WithNavbar";

import {
  checkIfUserHasAnswered,
  checkIfUserIsAuthor,
} from "./../utils/validators";
import { sortBy } from "./../utils/formatters";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    backgroundColor: theme.palette.background.paper,
  },
}));

const Leaders = (props) => {
  const classes = useStyles();
  return (
    <WithNavbar>
      <PageTitle title="Leaders" />
      <List className={classes.root}>
        {props.leaders.map((leader, key) => (
          <UserOverview key={key} user={props.users[leader.id]} />
        ))}
      </List>
    </WithNavbar>
  );
};

const mapStateToProps = ({ users, questions }) => ({
  leaders: Object.keys(users)
    .map((userKey) => ({
      id: userKey,
      answered: Object.values(questions).filter(checkIfUserHasAnswered(userKey))
        .length,
      asked: Object.values(questions).filter(checkIfUserIsAuthor(userKey))
        .length,
    }))
    .sort(sortBy("answered")),
  users,
});

export default connect(mapStateToProps)(Leaders);
