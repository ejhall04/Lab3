const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  readline.question('Enter a word or phrase: ', str => {
    for( var i = 0; i < str.length/2; i++){
        if(str[i] == str[str.length - 1 - i])
            console.log("Word or phrase is a palindrome");
        else
            console.log("Word or phrase is not a palindrome");
    }
    readline.close();
  })

  
