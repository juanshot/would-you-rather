import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Avatar,
  Divider,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
} from "@material-ui/core";

import { fromTimestampToDate } from "../../utils/formatters";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    backgroundColor: theme.palette.background.paper,
    overflow: "auto",
  },
}));

const QuestionList = (props) => {
  const classes = useStyles();
  return (
    <List component="nav" className={classes.root}>
      {props.questions.map((question, key) => (
        <React.Fragment key={key}>
          <ListItem button onClick={() => props.onSelect(question.id)}>
            <ListItemAvatar>
              <Avatar src={question.author.avatarURL}></Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={`${question.optionOne.text} or ${question.optionTwo.text} ?`}
              secondary={`${question.author.name} - ${fromTimestampToDate(
                question.timestamp
              )}`}
            />
          </ListItem>
          <Divider variant="inset" component="li" />
        </React.Fragment>
      ))}
    </List>
  );
};

export default QuestionList;
