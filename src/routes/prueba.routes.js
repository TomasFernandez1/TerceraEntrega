import RouterClass from './router.js'
import { sendEmail, sendSms, generateUser } from '../utils.js'

export default class productsRouter extends RouterClass {
  init() {
    this.get('/mail', ['PUBLIC'], (req, res) => {
      const destinatary = 'tommypunk2004@gmail.com'
      const subject = 'Test email CODERHOUSE'
      const html = '<h1>EMAIL TEST</h1>'
      sendEmail(destinatary, subject, html)
      res.send('Sending mail...')
    })

    this.get('/sms', ['PUBLIC'], (req, res) => {
      sendSms('tomas', 'fernandez')
      res.send('Sending sms...')
    })

    this.get('/users', ['PUBLIC'],(req, res) => {
      let users = []
      for (let i = 0; i < 10; i++) {
        users.push(generateUser())
      }
      res.sendSuccess(users)
    })
  }
}
