
fs.writeFile('file.txt', 'Hello World!', function (err) {
  if (err) throw err;
  console.log('File saved!');
});