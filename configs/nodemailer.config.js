
const nodemailer = require('nodemailer')

let transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'ironhackmeat@gmail.com',
        pass: `${process.env.NODEMAILER_PASSWORD}`
    }
})

module.exports = transporter