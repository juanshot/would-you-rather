export const fromTimestampToDate = (timestamp) => {
  const dateFormatted = new Date(timestamp).toDateString();
  return dateFormatted.slice(3, dateFormatted.length);
};

export const sortBy = (field, secondaryField) => (a, b) => {
  if (secondaryField) {
    if (b[field] === a[field]) {
      return b[secondaryField] - a[secondaryField];
    } else {
      return b[field] - a[field];
    }
  } else {
    return b[field] - a[field];
  }
};

export const formatUserRequest = (user) => ({
  [user.userNameValue]: {
    id: user.userNameValue,
    name: user.nameValue,
    avatarURL: user.avatarURLValue,
    questions: [],
  },
});
