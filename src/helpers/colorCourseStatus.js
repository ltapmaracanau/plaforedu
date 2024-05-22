export default function colorCourseStatus(status) {
  const options = {
    PENDING: "orange",
    ACTIVE: "green",
    FILED: "blue",
  };
  return options[status] || options.FILED;
}
