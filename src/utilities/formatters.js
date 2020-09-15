export const fromTimestampToDate = (timestamp, local) =>
  new Date(timestamp).toDateString(local);
