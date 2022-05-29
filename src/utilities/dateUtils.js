function convertTimeToDate(time) {
  return time.toLocaleDateString("en-US", {
    month: "2-digit",
    day: "2-digit",
    year: "numeric",
  });
}

export default convertTimeToDate;
