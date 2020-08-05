import express from 'express';
import Router from 'express';

const app = express();

app.get('/users', (request, response, next ) => {
  response.status(200).json({message: 'Hello World!'})
 
});

app.listen(3333);

