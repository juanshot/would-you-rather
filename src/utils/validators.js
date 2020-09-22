export const checkIfUserHasAnswered = (authedUser) => (question) => {
  const { optionOne, optionTwo } = question;
  return [optionOne, optionTwo].some((option) =>
    option.votes.includes(authedUser)
  );
};

export const checkIfUserIsAuthor = (userId) => (question) =>
  question.author === userId;
