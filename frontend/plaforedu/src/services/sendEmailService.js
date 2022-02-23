import axios from 'axios'

export const sendEmail = (values) => new Promise(async (resolve, reject) => {
    await axios.post('https://api.emailjs.com/api/v1.0/email/send', values)
    .then(function (response) {
        resolve(response)
    })
    .catch(function (error) {
        resolve(error)
    });
})