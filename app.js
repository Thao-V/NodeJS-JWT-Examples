const jwt = require("jsonwebtoken");
const fs = require("fs");
//var token = jwt.sign({ foo: 'bar' }, 'shhhhh');
// console.log(token)
var privateKey = fs.readFileSync("./private.pem");
//console.log(privateKey);
try {
  var token = jwt.sign({ foo: "bar" }, privateKey, { algorithm: "RS256" });
  console.log(token);
} catch (error) {
    console.log('error')
}
