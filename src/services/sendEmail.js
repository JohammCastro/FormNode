const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "mail.recarxpress.app",
  port: 465,
  secure: true,
  auth: {
    // TODO: replace `user` and `pass` values from <https://forwardemail.net>
    user: "account@recarxpress.app",
    pass: "nvT(Oy4@AcH4",
  },
});

// async..await is not allowed in global scope, must use a wrapper
const main = async (correo)=> {
  // send mail with defined transport object
  const info = await transporter.sendMail({
    from: '"Recarxpress Soporte" <account@recarxpress.app>', // sender address
    to: "yolon50260@ricorit.com", // list of receivers
    subject: "Eliminar Cuenta", // Subject line
    // text: "Solicitud ", // plain text body
    html: `<p>Hola! <b>${correo}</b>.</p><p> Hemos recibido tu solicitud: 'Eiminar Cuenta'.</p> <p>Aun quieres eliminar tu cuenta? Ingresa a este link y sigue los pasos: <a href="http://localhost:3000/Form2/${correo}">Eliminar Cuenta</a>.</p><p><b>Si no enviaste la solicitud, por favor, comunicate con soporte desde la APP.</b></p>`, // html body
  });

  // console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  //
  // NOTE: You can go to https://forwardemail.net/my-account/emails to see your email delivery status and preview
  //       Or you can use the "preview-email" npm package to preview emails locally in browsers and iOS Simulator
  //       <https://github.com/forwardemail/preview-email>
  //
}

// main().catch(console.error);
module.exports=main