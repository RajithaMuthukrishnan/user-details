const express = require('express');
const app = express(),
      bodyParser = require("body-parser");
      port = 8081;

const users = [];

app.use(bodyParser.json());
// app.use(express.static(process.cwd()+"/my-app/dist/angular-nodejs-docker-compose/"));
app.use(express.static(process.cwd()+"/my-app/dist/user-deails/"));

app.get('/api/users', (req, res) => {
  console.log('Getting all users')
  res.json(users);
});

app.post('/api/user', (req, res) => {
  console.log('Adding user')
  const user = req.body.user;
  users.push(user);
  res.json("user added");
});

app.get('/', (req,res) => {
  // res.sendFile(process.cwd()+"/angular-app/dist/angular-nodejs-docker-compose/index.html")
  res.sendFile(process.cwd()+"/angular-app/dist/user-details/index.html")
});

app.listen(port, () => {
    console.log(`Server listening on the port::${port}`);
});
