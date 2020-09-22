export const fromTimestampToDate = (timestamp) => {
  const dateFormatted = new Date(timestamp).toDateString();
  return dateFormatted.slice(3, dateFormatted.length);
};

export const sortBy = (field) => (a, b) => b[field] - a[field];
