const fs = require("fs");
const directory = "./";
console.log(directory);
fs.readdir(`${directory}`, (err, files) => {
  let str = files.toString();
  let array = str.split(",");
  for (let i = 0; i < array.length; i++) {
    fs.unlink(`${directory}${array[i]}`, function (err) {
      if (err) {
        throw err;
      }
      console.log("File deleted!");
    });
  }
});
