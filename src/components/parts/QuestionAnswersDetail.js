import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import { List, ListItem, ListItemText, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    backgroundColor: theme.palette.background.paper,
  },
}));

const QuestionAnswersDetail = (props) => {
  const classes = useStyles();
  const totalVotes =
    props.optionOne.votes.length + props.optionTwo.votes.length;
  return (
    <div className={classes.root}>
      <List>
        <ListItem>
          <ListItemText>
            <Typography>
              You have voted for : {props[props.userSelection].text}
            </Typography>
          </ListItemText>
        </ListItem>
        <ListItem>
          <ListItemText>
            <Typography>
              {props.optionOne.text} :{`${props.optionOne.votes.length} Votes`}{" "}
              -- (
              {((props.optionOne.votes.length * 100) / totalVotes).toFixed(2)}{" "}
              %)
            </Typography>
            <Typography>
              {props.optionTwo.text} :{`${props.optionTwo.votes.length} Votes`}{" "}
              ({((props.optionTwo.votes.length * 100) / totalVotes).toFixed(2)}
              %)
            </Typography>
          </ListItemText>
        </ListItem>
      </List>
    </div>
  );
};

QuestionAnswersDetail.propTypes = {
  optionOne: PropTypes.object,
  optionTwo: PropTypes.object,
  userSelection: PropTypes.string,
};

const mapStateToProps = ({ authedUser }, { optionOne, optionTwo }) => {
  const hasSelectedOptionOne = !!optionOne.votes.find(
    (user) => user === authedUser
  );
  return {
    userSelection: hasSelectedOptionOne ? "optionOne" : "optionTwo",
  };
};

export default connect(mapStateToProps)(QuestionAnswersDetail);
