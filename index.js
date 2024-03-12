const fs = require('fs');
fs.readFile('./dist/output.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
  fs.writeFile('./test.txt', `***${data.trim()}***`, err => {
    if (err) {
      console.error(err);
    } else {
      // file written successfully
    }
  });
});