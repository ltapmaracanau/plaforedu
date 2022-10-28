import axios from "axios";

export const sendEmail = (values) =>
  axios
    .post("https://api.emailjs.com/api/v1.0/email/send", values)
    .then((response) => response)
    .catch((error) => error);
