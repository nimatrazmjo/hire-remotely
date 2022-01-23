import express from 'express';


const app = express()

app.use('/',(req, res) => {
  res.send({});
});

export { app as routers };