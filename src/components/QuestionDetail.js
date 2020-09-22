import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import {
  Box,
  Card,
  CardActions,
  CardActionArea,
  CardContent,
  Typography,
} from "@material-ui/core";

import UserOverview from "./parts/UserOverview";
import QuestionAnswersDetail from "./parts/QuestionAnswersDetail";
import QuestionOptions from "./parts/QuestionOptions";
import { handleSaveQuestionAnswer } from "./../store/actions/questions";
import { fromTimestampToDate } from "../utils/formatters";
import { checkIfUserHasAnswered } from "./../utils/validators";

const useStyles = makeStyles({
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
});

const QuestionDetail = (props) => {
  const classes = useStyles();
  const optionOne = props.question.optionOne;
  const optionTwo = props.question.optionTwo;
  const { author, id } = props.question;
  const { authedUser, dispatch } = props;
  const currentUserHasVoted = checkIfUserHasAnswered(authedUser)(
    props.question
  );

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
    <Card className={classes.root}>
      <CardActionArea>
        {/* User Info */}
        <UserOverview user={author} />
        {/* Question Info */}
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {`${optionOne.text} OR ${optionTwo.text}`}
          </Typography>
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
  );
};

QuestionDetail.propTypes = {
  questionId: PropTypes.string.isRequired,
};

const mapStateToProps = ({ questions, users, authedUser }, { questionId }) => ({
  authedUser,
  question: {
    ...questions[questionId],
    author: users[questions[questionId].author],
  },
});

export default connect(mapStateToProps)(QuestionDetail);
