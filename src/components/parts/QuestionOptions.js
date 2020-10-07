import React, { useState } from "react";
import PropTypes from "prop-types";

import Button from "@material-ui/core/Button";

const QuestionOptions = (props) => {
  const { handleAnswer } = props;
  const [voteSubmitted, setVoteSubmitted] = useState(false);
  const OPTION_ONE = "optionOne";
  const OPTION_TWO = "optionTwo";

  const submitAnswer = (option) => {
    setVoteSubmitted(true);
    handleAnswer(option);
  };

  return (
    <React.Fragment>
      <Button
        size="large"
        variant="contained"
        color="primary"
        disabled={props.userHasVoted || voteSubmitted}
        onClick={() => submitAnswer(OPTION_ONE)}
      >
        {props.optionOne.text}
      </Button>
      <Button
        size="large"
        variant="contained"
        color="primary"
        disabled={props.userHasVoted || voteSubmitted}
        onClick={() => submitAnswer(OPTION_TWO)}
      >
        {props.optionTwo.text}
      </Button>
    </React.Fragment>
  );
};

QuestionOptions.propTypes = {
  handleAnswer: PropTypes.func.isRequired,
  optionOne: PropTypes.object.isRequired,
  optionTwo: PropTypes.object.isRequired,
  userHasVoted: PropTypes.bool.isRequired,
};

export default QuestionOptions;
