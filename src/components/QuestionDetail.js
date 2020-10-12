import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { questionsExists } from "./../utils/validators";
import {
  Box,
  Card,
  CardActions,
  CardActionArea,
  CardContent,
  Typography,
} from "@material-ui/core";

import WithNavBar from "./hoc/WithNavbar";
import UserOverview from "./parts/UserOverview";
import QuestionAnswersDetail from "./parts/QuestionAnswersDetail";
import QuestionOptions from "./parts/QuestionOptions";
import { handleSaveQuestionAnswer } from "./../store/actions/questions";
import { fromTimestampToDate } from "../utils/formatters";
import { checkIfUserHasAnswered } from "./../utils/validators";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 450,
  },
  media: {
    height: 140,
  },

  questionChoices: {
    display: "flex",
    justifyContent: "center",
  },
  title: {
    color: theme.palette.info.dark,
  },
}));

const QuestionDetail = (props) => {
  const classes = useStyles();
  // Redirect when the id is not Valid
  if (props.redirect) {
    return <Redirect to="/404" />;
  }
  const optionOne = props.question.optionOne;
  const optionTwo = props.question.optionTwo;
  const { author, id } = props.question;
  const { authedUser, dispatch, isLoading } = props;
  let currentUserHasVoted =
    checkIfUserHasAnswered(authedUser)(props.question) || isLoading;

  const handleAnswer = (answer) => {
    dispatch(
      handleSaveQuestionAnswer({
        authedUser,
        qid: id,
        answer,
      })
    );
  };

  return (
    <WithNavBar>
      <Card className={classes.root}>
        <CardActionArea>
          {/* User Info */}
          <UserOverview user={author} />
          {/* Question Info */}
          <CardContent>
            <Typography variant="h5" className={classes.title}>
              Would You Rather:{" "}
            </Typography>
            <Typography
              variant="h6"
              style={{ padding: 5 }}
            >{`${optionOne.text} or ${optionTwo.text}`}</Typography>
            <Typography variant="body2" color="textSecondary" component="div">
              <Box>
                Created at : {fromTimestampToDate(props.question.timestamp)}
              </Box>
            </Typography>
          </CardContent>
        </CardActionArea>
        {/* Show question results when the user has voted */}
        {currentUserHasVoted && (
          <QuestionAnswersDetail optionOne={optionOne} optionTwo={optionTwo} />
        )}
        {/* Actions */}
        <CardActions className={classes.questionChoices}>
          <QuestionOptions
            optionOne={optionOne}
            optionTwo={optionTwo}
            userHasVoted={currentUserHasVoted}
            handleAnswer={handleAnswer}
          ></QuestionOptions>
        </CardActions>
      </Card>
    </WithNavBar>
  );
};

const mapStateToProps = (
  { questions, users, authedUser, system },
  { match }
) => {
  const { question_id } = match.params;
  const isQuestionIdValid = questionsExists(question_id, questions);
  return isQuestionIdValid
    ? {
        authedUser,
        question: {
          ...questions[question_id],
          author: users[questions[question_id].author],
        },
        isLoading: Boolean(system.isLoading),
      }
    : {
        redirect: true,
      };
};

export default connect(mapStateToProps)(QuestionDetail);
