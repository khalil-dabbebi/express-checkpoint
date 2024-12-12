const nodemailer = require ('nodemailer')
 // nodemailer cest un code tnajem tab3eth bih des email min application a base node .js
 // set up the email transporter par detail 

function sendmail(){
 const transporter = nodemailer.createTransport({

    service: 'gmail',
    auth: {
      user: 'folen-benfolen@gmail.com',  // Replace with your Gmail address
      pass: 'your-password'          // Replace with your Gmail password ( )
    }
 });


 const html = '<p>Hello, this is a test email sent from a Node.js app!</p>';
// hathi 3lh??:
// vous avez une variable html que vous utilisez pour le contenu du message, mais elle n'est pas définie. Vous devez soit la définir avant de l'utiliser, soit remplacer cette variable par une chaîne de texte contenant le contenu HTML.



 // set up email data
 const info= {
    from: 'folen-benfolen@gmail.com',
    to: 'receiver@gmail.com',
    subject: 'Test Email from Node.js',
    html: html,
 };

 transporter.sendmail(info,(err, info)=>
   { if (err){
        console.log ('error occurred',err); // fama deux point??::::::::::::::::::::::::
        
        // return un defaut email mayetb3athech
    }else{
        console.log('email sent', info.messageId);// info.reponse
    }

})
}
module.exports.emailSender = sendmail;