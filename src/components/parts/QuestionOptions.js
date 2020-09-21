import React from "react";
import PropTypes from "prop-types";

import Button from "@material-ui/core/Button";

const QuestionOptions = (props) => {
  const { handleAnswer } = props;
  return (
    <React.Fragment>
      <Button
        size="large"
        variant="contained"
        color="primary"
        disabled={props.userHasVoted}
        onClick={() => handleAnswer("optionOne")}
      >
        {props.optionOne.text}
      </Button>
      <Button
        size="large"
        variant="contained"
        color="primary"
        disabled={props.userHasVoted}
        onClick={() => handleAnswer("optionTwo")}
      >
        {props.optionTwo.text}
      </Button>
    </React.Fragment>
  );
};

QuestionOptions.propTypes = {
  handleAnswer: PropTypes.func,
  optionOne: PropTypes.object,
  optionTwo: PropTypes.object,
  userHasVoted: PropTypes.bool,
};

export default QuestionOptions;
