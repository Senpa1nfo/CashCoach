const nodemailer = require('nodemailer');

class MailService {

    constructor() {
        this.transporter = nodemailer.createTransport({
            host: process.env.SMPT_HOST,
            port: process.env.SMPT_PORT,
            secure: false,
            auth: {
                user: process.env.SMPT_USER,
                pass: process.env.SMPT_PASSWORD
            },
            tls: {
                rejectUnauthorized: false
            }
        });
    }

    async SendActivationMail(to, link) {
        await this.transporter.sendMail({
            from: process.env.SMPT_USER,
            to,
            subject: 'Активация аккаунта на ' + process.env.API_URL,
            text: '',
            html: 
                `
                <div>
                    <h1>Для Активации перейдите по ссылке</h1>
                    <a href="${link}">${link}</a>
                </div>
                `
        });
    }
}

module.exports = new MailService();