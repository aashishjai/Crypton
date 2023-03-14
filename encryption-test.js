// ceasar cipher in javascript

// function to encrypt a string
function encrypt(str, key) {
    let str_cpy = "";
    let encrypted = "";
    
    for (let i = 0; i < str.length; i++) 
    {
        str_cpy += str[i] + str[i];
    }

    for (let i = 0; i < str_cpy.length; i++) 
    {
        encrypted += String.fromCharCode(str_cpy.charCodeAt(i) + ((key * str.length) * (str.length / key)));
    }
    return encrypted;
}
function decrypt(encrypted, key) {
    let str_cpy = "";
    let decrypted = "";
    
    // Calculate original length of str
    let str_len = encrypted.length / 2;
    
    // Reconstruct str from str_cpy
    for (let i = 0; i < encrypted.length; i += 2) {
        str_cpy += encrypted[i];
    }
    
    // Decrypt each character of str_cpy
    for (let i = 0; i < str_cpy.length; i++) {
        decrypted += String.fromCharCode(str_cpy.charCodeAt(i) - ((key * str_len) * (str_len / key)));
    }
    return decrypted;
}



console.log(decrypt(encrypt("aashish" , 5), 5))
// console.log(encrypt("aashish" , 5))