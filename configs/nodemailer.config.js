const nodemailer = require('nodemailer')

let transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: process.env.NODEMAILER_NAME,
        pass: process.env.NODEMAILER_PASSWORD
    }
})

module.exports = transporter

