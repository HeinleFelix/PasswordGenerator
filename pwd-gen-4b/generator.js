'use strict';

function generate(){
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890";
    const specialChars = "!@#$%^&*()_+-=";  
    let password = "";
    const minSpecial = 3;
    const length = 8;
    
    for(let i = 0; i < minSpecial; i++){
        password += specialChars.charAt(Math.floor(Math.random() * specialChars.length));
    }
    
    const restLength = length - minSpecial;
    for(let i = 0; i < restLength; i++){
        password += letters.charAt(Math.floor(Math.random() * letters.length));
    }
    
    password = password.split('').sort(() => Math.random() - 0.5).join('');

    return password;
}

module.exports = generate;