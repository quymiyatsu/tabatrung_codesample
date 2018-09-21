express = require("express");

const config=require("./config");
const UserActivityRoute=require("./routes/useractivityroute");
const UserAccountRoute=require("./routes/useraccountroute");
      
var app = express();  

app.use(express.static("public"));
console.log('server starting');


app.use('/',UserActivityRoute);
app.use('/api/v1/user/account',UserAccountRoute);

var server = require("http").createServer(app);

server.listen(8090);





