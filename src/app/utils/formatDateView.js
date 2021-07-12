const formatDateView = (rawDate) => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let adjustedDate = rawDate.split("-");
  let month = months[parseInt(adjustedDate[1]) - 1];
  let day = adjustedDate[2].substring(0, 2);
  return `${day} of ${month}, ${adjustedDate[0]}`;
};
export default formatDateView;
