/////////////// mot de passe ya ghaaliii/////////

let generatePassword = require('./password-generator');

const password = generatePassword(21, { 
    numbers: true,
     symbols: true,
      lowercase: true, 
      uppercase: true });

      console.log('Generated Password:', password);

      module.exports.password = password;
