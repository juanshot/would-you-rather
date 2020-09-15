import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import ArrowRightIcon from "@material-ui/icons/ArrowForwardIos";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";

import { fromTimestampToDate } from "../../utilities/formatters";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    backgroundColor: theme.palette.background.paper,
    height: "100%",
    overflow: "auto",
  },
}));

const QuestionList = (props) => {
  const classes = useStyles();
  return (
    <List component="nav" className={classes.root}>
      {props.questions.map((question, key) => (
        <React.Fragment key={key}>
          <ListItem button>
            <ListItemAvatar>
              <Avatar src={question.author.avatarURL}></Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={`${question.optionOne.text} or ${question.optionTwo.text} ?`}
              secondary={`${question.author.name} - ${fromTimestampToDate(
                question.timestamp
              )}`}
            />
            <ListItemSecondaryAction>
              <IconButton edge="end" aria-label="delete">
                <ArrowRightIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
          <Divider variant="inset" component="li" />
        </React.Fragment>
      ))}
    </List>
  );
};

export default QuestionList;
