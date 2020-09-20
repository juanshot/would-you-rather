import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import UserOverview from "./parts/UserOverview";
import { handleSaveQuestionAnswer } from "./../store/actions/questions";
import { fromTimestampToDate } from "../utilities/formatters";
import { checkIfUserHasAnswered } from "./../utilities/validators";

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
  const optionOne = props.question.optionOne.text;
  const optionTwo = props.question.optionTwo.text;
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
        <UserOverview user={author} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {`${optionOne} OR ${optionTwo}`}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="div">
            <Box>
              Created at : {fromTimestampToDate(props.question.timestamp)}
            </Box>
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.questionChoices}>
        {!currentUserHasVoted ? (
          <React.Fragment>
            <Button
              size="large"
              color="primary"
              onClick={() => handleAnswer("optionOne")}
            >
              {optionOne}
            </Button>
            <Button
              size="large"
              color="primary"
              onClick={() => handleAnswer("optionTwo")}
            >
              {optionTwo}
            </Button>
          </React.Fragment>
        ) : (
          <div>You have Voted!</div>
        )}
      </CardActions>
    </Card>
  );
};

QuestionDetail.propTypes = {
  questionId: PropTypes.string,
};

const mapStateToProps = ({ questions, users, authedUser }, { questionId }) => ({
  authedUser,
  question: {
    ...questions[questionId],
    author: users[questions[questionId].author],
  },
});

export default connect(mapStateToProps)(QuestionDetail);
