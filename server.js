const fs = require("fs");

let i = 0;

setInterval(() => {
  fs.appendFileSync("log.txt", new Date().toTimeString() + "\n");
  i++;
  if (i === 3) {
    const p = Promise.reject(new Error("test"));
  }
}, 1000);

process.on("unhandledRejection", error => {
  // Won't execute
  console.log("unhandledRejection", error);
  fs.appendFileSync("log.txt", error + " " + i + "\n");
  i = 0;
  process.exit(i);
});
