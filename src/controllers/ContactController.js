import nodemailer from 'nodemailer';
import Contact from '../models/Contact';

class ContactController {
  async index(req, res) {
    try {
      const contacts = await Contact.findAll({
        attributes: [
          'id', 'name', 'lastname', 'email', 'message',
        ],
        order: [['id', 'DESC']],
      });

      return res.json(contacts);
    } catch (e) {
      return res.json(e);
    }
  }

  async sendEmail(req, res) {
    try {
      const contacts = await Contact.create(req.body);

      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'lailtonxavierofc@gmail.com',
          pass: 'YouBbLau0074002',
        },
      });

      const mailOptions = {
        from: 'Entrando em Contato com Lailton <lailtonxavierofc@gmail.com',
        to: '<lailtonxavier123@gmail.com>',
        // replyTo: 'lailton@lailtonnx.com.br',
        subject: `${contacts.name} ${contacts.lastname}  Esta enviando um e-mail`,
        html: `<h1>${contacts.name} ${contacts.lastname}</h1> <br />
        <p> Seu email: ${contacts.email}</p> <br />
        <p> Assunto: <br /> ${contacts.message} </p>`,
      };

      await transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.log(error);
        } else {
          console.log(`Email sent: ${info.response}`);
        }
      });

      return res.json(contacts);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }
}

export default new ContactController();
