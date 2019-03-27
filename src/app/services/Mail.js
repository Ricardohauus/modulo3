const nodemailer = require('nodemailer')
const mailConfig = require('../../config/mail')
const hbs = require('nodemailer-express-handlebars')

const transport = nodemailer.createTransport(mailConfig)
const config = {
  viewEngine: {
    extName: '.hbs',
    partialsDir: 'src/app/views/emails',
    layoutsDir: 'src/app/views/emails',
    defaultLayout: 'purchase.hbs'
  },
  viewPath: 'src/app/views/emails',
  extName: '.hbs'
}
transport.use('compile', hbs(config))

module.exports = transport
