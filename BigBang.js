const fs = require('fs');

function bigBang() {

  const bigBangArr = [];

  for (let num = 1; num <= 100; num++) {

    if (num % 3 === 0 && num % 5 === 0)
      bigBangArr.push('BIG BANG');
    
    else if (num % 3 === 0)
      bigBangArr.push('BIG');
    
    else if (num % 5 === 0)
      bigBangArr.push('BANG');
    
    else
      bigBangArr.push(num.toString());
  
  }

  // Convert the array into JSON
  const jsonData = JSON.stringify(bigBangArr);

  // Save the JSON data into output.json file
  fs.writeFile('output.json', jsonData, 'utf8', (err) => {

    if (err)
      console.log('Error writing to file:', err);
    
    else
      console.log('\nSuccesfully written to file.');
    
  });

  return jsonData;

}

// Display the result on the console
console.log(bigBang());