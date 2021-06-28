const formatDate = (rawDate) => {
  const months = [
    "jan",
    "feb",
    "mar",
    "apr",
    "may",
    "jun",
    "jul",
    "ago",
    "sep",
    "oct",
    "nov",
    "dec",
  ];
  let adjustedDate = rawDate.split("-");
  let month = months[parseInt(adjustedDate[1]) - 1];
  let day = adjustedDate[2].substring(0, 2);
  return `${day} ${month}, ${adjustedDate[0]}`;
};
export default formatDate;
